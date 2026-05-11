# 프로젝트 배포 가이드

이 문서는 프로젝트를 GitHub에 업로드하고 Vercel을 통해 배포하는 방법을 설명합니다.

## 1. GitHub 업로드 방법
1. [GitHub](https://github.com/)에 로그인합니다.
2. 새로운 리포지토리(New repository)를 생성합니다.
3. 생성된 리포지토리 페이지에서 `uploading an existing file`을 클릭합니다.
4. 프로젝트 폴더 내의 모든 파일을 드래그 앤 드롭하여 업로드합니다.
5. `Commit changes`를 눌러 저장을 완료합니다.

## 2. Vercel 배포 방법
1. [Vercel](https://vercel.com/)에 접속하여 GitHub 계정으로 로그인합니다.
2. `Add New...` -> `Project`를 클릭합니다.
3. 업로드한 GitHub 리포지토리를 선택하여 `Import`합니다.
4. `Deploy` 버튼을 클릭하여 배포를 시작합니다.
5. 배포가 완료되면 생성된 URL을 통해 웹사이트에 접속할 수 있습니다.

## 3. Vercel 빌드 설정 (TypeScript 오류 방지)
배포 과정에서 TypeScript 관련 패키지가 누락되어 빌드가 실패하는 경우, Vercel 대시보드에서 다음 설정을 확인해 주세요.

- **Install Command:** `npm install --include=dev`
- **Build Command:** `npm run build`

> [!NOTE]
> `Settings` > `Build & Development Settings`에서 위 명령어를 수동으로 입력할 수 있습니다.

