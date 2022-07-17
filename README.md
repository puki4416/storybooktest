## 변경 사항 정리

1. snapshot test 버전 문제
   현재 버전 오류료 react, react-dom,react-test-render 버전을 17.0.2 로 맞추어야 버전이 동작합니다.

   - https://github.com/storybookjs/storybook/issues/17985
   - https://github.com/storybookjs/storybook/pull/18296 - https://github.com/storybookjs/storybook/issues/18431

2. css 문제
   튜토리얼을 클론해서 시작할 경우 css 에 약간 문제가 있습니다. 기능에는 문제가 없기 때문에 넘어가도 되지만, 수정을 원할경우, index.css 의 icon-star 과 list-item을 수정하면 됩니다.

3. 단위 테스트
   단위 테스트시에도 문제가 있습니다. @testing-library/react 의 버전을 13 미만으로 맞추어야 합니다 ex)12.1.4

참조: https://stackoverflow.com/questions/71713405/cannot-find-module-react-dom-client-from-node-modules-testing-library-react
