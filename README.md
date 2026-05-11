# NeuraMotion AI - Industrial & Physical AI Platform

NeuraMotion AI는 산업용 AI 및 Physical AI 기술을 시각화하고 협업할 수 있는 미래지향적 기업 홈페이지입니다. Next.js 14와 Firebase를 기반으로 제작되었으며, Vercel 배포 및 Static HTML Export를 완벽하게 지원합니다.

## 🚀 주요 기능
- **미래지향적 UI/UX**: MakinaRocks, Figure AI 스타일의 다크 테마 및 글래스모피즘 디자인.
- **Physical AI 섹션**: 로봇 제어, 비전 AI, 자율주행 기술 등 핵심 역량 소개.
- **AI Collaboration Hub**: Firebase Cloud Firestore 기반의 실시간 기술 공유 게시판.
- **Static Export**: 서버 없이 정적 HTML 파일만으로도 모든 기능을 브라우저에서 실행 가능.

## 🛠 기술 스택
- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Deployment**: Vercel (CI/CD 자동배포 지원)

## 📦 시작하기

### 1. 로컬 개발 환경 실행
```bash
# 종속성 설치
npm install

# 서비스 실행 (localhost:3000)
npm run dev
```

### 2. 정적 HTML 빌드 (Export)
```bash
# 빌드 명령 실행
npm run build
```
빌드가 완료되면 `/out` 폴더가 생성됩니다. 해당 폴더 내의 `index.html`을 바로 열거나 정적 호스팅 서버에 업로드할 수 있습니다.

## 🔑 Firebase 환경변수 설정
Firebase 기능을 사용하려면 `.env.local` 파일에 다음 정보를 입력해야 합니다.

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## ☁️ Vercel 배포 방법
1. GitHub Repository에 프로젝트를 푸시합니다.
2. Vercel 대시보드에서 `New Project`를 클릭하고 해당 리포지토리를 연결합니다.
3. **Environment Variables** 섹션에 위 Firebase 환경변수들을 모두 등록합니다.
4. `Install Command`: `npm install`
5. `Build Command`: `npm run build`
6. `Deploy`를 클릭하면 배포가 완료됩니다.

## 📂 프로젝트 구조
- `/app`: 메인 페이지 및 레이아웃
- `/components`: 섹션별 UI 컴포넌트
- `/lib`: Firebase 설정 및 유틸리티
- `/public`: 고해상도 로봇 및 시스템 이미지
- `next.config.mjs`: 정적 Export 설정 (output: 'export')
