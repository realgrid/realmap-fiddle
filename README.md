# realmap-fiddle

## fiddle 생성 방법

### 1. realmap 저장소에서 피들 예제 생성

- 피들 예제의 원본은 realmap 저장소의 `apps/realmap/fiddle` 폴더다. 데모를 고쳤다면 이 폴더의 사본도 함께 고친다.
- realmap 저장소 루트에서 아래 명령어를 실행한다.

```shell
pnpm fiddle
```

- realmap 저장소 옆의 `realmap-fiddle` 폴더에 예제마다 `demo.html`, `demo.js`를 바로 쓴다. 다른 위치에 있으면 `pnpm fiddle --out <realmap-fiddle 경로>`로 지정한다.
- 라이선스 키는 realmap 문서 사이트의 키 파일(`apps/docs/public/*-lic.js`)을 읽어 넣는다.

### 2. 변경 사항 커밋·푸시

- realmap-fiddle 저장소에서 diff를 확인하고 main 브랜치에 커밋·푸시한다.
- 릴리스 때는 npm 배포가 끝난 뒤에 한다. 피들은 unpkg의 최신 realmap을 불러온다.

### 3. Fiddle 주소 확인

- Fiddle은 Github public repository를 읽고 데모 페이지를 생성한다.  
  따로 Fiddle에 업로드하지 않는다. 2번까지 했다면 Fiddle에 올린거나 다름없다.
- Fiddle에서 데모를 열어보려면, url 경로를 아래와 같이 지정해주면 된다.

```
https://jsfiddle.net/gh/get/library/pure/realgrid/realmap-fiddle/tree/main/{{데모_폴더_경로}}
```

- 예를 들어, 데모의 폴더 이름이 `map/map`인 경우, `{{데모_폴더_경로}}`를 `map/map`로 바꿔주면 된다.

```
https://jsfiddle.net/gh/get/library/pure/realgrid/realmap-fiddle/tree/main/map/map
```
