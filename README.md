
### **클러쉬 프론트엔드 과제 프로젝트**

과제 배포 링크

개발 환경
node.js v18.19.0

nvm use 18.19.0 적용 해주세요~!

설치 및 실행

의존성 패키지 설치

npm install
개발 환경 실행
npm run dev

로컬 http://localhost:3000/ 로 접속

프로덕션 환경 실행
### 빌드
npm run build 

## 실행

npm run preview
기본 http://localhost:4173/musinsa 로 접속

##
**구성 및 선정 이유**

React v18.3.1: 컴포넌트 기반 개발 및 SPA 편의성으로 사용

TypeScript : 자바스크립트에서 정적 타입 분석을 위해 사용

React-Router-Dom : 페이지 이동이 가능한 라이브러리 

ESLint: Standard Style: 통일된 코딩 스타일과 코드 품질을 유지하기 위해 사용

Styled-Components: CSS-in-JS 라이브러리로 전역스타일링 및 컴포넌트 기반의 편의성으로 채택했습니다.

Axios: JSON 형식의 응답 데이터를 자동으로 처리하며, fetch보다 능동적인 기능 제공으로 인해 선정했습니다.

JSON 형식의 응답 데이터를 자동으로 처리하며, fetch보다 능동적인 기능 제공으로 인해 선정했습니다.

Ant-design 5.20.5 : 사용자 친화적이고 빠른 UI 구성 

CRA: 개발 시간을 단축하기 위해 선택했습니다.



## 구현 기능 

반응형 UI 적용 

#### TODO 리스트 
생성 : 타이틀 , 내용 , 태그 생성 

수정 : 타이틀 , 내용 , 태그 수정

삭제 : 해당 선택된 삭제 , 전체 삭제 

정렬 : 생성시간 기준으로 정렬

검색 : 생성된 태그 기준 or 타이틀로 검색

모달 : 경고 , 알림 , 재확인 용도 

#### 일정 관리 