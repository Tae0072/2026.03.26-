# Web FrontEnd 평가

HTML, CSS, JavaScript 기반의 웹 프론트엔드 평가 과제 모음입니다.

---

## 폴더 구조

```
작업평가/
├── Web FrontEnd 작업형 평가/   # 실습 구현 과제
│   ├── index.html
│   ├── style.css
│   └── script.js
└── Web FrontEnd 서술형 평가/   # 개념 서술 과제
    └── 웹프론트엔드_서술형_평가.md
```

---

## 작업형 평가 — DOM 요소 동적 추가/삭제

JavaScript의 DOM API를 사용하여 div 박스 안에 요소를 동적으로 추가(append)하고 삭제(remove)하는 기능을 구현합니다.

### 구현 기능

| 항목 | 내용 |
|---|---|
| HTML | 입력창(`input`), 추가 버튼, 컨테이너 `div#container` |
| CSS | 컨테이너에 `border` / `padding` / `min-height`, 아이템에 배경색·여백·`border-radius`, 삭제 버튼 hover 스타일 |
| JS - 추가 | 추가 버튼 클릭 시 입력값으로 `div` 생성 후 `appendChild` |
| JS - 빈값 방지 | 빈 입력 시 `alert` + 입력창 포커스 |
| JS - 삭제 | 각 아이템의 ✕ 버튼 클릭 시 `removeChild`로 제거 |
| JS - Enter 키 | `keydown` 이벤트로 Enter 입력 시에도 추가 동작 |

### 실행 방법

`Web FrontEnd 작업형 평가/index.html` 파일을 브라우저에서 열면 바로 실행됩니다.

---

## 서술형 평가 — 개념 서술

`Web FrontEnd 서술형 평가/웹프론트엔드_서술형_평가.md` 참고

| 문항 | 주제 |
|---|---|
| 1 | CSS Flexbox와 Grid 레이아웃의 차이점 및 구현 코드 |
| 2 | JavaScript 비동기 처리 방식 (Callback / Promise / async·await) 및 fetch API 활용 |
| 3 | 디바운싱(Debouncing)과 쓰로틀링(Throttling) 개념·차이점 및 검색창 구현 코드 |
