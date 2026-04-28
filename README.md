# animal-face-1-fe
[FE] 멋사 14기 동물상 찾기 프로젝트 1팀

# 🐾 AnimalFace Frontend
나의 동물상을 찾아주는 AI 분석 웹 서비스입니다.

## 기술 스택

- React + Vite + TypeScript
- Zustand (상태관리)
- Axios (API 통신)
- React Router v6

## 폴더 구조

```
src/
├── types/
│   ├── result.ts              # 분석 결과 타입 (A)
│   └── collection.ts          # 도감 타입 (B)
│
├── api/
│   ├── axios.ts               # axios 인스턴스 · 인터셉터 (A)
│   ├── upload.ts              # 업로드 · 분석 API (A)
│   └── collection.ts          # 도감 API (B)
│
├── store/
│   ├── useResultStore.ts      # 분석 결과 상태 (A)
│   └── useCollectionStore.ts  # 도감 상태 (B)
│
├── components/
│   ├── Loader.tsx             # 로딩 스피너 (A)
│   ├── Header.tsx             # 공통 헤더 (B)
│   ├── Button.tsx             # 공통 버튼 (B)
│   ├── Modal.tsx              # 공통 모달 (B)
│   └── AnimalCard.tsx         # 동물 카드 (B)
│
├── pages/
│   ├── upload/
│   │   └── UploadPage.tsx     # 사진 업로드 (A)
│   ├── loading/
│   │   └── LoadingPage.tsx    # AI 분석 대기 (A)
│   ├── result/
│   │   ├── ResultPage.tsx     # 분석 결과 (A)
│   │   └── AnimalChart.tsx    # 동물 확률 차트 (A)
│   └── collection/
│       ├── CollectionPage.tsx       # 도감 목록 (B)
│       └── CollectionDetailPage.tsx # 도감 상세 (B)
│
├── styles/
│   ├── global.css             # 전역 스타일 (B)
│   └── tokens.css             # 디자인 토큰 (B)
│
├── App.tsx                    # 라우터 설정 (A)
└── main.tsx                   # 진입점 (A)
```

## 시작하기

```bash
# 패키지 설치
npm install

# 환경변수 설정
cp .env.example .env

# 개발 서버 실행
npm run dev
```

## 환경변수

```
VITE_API_BASE_URL=http://localhost:8081
```
