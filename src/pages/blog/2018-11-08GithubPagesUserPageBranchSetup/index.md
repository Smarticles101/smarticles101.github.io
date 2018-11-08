---
date: "2018-11-08"
title: "Github pages user page branch setup"
---

So, setting up my new site, I decided to use github pages
instead of hosting it on my server.

Why?

- GitHub pages is free
- I can deploy my website just by doing a `git push`

So I made the necesarry changes to get my domain to point
to github pages, and got everything set up. I added the
CNAME file and added a `yarn deploy` command that
I could use to build and publish the site.

I went to change the github pages branch, so I could
keep my website code on the master branch, but to my dismay,
GitHub had other plans... 

![Github's other plans](otherPlans.png)

The best fix I found for this while still hosting the site on 
a user page was to change the defalt branch. Not my favorite
solution, but I'm hosting the pre-build code under the `code`
branch and the static site code under `master`.

By changing the default branch to `code`, GitHub displays
the code branch when people visit the repo. Plus,
when someone clones it, it clones the code branch
by default.
