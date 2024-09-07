
### **클러쉬 프론트엔드 과제 프로젝트**
---

**TODO-TASK** 

간단한 투두리스트를 기능하는 앱입니다. 


---
구현기능 
* 투두리스트 생성 
* 투두리스트 수정 
* 투두리스트 삭제 
* 투두리스트 날짜별 조회

---

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

 1. 환경 설정
- **Node.js**: v18.19.0 (nvm use 18.19.0)
- **NPM**: v10.3.0 

2. 프로젝트 클론
먼저 깃허브 레포지토리를 로컬 환경에 클론합니다.

```bash
git clone https://github.com/LeeSungGeun7/clush_frontend_task.git
cd clush_frontend_task
```

4. json 서버 실행


```
npm install json-server --save-dev
npx json-server --watch db.json --port 3737
```


5. 의존성 패키지 설치


```
npm install
```


6. 로컬 환경 실행

```
npm run start
```
http://localhost:3000 로 접속

------------------------
**빌드 실행 방법**


```
npm run build

npm install -g serve

serve -s build
```

http://172.30.1.78:3000 로 접속

---

### 주력으로 사용한 컴포넌트

--- 

TodoForm.tsx

스타일을 레이아웃을  헤더 , 바디 , 푸터별로 분리하여

스타일 유지보수 측면에서 신경을 썼습니다. 

ㅇ





UI 참고사이트 
- https://blog.naver.com/iceirony/221182098102
