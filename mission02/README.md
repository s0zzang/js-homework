# 엘리멘탈 포스터 메뉴 구현

**이벤트 위임**을 활용해 메뉴가 클릭되면 이미지와 텍스트가 변경될 수 있도록 코드 로직을 작성합니다.

<br>

## 1️⃣ 모듈 방식 활용

```
├── data
│ ├── data.js
│ └── index.js
├── dom
│ ├── index.js
│ ├── setBgColor.js
│ ├── setImage.js
│ └── setNameText.js
└── index.js
```

- data과 dom 관련 **기능을** 재사용성을 고려하여 모듈로 분리
- `lib/index.js`로 한번에 dom/index.js와 data/index.js를 내보낼 수 있도록 하였음
- `handleNavClick` 함수에서 `dom` 관련 함수의 인수로 data 객체를 전달하여 **단 한번의 import**로 `data` 객체 활용
  ```js
  const nodeData = data[node.dataset.index - 1];
  setBgColor(nodeData.color);
  setImage(node, nodeData, $visualImg);
  setNameText(nodeData, $nickName);
  ```

<br>

## 2️⃣ 이벤트 위임 활용

- 클릭 이벤트가 발생해야 하는 `li` 요소의 상위 요소인 `ul`에 이벤트를 등록하여 **메모리 절약**
  ```js
  $nav.addEventListener("click", handleNavClick);
  ```
- `li` 하위 요소가 클릭되었을 경우, **가장 가까운** `li` 요소를 찾도록 구현
- 현재 이벤트가 발생한 요소와 관련 데이터를 인수로 넘겨주어 효율적인 데이터 관리

<br>

## 3️⃣ 매개변수 구조 분해 할당 활용

`handleNavClick` 함수에서 호출된 dom 관련 함수에 data 객체의 필요한 정보만 인수로 전달

#### 📌 `setBgColor` 함수

```js
// 함수 호출
setBgColor(nodeData.color);

// 함수 선언
function setBgColor([colorA, colorB = "#000"]) { ... }
```

- 현재 클릭된 node와 연관된 nodeData에서 필요한 정보인 `color` 배열만 받아옴
- 두번째 컬러의 기본값을 `#000`으로 설정하여 빈 값이 넘어오는 경우 방지

#### 📌 `setImage` 함수

```js
// 함수 호출
setImage(node, nodeData, $visualImg);

// 함수 선언
function setImage(node, { alt = "엘리멘탈 포스터" }, $visualImg) { ... }
```

- 현재 클릭된 node와 연관된 nodeData에서 필요한 정보인 `alt` 값만 받아옴
- 기본값을 설정하여 빈 값이 넘어오는 경우 방지

#### 📌 `setNameText` 함수

```js
// 함수 호출
setNameText(nodeData, $nickName);

// 함수 선언
function setNameText({ name = "짜장" }, $nickName) { ... }
```

- 현재 클릭된 node와 연관된 nodeData에서 필요한 정보인 `name` 값만 받아옴
- 기본값을 설정하여 빈 값이 넘어오는 경우 방지
