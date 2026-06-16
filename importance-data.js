window.IMPORTANCE_UNITS = [
  {
    no:'07', title:'설계 (Design)', meta:'요구분석 vs 설계 · 설계 원리',
    topics:[
      {name:'설계 원리 5가지', tier:5, type:'list', why:'표준 교재의 설계 핵심. 분할정복·추상화·캡슐화·정보은닉·다형성은 전 교재 공통.', ans:'분할과 정복 · 추상화 · 캡슐화 · 정보은닉 · 다형성', km:'분 추 캡 정 다'},
      {name:'정보 은닉 접근제어자', tier:4, type:'concept', why:'public(+)/private(-)/protected(#) 기호·범위 매칭이 객관식 단골.', ans:'+ 외부허용 / - 외부차단 / # 상속만 허용'},
      {name:'요구분석 vs 설계', tier:4, type:'comp', why:'"무엇(what) vs 어떻게(how)", 명세서 vs 설계서. 비교형 출제.', ans:'요구분석=what=명세서 / 설계=how=설계서'},
      {name:'좋은 설계 조건', tier:3, type:'list', why:'응집도↑·결합도↓가 핵심. 단 항목 수는 교재마다 달라 "개수"보다 응집/결합 개념이 중요.', ans:'강한 응집도 · 약한 결합도 · 추적성 · 변경 국지화'},
      {name:'다형성: 오버로딩 vs 오버라이딩', tier:3, type:'comp', why:'이름같음+매개변수다름 vs 상속+재정의. 헷갈려서 자주 물음.', ans:'오버로딩=중복정의 / 오버라이딩=재정의(상속)'},
    ]
  },
  {
    no:'09', title:'아키텍처 · 클래스 설계', meta:'아키텍처 스타일 · 품질속성 · SOLID',
    topics:[
      {name:'SOLID 5원칙', tier:5, type:'list', why:'★최빈출. 정보처리기사·면접·과제 어디서나. 약어 풀이+각 정의까지 출제.', ans:'SRP·OCP·LSP·DIP·ISP (단일책임/개방폐쇄/리스코프치환/의존역전/인터페이스분리)', km:'S O L I D'},
      {name:'아키텍처 스타일 5가지', tier:5, type:'list', why:'데이터중심·클라서버·계층·MVC·데이터흐름. 닫힌 분류라 출제 안정적.', ans:'데이터중심(리포지토리)·클라서버·계층·MVC·데이터흐름(파이프필터)', km:'데 클 계 M 흐'},
      {name:'클래스 관계 6가지 + 표기법', tier:5, type:'list', why:'UML 다이어그램 기호(마름모·삼각형·점선) 매칭이 객관식 단골.', ans:'연관·일반화(빈△)·집합(빈◇)·합성(채운◆)·의존(점선)·실체화(점선+빈△)', km:'연 일 집 합 의 실'},
      {name:'시스템 품질 속성 6가지', tier:4, type:'list', why:'가용·변경·성능·보안·사용·테스트. 비즈니스/아키텍처 품질보다 우선 출제.', ans:'가용성·변경용이성·성능·보안성·사용성·테스트용이성', km:'가 변 성 보 사 테'},
      {name:'집합 vs 합성', tier:4, type:'comp', why:'생명주기 같냐 다르냐 + 마름모 색. 비교형 단골.', ans:'집합=빈◇·생명주기 다름 / 합성=채운◆·생명주기 같음'},
      {name:'4+1 관점 5가지', tier:3, type:'list', why:'크루첸 모델. 1(시나리오)+4(논리·프로세스·개발·물리) 구조.', ans:'시나리오·논리적·프로세스·개발·물리적', km:'시 논 프 개 물'},
      {name:'품질속성 반영 절차 4단계', tier:3, type:'seq', why:'순서형. 결정→목표→달성→평가.', ans:'중요속성 결정 → 목표수준 → 달성방법 → 평가방법'},
    ]
  },
  {
    no:'10', title:'구현 (Implementation)', meta:'표준 코딩 규칙',
    topics:[
      {name:'표준 코딩 규칙 7종', tier:3, type:'list', why:'명칭·소스형식·주석·변수·상수·수식·문장. 분류는 명확하나 출제 비중은 중간.', ans:'명칭·소스형식·주석·변수자료형·상수·수식·문장', km:'명 소 주 변 상 수 문'},
      {name:'표준 코딩 규칙 장점', tier:2, type:'concept', why:'가독성·유지보수·효율 중심. "정확히 N개"보다 취지 이해.', ans:'가독성↑·유지보수↑·효율↑·개발시간 단축'},
      {name:'프로그래밍 언어 역사', tier:2, type:'list', why:'포트란~자바. 흥미 위주, 출제 가능성 낮음.', ans:'포트란→베이직→C→C++→C#→자바'},
    ]
  },
  {
    no:'11', title:'디자인 패턴 (GoF)', meta:'생성 · 구조 · 행위',
    topics:[
      {name:'GoF 3분류 (생성/구조/행위)', tier:5, type:'list', why:'★자격시험 매회 출제. 3분류 각 의미 + 어느 패턴이 어디 속하는지 매칭.', ans:'생성(5)·구조(7)·행위(11) = 총 23', km:'생 구 행'},
      {name:'패턴 식별 (상황→패턴명)', tier:5, type:'concept', why:'"기능 덧붙임→Decorator, 1개만→Singleton" 식 식별 문제가 핵심.', ans:'Decorator=기능추가 / Singleton=단일 / Adapter=호환 / Factory=생성위임'},
      {name:'생성 패턴 5종', tier:4, type:'list', why:'Singleton·Factory가 특히 빈출.', ans:'Factory Method·Singleton·Prototype·Builder·Abstract Factory'},
      {name:'구조 패턴 7종', tier:4, type:'list', why:'Decorator·Adapter·Proxy 빈출.', ans:'Decorator·Adapter·Composite·Bridge·Facade·Flyweight·Proxy'},
      {name:'Strategy vs State', tier:3, type:'comp', why:'기능이 바뀌나 vs 상태가 바뀌나. 둘 다 interface 구조라 헷갈림.', ans:'Strategy=기능(전략) 교체 / State=상태 교체'},
      {name:'Singleton 구현 키워드', tier:3, type:'concept', why:'private 생성자·static·getInstance·동기화(synchronized/DCL).', ans:'private 생성자 + static instance + getInstance()'},
    ]
  },
  {
    no:'11', title:'테스트 1 (정적·분류)', meta:'테스트 절차 · 정적 테스트',
    topics:[
      {name:'테스트 절차 4단계', tier:5, type:'seq', why:'★순서형 최빈출. 계획→설계→실행→오류수정. 순서 틀리면 감점.', ans:'테스트 계획 → 케이스 설계 → 실행·측정 → 오류 추적·수정', km:'계 설 실 오'},
      {name:'확인(V&V) vs 검증', tier:4, type:'comp', why:'verification(제대로 만듦) vs validation(맞는 걸 만듦). 예시형 단골.', ans:'확인=명세대로 정확히 / 검증=사용자가 원한 게 맞나'},
      {name:'목적별 테스트 9가지', tier:3, type:'list', why:'기능·성능·스트레스·보안 등. 개수는 교재차 있으나 종류 인지 필요.', ans:'기능·성능·스트레스·보안·안정성·복원·구조·회귀·병행'},
      {name:'공식 검토 절차 6단계', tier:3, type:'seq', why:'순서형. 계획→착수→준비→검토→재작업→완료.', ans:'계획→착수→개별준비→검토회의→재작업→완료확인', km:'계 착 개 검 재 완'},
      {name:'정적 vs 동적 테스트', tier:3, type:'comp', why:'실행 안 함(정적) vs 실행함(동적). 분류 기준.', ans:'정적=실행X(검토·검사) / 동적=실행O(블랙·화이트)'},
      {name:'살충제 패러독스', tier:2, type:'concept', why:'정의 암기형. 같은 케이스 반복하면 결함 못 잡음.', ans:'동일 케이스 반복 시 더는 결함 미발견 → 케이스 갱신'},
    ]
  },
  {
    no:'12', title:'테스트 2 (동적·통합)', meta:'블랙/화이트박스 · 통합 전략',
    topics:[
      {name:'블랙박스 vs 화이트박스', tier:5, type:'comp', why:'★자격시험 매회. 명세기반(내부X) vs 구현기반(내부O). 각 기법까지.', ans:'블랙=명세기반·기능 / 화이트=구현기반·코드경로'},
      {name:'통합 테스트 전략', tier:5, type:'list', why:'★빈출. 하향식(스텁)·상향식(드라이버)·빅뱅·샌드위치. 드라이버/스텁 매칭.', ans:'빅뱅 / 하향식(스텁) / 상향식(드라이버) / 샌드위치'},
      {name:'개발 단계별 테스트 5 (V모델)', tier:5, type:'seq', why:'단위→통합→시스템→인수→회귀. V모델 대응까지.', ans:'단위→통합→시스템→인수→회귀', km:'단 통 시 인 회'},
      {name:'블랙박스 기법 4가지', tier:4, type:'list', why:'동등분할·경계값이 특히 빈출.', ans:'신택스·동등분할·경계값분석·원인결과그래프', km:'신 동 경 원'},
      {name:'화이트박스 방법 6가지', tier:4, type:'list', why:'문장·분기·조건 커버리지 + 기본경로.', ans:'문장·분기·조건·분기조건·다중조건·기본경로', km:'문 분 조 분조 다 기'},
      {name:'순환 복잡도 공식 3가지', tier:4, type:'list', why:'매케이브 메트릭. R수 / E-N+2 / P+1. 계산 출제 가능.', ans:'CC = R수 = E−N+2 = P+1'},
      {name:'드라이버 vs 스텁', tier:3, type:'comp', why:'상위 역할(드라이버) vs 하위 역할(스텁). 통합테스트와 연결.', ans:'드라이버=상위모듈 역할 / 스텁=하위모듈 역할'},
    ]
  },
];
