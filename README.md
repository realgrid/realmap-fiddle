# realmap-fiddle

## fiddle 생성 방법

### 1. realmap core에서 exportFiddle.js 스크립트 실행.

- realmap core 프로젝트 루트 경로에서 아래 명령어를 실행한다.
```shell
yarn fiddle
```
- 실행 후, realmap core 프로젝트 루트 경로에 .fiddle 폴더가 생성된다.

### 2. .fiddle밑의 폴더를 realmap-fiddle 레파지토리 루트로 옮기기

- 1번에서 생성한 .fiddle 밑의 모든 폴더를 realmap-fiddle 프로젝트의 루트 경로로 복사 붙여넣기한다
- 새로 추가된 파일을 main 브랜치에 커밋하고 푸시한다.

### 3. Fiddle 주소 확인

- Fiddle은 Github public repository를 읽고 데모 페이지를 생성한다.  
  따로 Fiddle에 업로드하지 않는다. 2번까지 했다면 Fiddle에 올린거나 다름없다.
- Fiddle에서 데모를 열어보려면, url 경로를 아래와 같이 지정해주면 된다.

```
https://jsfiddle.net/gh/get/library/pure/realgrid/realmap-fiddle/tree/main/{{데모_폴더_경로}}
```

- 예를 들어, 데모의 폴더 이름이 `maps/map`인 경우, `{{데모_폴더_경로}}`를 `maps/map`로 바꿔주면 된다.

```
https://jsfiddle.net/gh/get/library/pure/realgrid/realmap-fiddle/tree/main/maps/map
```
