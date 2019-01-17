---
title: "Golang Error Checkers: os.IsExist vs os.IsNotExist"
date: "2019-01-17"
---

Recently I saw a line of code while working on the exercism cli:

```go
if _, err := os.Lstat(workspaceDir); !os.IsNotExist(err) {
    //...
}
```

At first glance, it seems someone made a simple logic
mistake that makes the code less readable. So I made a 
[pull request](https://github.com/exercism/cli/pull/787)
suggesting this:

```go
if _, err := os.Lstat(workspaceDir); os.IsExist(err) {
    //...
}
```

Looks like an easy enough change right? I didn't test it but when
the CI job failed, I was shocked.


## Error checkers

You may notice that the parameter passed into `os.IsExist` or `os.IsNotExist`
is `err`. Normally, you might expect to pass the filepath instead.

Well, golang uses these as error checkers.

So with `os.IsExist`, it's actually checking for *errors that would appear
if the file exists*.

Let's say you're trying to create a file. The behavior you would expect is for
the file to not exist, so if the file does it exist, the corresponding error
would be thrown and you could use `os.IsExist` to check it.

On the contrary, `os.IsNotExist` checks for *errors that would occur if
a file doesn't exist*.

This is like the above example where we check if `workspaceDir` exists.

Since `os.Lstat` expects for it to exist already, it only throws an error
if `workspaceDir` doesn't exist. Hence, the code used `!os.IsNotExist(err)`
to check if an error had been thrown. `os.IsExist(err)` doesn't work
since no error is thrown if the file exists because that is the expected
behavior.

## !os.IsExist != os.IsNotExist

So, the point of this post was to share my experience learning about these
two functions. If you didn't read the whole thing, basically 
`!os.IsExist != os.IsNotExist`!
