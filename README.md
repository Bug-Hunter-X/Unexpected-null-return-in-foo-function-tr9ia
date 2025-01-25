# Unexpected null return in foo function

This repository contains a JavaScript code example demonstrating a common error in which the function returns null when it should return 0.  The bug and its solution are provided.

## Bug Description
The function `foo` takes two arguments, `a` and `b`, and is expected to return their sum. However, when either `a` or `b` is null, it returns null instead of 0.  This is unexpected behavior and may break parts of an application if not handled properly.

## Solution
The solution replaces the null return with 0, ensuring the function always returns a numerical value.