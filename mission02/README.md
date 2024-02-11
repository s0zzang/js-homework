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
