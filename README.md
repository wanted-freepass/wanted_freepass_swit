<h1>원티드 프리온보딩 코스 2주차 두번째과제</h1>

## 배포

🔗 **과제물**(aws s3): http://wantedswit.s3-website.ap-northeast-2.amazonaws.com/

<br>

## 팀 소개

### 1조 FreePass

| 팀원                                                 | 역할                                                    |
| ---------------------------------------------------- | ------------------------------------------------------- |
| 이용우 [@moolbum](https://github.com/moolbum) (팀장) | 로그인 페이지, 메세지 입력창, 삭제모달 레이아웃         |
| 양주영 [@yangddu](https://github.com/yangddu)        | 메세지 입력창, 대화목록, 페이지 레이아웃,               |
| 홍유진 [@howyoujini](https://github.com/howyoujini)  | 로그인 페이지, 메세지 입력창, 대화목록, 페이지 레이아웃 |

<br>

## 프로젝트 설명

- 프로필사진과 아이디를 입력 하여 로그인을 하고 메세지를 입력하는 웹 어플리케이션 입니다.

<br>

## 개발 기간

### 2022. 2. 10 ~ 2022. 2. 12

<br>

## 프로젝트 실행 방법

1. git clone
   ```bash
   git clone
   ```
2. 패키지 설치
   ```bash
   npm install
   ```
3. local 프로젝트 실행
   ```bash
   npm start
   ```

<br>

## Tools

```
- View (React.js, Styled-components)
- Build Tool (Create React App)
- Code Quality Tool (Prettier)
- Other Tools (Git, Github, notion, Slack. AWS)
- State (React-Redux)
```

<br>

### 👨‍💻 이용우

#### 로그인 페이지

- [x] 로그인 정보 Redux 저장
- [x] 로그인 페이지 레이아웃 구현

#### 메세지 입력창

- [x] 엔터키로 전송 및 입력시 전송버튼 활성화
- [x] 컨텐츠 미입력시 전송 비활성화

#### 삭제모달 레이아웃

- [x] 채팅 메세지 삭제버튼 클릭시 모달 활성화

<br>

### 👨‍💻 양주영

#### 메세지 입력창

- [x] 메세지 입력시 Redux 저장
- [x] 로그인 페이지 레이아웃 구현

#### 대화목록

- [x] mock data로 3명이 5건의 메시지를 주고 받는 내용 출력
- [x] 메세지 입력 날짜 yyyy-mm-dd hh:MM:ss 포맷으로 출력

#### 페이지 레이아웃

- [x] 사이드 페이지 레이아웃 구현
- [x] 메인채팅 로그인 화면 레이아웃 구현

<br>

### 👨‍💻 홍유진

#### 로그인 페이지

- [x] 로그인 페이지 정규식 구현 (이름 필수 입력)
- [x] 로그인 페이지 레이아웃 구현

#### 메세지 입력창

- [x] 전송한 메시지의 경우 이름 옆에 \* 문자 출력

#### 대화목록

- [x] 메시지의 정렬은 과거 부터 최신 순으로 정렬
- [x] scrollToBottom

#### 페이지 레이아웃

- [x] 사이드 페이지 레이아웃 구현
- [x] 메인채팅 로그인 화면 레이아웃 구현
