---
title: "Static Analysis for Exercism.io in Java"
date: "2019-04-02"
---

Recently at exercism, we've been working on `project-auto-mentor`.

The goal of the project is to use static analysis to provide automated mentoring
feedback to students. This will free-up mentors more, making their job easier.
You can read more about it [on the exercism blog](https://exercism.io/blog/automated-mentoring-support-project).

I decided to take a stab at creating the initial two-fer analyzer for java.

Knowing nothing about abstract syntax trees, I gave it a google, which is basically
the best way to learn stuff. They're basically a way to represent source code as a tree,
with each node representing some construct in the code.

## Parsing

There's a java package `com.github.javaparser` built for exactly this, which makes it
way easy to parse java code.

First, we need a `com.github.javaparser.ast.CompilationUnit`, which contains
our syntax tree. To get one, we can use:
```java
import com.github.javaparser.JavaParser;
import com.github.javaparser.ParseProblemException;
import com.github.javaparser.ast.CompilationUnit;

import java.io.File;
import java.io.FileNotFoundException;

...

CompilationUnit ut;
try {
    ut = JavaParser.parse(new File("Twofer.java"));
} catch (ParseProblemException e) {
    System.err.println("Parse error");
} catch (FileNotFoundException e) {
    System.err.println("Twofer.java not found");
}
```

This will create our CompilationUnit, pulling the Twofer exercise from it's source file
at the project root.

CompilationUnit has two methods that would be of interest of us to parse the solution.
`.accept` runs a callback with a `.visit` method which is overloaded for each code construct.
Or, we can use `.walk` which runs a `Consumer` to consume each `Node`.


## The optimal two-fer solution

Specifically we want our analyzer to detect non-optimal solutions to two-fer.
To me, the following solution is optimal. It uses the `Optional` class to get a default
value instead of using an if statement or ternary operator. It also uses `String.format`
to avoid any string concatenation.

```java
import java.util.Optional;

class Twofer {
  String twofer(String name) {
    return String.format("One for %s, one for me.", Optional.ofNullable(name).orElse("you"));
  }
}
```

After examining the 500 most recent two-fer solutions, I came up with a few key points.

#### Reasons to "disapprove" a solution:
* failed parse
    * java code is malformed in some way
* malformed class or method name
    * tests shouldn't run in the first place
* hardcoded test data
    * won't work against any data it hasn't seen
* string concatenation
    * Strings are immutable, each + means another object
* no method calls, if statements, or conditionals
    * solution shouldn't work in the first place

#### Reasons to "approve" a solution but leave comments:
* student uses if statement or ternary operator
    * suggest using Optional class

#### Reasons to refer to mentor:
* analyzer failed to find solution
* loops, lambda statements, or anything else that's weird

## Analyzing the solution

In my analyzer, I create a class that I can use the `.walk` method with.

```java
import java.util.function.Consumer;

...

class TwoferWalker implements Consumer<Node> {
    @Override
    public void accept(Node node) {
        ...
    }
}
```

Now, I can test for some of the structures I was looking for in my notes:
```java
import com.github.javaparser.ast.body.ClassOrInterfaceDeclaration;
import com.github.javaparser.ast.body.MethodDeclaration;
import com.github.javaparser.ast.expr.*;

import java.util.function.Consumer;

...

class TwoferWalker implements Consumer<Node> {
    boolean hasClassTwofer;
    boolean hasMethodTwofer;
    boolean hasHardCodedTestCases;

    @Override
    public void accept(Node node) {
        if (node instanceof ClassOrInterfaceDeclaration) {
            this.hasClassTwofer = ((ClassOrInterfaceDeclaration) node).getName().toString().equals("Twofer");
        } else if (node instanceof MethodDeclaration) {
            this.hasMethodTwofer = ((MethodDeclaration) node).getName().toString().equals("twofer");
        } else if (node instanceof StringLiteralExpr) {
            this.hasHardCodedTestCases = node.toString().contains("Alice") || node.toString().contains("Bob");
        }

        ...
    }
}
```

and finally I just need the logic to handle the booleans after I walk the tree:

```java
TwoferWalker walker = new TwoferWalker();

this.cu.walk(walker);

if (!(walker.hasClassTwofer && walker.hasMethodTwofer)) {
    this.statusObject.put("status", "disapprove_with_comment");
    this.comments.put("java.general.properClassAndMethodNames");
} else if (walker.hasHardCodedTestCases) {
    this.statusObject.put("status", "disapprove_with_comment");
    this.comments.put("java.general.hardCodedTestCases");
}

...
```

Currently, the analyzer runs with these stats on the 500 most recent two-fer
exercises:
```json
{
    totals: {
        disapprove_with_comment: 337, 
        refer_to_mentor: 11, 
        approve_with_comment: 147, 
        approve_as_optimal: 5
    },

    disapprovalComments: {
        java.general.hardCodedTestCases: 5, 
        java.general.failedParse: 5, 
        java.general.properClassAndMethodNames: 16, 
        java.two-fer.noConditionsOrMethodCalls: 11, 
        java.general.stringConcatenation: 300
    },

    approvalComments: {
        java.two-fer.useOptional: 67, 
        java.two-fer.useTernaryExpression: 80
    }
}
```

The code is currently hosted on github [here](https://github.com/exercism/java-analyzer)
