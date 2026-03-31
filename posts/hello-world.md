---
title: "Hello World: Welcome to my new blog!"
date: "2024-03-31"
description: "This is my very first blog post on the new Next.js portfolio platform."
tags: ["nextjs", "markdown", "portfolio"]
---

Welcome to my new digital garden! 

I built this space using **Next.js** and **Vanilla CSS**. It's designed to be fast, beautiful, and completely customized.

## Why this stack?

I chose this stack for several reasons:
- Next.js provides excellent routing and page transitions.
- Markdown allows me to write smoothly without relying on a database.
- Vanilla CSS offers full flexibility and a premium UI feeling without unnecessary utility classes overhead.

### Code Snippet Example

Here is a quick snippet of how I parse markdown:

```js
const matterResult = matter(fileContents);
const processedContent = await remark()
  .use(html)
  .process(matterResult.content);
```

Stay tuned for more posts about web development, engineering, and design!
