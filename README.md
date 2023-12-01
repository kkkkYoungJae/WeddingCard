# Wedding Card

이 프로젝트는 모바일 청첩장 프로젝트입니다. 여러 주제 중, 실생활에서 직접 써볼 만한 주제를 선정하여 진행되었습니다.

### 참여한 사람

- [김영재](https://github.com/kkkkYoungJae) : 프론트엔드 개발

## Development Configuration

> 이 프로젝트는 [Create React App](https://github.com/facebook/create-react-app)으로 만들어졌습니다.

Repository를 다운 받은 후, 해당 디렉토리에서 아래 명령어를 실행합니다.

```
$ yarn install
$ yarn start
```

App이 `http://localhost:3000`에서 실행됩니다.

JSON Server도 함께 실행해야 합니다

```
$ yarn dev:db
```

JSON Server가 `http://localhost:8888`에서 실행됩니다.

## Build

```
$ yarn build
```

위 명령어를 실행하면 `build` 폴더에 빌드 결과물이 저장됩니다. production mode로 번들하고 최적화하여 수행 성능이 개선됩니다.

> 배포에 대한 추가적인 정보는 [여기](https://facebook.github.io/create-react-app/docs/deployment)를 확인해주세요.

## Feature

이 프로젝트는 기본적인 기능을 담은 청첩장 서비스를 구현하였습니다.

### 기술적 요소

- yarn berry, with pnp(npm 대비 효율적인 의존성 검색, 엄격한 의존성 관리)
- craco webpack (절대경로 alias 컴파일)
- JSON Server (프로토타입용 RestAPI)
- KakaoMap, KakaopayLink, 카카오톡 공유하기 오픈api 연동
- react-query (비동기 로직 관리)
- ErrorBoundary를 통한 에러처리
- Suspense를 통한 로딩UI
- video 최적화 (네트워크별 품질 관리, mp4 -> webm 변환)
- 이미지 최적화 (이미지 압축(리사이징, webp)하여 [Cloudinary](https://cloudinary.com/)에 별도 저장)
- 폰트 최적화 (브라우저 플랫폼별 woff2, woff, ttf를 순차적으로 적용, Preload 적용)

### 기능적 요소

- 타임라인
- 참석 가능 인원 여부 확인 및 추가
- 카카오 맵
- 이미지 갤러리
- 데이트 달력
- 연락처, 계좌번호
- 카카오페이 송금하기 링크
- 카카오톡 공유하기, 링크복사

### 로그인

![image](https://user-images.githubusercontent.com/42922453/62202242-e7c5b800-b3c3-11e9-9333-7004e03240be.png)

### 회원가입

![image](https://user-images.githubusercontent.com/42922453/62202290-ff9d3c00-b3c3-11e9-933c-14bd143fec3b.png)

### 타임라인

![image](https://user-images.githubusercontent.com/42922453/62202350-1774c000-b3c4-11e9-92fe-8425e6396c3d.png)

### 내 프로필

![image](https://user-images.githubusercontent.com/42922453/62202384-29566300-b3c4-11e9-9262-f874e4aaca3d.png)

### 친구 목록

![image](https://user-images.githubusercontent.com/42922453/62202433-3f642380-b3c4-11e9-85ee-bce6252d3cdc.png)

## Used Open source

프로젝트에 사용된 오픈소스 라이브러리는 아래와 같습니다.

- [date-fns](https://www.npmjs.com/package/date-fns)
- [react-copy-to-clipboard](https://www.npmjs.com/package/react-copy-to-clipboard)
- [react-day-picker](https://www.npmjs.com/package/react-day-picker)
- [react-query](https://www.npmjs.com/package/react-query)
- [@craco/craco](https://www.npmjs.com/package/@craco/craco)
- [json-server](https://www.npmjs.com/package/json-server)
- [webpack-font-preload-plugin](https://www.npmjs.com/package/webpack-font-preload-plugin)

## License

MIT License
