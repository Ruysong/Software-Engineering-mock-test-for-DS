import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const source = path.join(root, "소프트웨어공학_지문강화형_문제통합_최종본.md");
const raw = fs.readFileSync(source, "utf8").replace(/\r\n/g, "\n");

const sections = raw
  .split(/^## (?=\d+\.)/m)
  .slice(1)
  .map((block) => {
    const title = block.match(/^(.+)$/m)?.[1].trim();
    const passageBlock = block.match(/### 강화 지문\n\n([\s\S]*?)\n\n확인 포인트:\n([\s\S]*?)\n\n(?:---\n\n)?### 문제/) ?? [];
    const questionBlock = block.match(/### 문제\n\n([\s\S]*?)\n\n### 정답 및 해설/)?.[1] ?? "";
    const answerBlock = block.match(/### 정답 및 해설\n\n([\s\S]*?)(?:\n\n---|$)/)?.[1] ?? "";

    const passage = (passageBlock[1] ?? "")
      .split(/\n\n+/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);
    const points = (passageBlock[2] ?? "")
      .split("\n")
      .map((line) => line.replace(/^- /, "").trim())
      .filter(Boolean);

    const questionMatches = [...questionBlock.matchAll(/^(\d+)\. (.+)\n((?: {3}\d+\. .+\n?){5})/gm)];
    const answerMatches = [...answerBlock.matchAll(/^(\d+)\. ([①②③④⑤])\. (.+)$/gm)];
    const answers = new Map(
      answerMatches.map((match) => [Number(match[1]), { answer: "①②③④⑤".indexOf(match[2]), explanation: match[3].trim() }]),
    );

    const questions = questionMatches.map((match) => {
      const number = Number(match[1]);
      const answer = answers.get(number);
      return {
        id: `${title.match(/^\d+/)?.[0]}-${number}`,
        prompt: match[2].trim(),
        choices: match[3]
          .trim()
          .split("\n")
          .map((line) => line.trim().replace(/^\d+\.\s*/, "")),
        answer: answer?.answer ?? -1,
        explanation: answer?.explanation ?? "",
      };
    });

    return {
      id: Number(title.match(/^\d+/)?.[0]),
      title: title.replace(/^\d+\.\s*/, ""),
      passage,
      points,
      questions,
    };
  });

const invalid = sections.filter(
  (section) =>
    section.passage.length === 0 ||
    section.points.length === 0 ||
    section.questions.length !== 5 ||
    section.questions.some((question) => question.choices.length !== 5 || question.answer < 0 || !question.explanation),
);

if (sections.length !== 18 || invalid.length) {
  throw new Error(`Data validation failed: ${sections.length} sections, invalid sections: ${invalid.map((section) => section.id).join(", ")}`);
}

fs.writeFileSync(
  path.join(root, "data.js"),
  `window.SECTIONS = ${JSON.stringify(sections, null, 2)};\n`,
  "utf8",
);

console.log(`Generated ${sections.length} passages and ${sections.reduce((sum, section) => sum + section.questions.length, 0)} questions.`);
