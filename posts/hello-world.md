---
title: "Hello World: 제 블로그에 오신 것을 환영합니다!"
date: "2026-04-01"
description: "이 게시물은 새로운 포트폴리오 플랫폼에 대한 저의 첫 블로그입니"
tags: ["nextjs", "blog", "portfolio"]
---

Welcome to my new digital garden! 

I built this space using **Next.js** and **Vanilla CSS**. It's designed to be fast, beautiful, and completely customized.

## Why this stack?

제가 여러 가지 이유로 이 기술 조합을 선택한 이유는 다음과 같습니:
- Next.js: 뛰어난 라우팅(페이지 이동) 기능과 부드러운 페이지 전환 효과를 제공합니다.
- Markdown: 데이터베이스 없이도 글을 아주 매끄럽고 편하게 쓸 수 있게 해줍니다.
- Vanilla CSS: 불필요한 라이브러리 용량 부담 없이, 유연하고 고급스러운 UI 느낌을 구현할 수 있도록 해줍니다.

### Code Snippet Example

여기에 제가 마크다운 파일(글 내용)을 어떻게 분석해서 화면에 보여주는지 보여주는 짧은 코드가 있습니다:

```js
const matterResult = matter(fileContents);
const processedContent = await remark()
  .use(html)
  .process(matterResult.content);
```

웹 개발, 엔지니어링, 그리고 디자인에 관한 더 많은 글을 기대해 주세요!
