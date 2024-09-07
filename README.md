
### **클러쉬 프론트엔드 과제 프로젝트**
---

**TODO-TASK** 

간단한 투두리스트를 기능하는 앱입니다. 


---
구현기능 
* 투두리스트 생성 
* 투두리스트 수정 
* 투두리스트 삭제
* 투두리스트 완료
* 투두리스트 날짜별 조회

---

리액트의 SPA의 특징을 활용하여 

사용자 친화적인 반응형웹을 적용했습니다.

```
폴더구조

├── App.css
├── App.test.tsx
├── App.tsx
├── atom
│   └── atom.ts
├── components
│   ├── Header.tsx
│   ├── TodoForm.tsx
│   └── TodoItem.tsx
├── hooks
│   ├── useTime.ts
│   └── useTodo.ts
├── index.css
├── index.tsx
├── logo.svg
├── pages
│   └── MainPage.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── setupTests.ts
├── styles
│   ├── todoForm.ts
│   └── todoItem.ts
├── test.txt
└── types
    └── TodoType.ts
```

##
**주요 라이브러리 구성**

* React v18.3.1: 컴포넌트 기반 개발 및 SPA 구현을 위해 사용

* Recoil: 전역 상태 관리 라이브러리
* TypeScript: 정적 타입 분석을 위해 사용
* React-Router-Dom: 페이지 라우팅을 위해 사용
* JSON-server: RESTful API를 모방한 가상 서버로 사용
* ESLint (Standard Style): 일관된 코딩 스타일과 코드 품질 유지를 위해 사용
* Styled-Components: CSS-in-JS 라이브러리로 컴포넌트 기반 스타일링에 사용
* Axios: HTTP 요청 처리를 위해 사용
* Ant Design v5.20.5: 사용자 친화적인 UI 구성을 위해 사용
* Create React App (CRA): 프로젝트 초기 설정 및 개발 환경 구축에 사용



## 설치 및 실행 방법

 1. 환경 설정
- **Node.js**: v18.19.0 (nvm use 18.19.0)
- **NPM**: v10.2.3

2. 프로젝트 클론


```bash
git clone https://github.com/LeeSungGeun7/clush_frontend_task.git
cd clush_frontend_task
```
3. 의존성 패키지 설치


```
npm install
```

4. json 서버 실행


```
npx json-server --watch db.json --port 3737
```


5. 로컬 환경 실행

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

새로운 할 일을 추가하는 기능을 담당하며 , 

전체적인 앱 레이아웃을 구성하였습니다.

헤더, 바디, 푸터로 분리하여 스타일 유지보수성을 높였습니다.

헤더는 날짜를 하루간격으로 선택이 가능한 기능 , 

바디에는 투두리스트 아이템들을 보여주는 요소 , 

푸터에는 추가하는 기능을 배치 하였습니다. 

---
TodoItem.tsx

각 할 일 항목을 표시하고 관리하는 컴포넌트입니다. 

할 일의 수정 , 삭제 , 완료 기능을 담당합니다.

체크 박스 선택에 따라 완료여부를 선택가능 

투두리스트 배열의 각 항목 아이템을 나타내는 컴포넌트의 역할을 수행합니다.

--- 

두 컴포넌트는 useTodo 훅을 통해 **Recoil**로 관리되는 투두리스트 상태를 공유합니다. 

Recoil 을 사용하여 자식 컴포넌트인 TodoItem 에서 부모 컴포넌트의 상태를 변경할 수 있으며,  

상태 변경이 더욱 직관적이고 효율적으로 관리되며, 코드 중복도 감소시킬 수 있었습니다.

Ant design 모달을 활용하여 투두 생성 , 변경을 쉽게 구현했습니다. 

---

UI 참고사이트 
- https://blog.naver.com/iceirony/221182098102
