const readline = require('readline');
const fs = require('fs').promises;

const blog_path = `./src/pages/blog`;

const mkdir = (path) => fs.mkdir(path, { recursive: true });

const writeFile = (path, content) => fs.writeFile(path, content);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const promiseQuestion = (prompt) => () => new Promise((res, rej) => {
    rl.question(prompt, (ans) => res(ans));
});

const titleQuestion = promiseQuestion('Blog title? ');

const doTheThing = async () => {
    const title = await titleQuestion();
    console.log(title);

    const dateString = new Date(Date.now()).toISOString().split('T')[0];

    const folderName = `${dateString}${title.split(" ").join("")}`

    const dir = await mkdir(`${blog_path}/${folderName}`);

    const content = `---
title: "${title}"
date: "${dateString}"
---`;

    const file = await writeFile(`${dir}/index.md`, content);

    console.log(file);

    rl.close();
}

doTheThing();
