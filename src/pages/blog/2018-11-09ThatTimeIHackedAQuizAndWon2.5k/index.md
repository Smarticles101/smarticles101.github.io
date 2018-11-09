---
date: "2018-11-09"
title: "That Time I Hacked a Quiz and Won 2.5k"
---

So, you might be wondering about something I mention on
the home page.

> hack an online stem trivia quiz and win lots of money even though I told them I hacked it

This is about that story...


### How it all started

It was spring semester of sophmore year. Almost two years ago as of now.
I was sitting in semminar, an extra class we had to work on assignments,
visit teachers, and the like. My seminar class was in one of the engineering
rooms, so kids would often come in and work on their engineering assignments.

Anyways, as I was sitting, I noticed some of my friends in engineering
huddled around a computer. There was a lively buzz about them so I went over
to check out what they were doing.

I found that they were on some "STEM Trivia Quiz" site. What I learned about
it was just what other people had told me, but basically it was just for our
school and was apparently sponsored by some big people.

I thought it was cool and put a thought in the back of my mind to try it later.

Later, when I was sitting in my computer science class, our teacher
informed all of us about it and invited us to participate if we liked.
I took this opportunity to try it. As it turns out, I was not very good
at it. There were many math and general science questions that I was not
expecting. I was just expecting engineering/computer science related stuff.

I decided to mess around with the site for a bit and dug through some of
their code in the chrome developer tools. Their site was written
in Vue.js. I found I could manipulate parts of the quiz by accessing members
of the `vue` object.

I came up with an idea for a program that I could use to bot the site.
It would essentially run like this.

```javascript
// not the exact code
// obviously wont work
// just here to demonstrate logic

// this script would get injected
// into the page by a chrome extension

var questions = []

// botLogic was called using a mutation observer
// don't remember how that worked cause it was two
// years ago and the only time i've used one
function botLogic() {
    if (mainScreen) {
        clickStart();
    } else if (adScreen) {
        setTimer(0);
        clickContinue();
    } else if (leaderBoard) {
        clickContinue();
    } else if (question) {
        // the magic happens here
        
        var answers = document.blahblahblah.codetogetanswerelements.map((e) => e.innerHTML);

        if (questions[question.id]) {
            for (var a in question.wrongAnswers) {
                answers.splice(answers.indexOf(a), 1);
            }
        }

        clickAnswer(answers[Math.random() * answers.length]);

        if (wrongAnswer) {
            questions[question.id].wrongAnswers.push(answer);
        }

        if (!questions[question.id]) {
            questions[question.id] = question;
        }

        clickToNextPage();
    }
}
```

Basically, the code clicked through the less-important
stuff but when it got to a question, if it had seen it before,
it would choose a random answer based off what it knew was wrong.
If it hadn't seen it, it would choose randomly and then update it's knowledge.

This seemingly worked pretty well cause every question had a unique
id and the dataset was only a couple hundred large. The program did have a bug
though where the learning for some reason didn't work because when I accessed the
DOM, those values did not reflect the actual html. So essentially, the program
was just choosing randomly.

I ran this next time I was in semminar just to show off a little. One kid
thought it was pretty cool and asked if he could have it. Being the nice person I am,
I obfuscated the code and then gave it to him.

His computer was much faster than the free computer I got off facebook, so,
he ran it all night and soon surpassed my lead and got first place with a perfect score.

I decided to build another bot that could surpass his. He got a perfect score though
so how is it possible? Well, the website fetched 80 questions back from the server
and only 79 of those could be answered. The site would break when you tried to answer
number 80. So, he had a score of 79000, but I was going to try and get a score of
80000.

I dug through the code some more, to understand how their script worked
and re-write my own version of it. I found their API calls and eventually found the
call to submit an answer, which would benefit me greatly.

I ran it in the console a few times to test it while I had a quiz running.
Then, as soon as the quiz ended I had a score given to me. I tried this a few
more times, and realized a few key things.

* Their server did not prevent you from answering a question
multiple times.
* It also didn't randomize answers, each answer had a unique
id which was always the same.

So, just for fun, I tried something. I had learned the correct answer to 
question id 1 was `A1`, so I threw together a while true loop in chrome
that looked something like this:

```javascript
while (true) {
    fetch(`/submitAnswer`, {
        method: 'POST',
        body: JSON.stringify({
            id: 1,
            answer: 'A1'
        })
    })
}
```

Of course, infinite loops are not good, so I let it
run for a while and then forced chrome to close.

I went and checked the leaderboard. I was first place but with a score massively
higher than anyone elses. So, next thing I did was run the loop about ten more
times just because I could to fill up the top ten on the leaderboard.

I felt cool for a while and some people were mad, but of course it was all just a game right.

Fast forward to about a year ago.

It was just a normal day and I got a text from some phone number.
The text explained that I had won $2,500 from the STEM Trivia Quiz I had participated in
they assured me it was no joke and they also sent me an email.
I sent them my address as they asked.

I thought about if they had known what I did. They must have right?
I was the only person with a score anywhere near that high. I was an outlier.

The next day I emailed them explaining everything that happened.

No response. But a few weeks later they did respond. To. That. Same. Email. I. Sent. Them.

They asked if I had gotten the check yet. (Whattt?). I told them I had,
and they asked for a picture of me holding it. I sent them one a few weeks late cause I forgot.
They thanked me, and I haven't heard
from them since.