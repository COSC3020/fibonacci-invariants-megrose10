# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

Citations:
Citations: 
https://www.w3schools.com/js/js_arrays.asp Used above site on a review of syntax for javascript arrays. 
Used chatgpt to tell me what the issues in my code were: " Your Fibonacci function has a few issues. Here's a revised version that correctly generates Fibonacci numbers and appends them to an array:
The use of append is not standard in JavaScript; use push instead. The logic needs to be restructured to correctly compute Fibonacci numbers. The recursion isn't necessary if you want to generate the Fibonacci sequence iteratively. " as well as how I am defining things. 
ChatGPT also helped with syntax on how to store values in an array to still allow the values to be saved in an array. 
Asked Ali Torabi for help on how to store an array within JavaScript without the code initializing a new array every recursive iteration.
In general - while I was trying to save the array in the first function, I used chat gpt on how to store values in the array without recreating an array each recursive call. I learned I needed to have this function in a function to save the array to the overall fib function.
