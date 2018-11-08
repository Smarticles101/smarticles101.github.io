---
path: "/blog/2018-11-07LookMaIMadeAWebsite"
date: "2018-11-07"
title: "Look ma I made a website"
---

Poof, a website appeared!

Cool right?

I actually had a website before this.
It looked kinda similar with the same colors and footer.
The header was a little different,
but the rest was remade. 

Why?

Because I took a look at it right after making it (literally yesterday) and was like
"Well, this website is actually awful"
and so I remade it.

The old website can be found [here](https://github.com/Smarticles101/loganstucki.me)
if you really want to see it. It's made with ReactJS using create-react-app.
I spent about a week on it working on it in my free time.

This website uses React as well, but it also uses GatsbyJS.
I looked into using something like Jekyll, cause I wanted a blog
and I wanted static content because React just manipulates the DOM dynamically.

GatsbyJS does just this and as a plus, it used most of my existing React code
to run. Neat right?

I installed a plugin to parse markdown. Gatsby utilizes GraphQL (the coveted
query language that developers are hyped up about) for stuff. I don't know GraphQL that well.
As of before today, I had never used it before. Luckily, Gatsby has really good docs
with lots of examples for different senarios. That really helped me alot.

So yeah, now I have this new website. Pretty nifty. Press one of the little contact
buttons in the footer to get in touch. Also, if you've somehow managed to get through
the site and read through this entire post, send me some feedback on the site.

Until next time, signing off - Logan

```javascript
const reversee = "Expect to see some blogs with code in them";

let reverse = (str) => str.split("").reduce((a,b) => b + a);

console.log(reverse(reversee));
```