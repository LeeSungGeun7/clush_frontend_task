
### **클러쉬 프론트엔드 과제 프로젝트**


### **소개**
간단한 투두리스트를 기능하는 앱입니다. 
구현된 기능으로는 투두리스트 생성/수정/삭제/정렬/검색 이며 , 
리액트의 SPA의 특징을 활용하여 사용자 친화적이고 반응형웹에 신경썼습니다. 

###
**폴더구조**

##
**주요 라이브러리 구성**

React v18.3.1: 컴포넌트 기반 개발 및 SPA 편의성으로 사용

Recoil : 전역상태관리 라이브러리 

TypeScript : 자바스크립트에서 정적 타입 분석을 위해 사용

React-Router-Dom : 페이지 이동이 가능한 라이브러리 

JSON-server : 가상 서버로 Restful 한 통신을 보여주기 위해서 사용

ESLint: Standard Style: 통일된 코딩 스타일과 코드 품질을 유지하기 위해 사용

Styled-Components: CSS-in-JS 라이브러리로 전역스타일링 및 컴포넌트 기반의 편의성으로 채택했습니다.

Axios: JSON 형식의 응답 데이터를 자동으로 처리하며, fetch보다 능동적인 기능 제공으로 인해 선정했습니다.

Ant-design 5.20.5 : 사용자 친화적이고 빠른 UI 구성 

CRA: 개발 시간을 단축하기 위해 선택했습니다.




## 설치 및 실행 방법

### 1. 환경 설정
- **Node.js**: v18.19.0
- **NPM**: v9.0.0 이상

### 2. 프로젝트 클론
먼저 깃허브 레포지토리를 로컬 환경에 클론합니다.

```bash
git clone https://github.com/LeeSungGeun7/clush_frontend_task.git
cd clush_frontend_task
```


3. json 서버 실행
npm install json-server --save-dev
npx json-server --watch db.json --port 3737

5. 의존성 패키지 설치
npm install

6. 개발 환경 실행
npm run start

7. 정적 빌드 npm run build

8. npm install -g serve


9. serve -s build


주력으로 사용한 컴포넌트

