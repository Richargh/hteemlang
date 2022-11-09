# HteeMLang

Because you need to have tee in your html.

HteeMLang (pronounced **htee**, the ML is silent) is a html programming language and dom evaluator. 
Because the result of an hteeMLang is a dom, you can use it as a templating language. 

If you squint hard enough, regular html looks like a lisp. 
Each `<p>`, `<ul>` or `<a>` tag could be considered a function that when evaluated returns itself as a string. 
If we now add special tags like `\<ht:if>`, `\<ht:and>` or `\<ht:let>` that also evaluate to string, we have a programming language.

## Why

Because, why not.
Creating programming languages is fun. :)

## Dependencies

* [AVA](https://github.com/avajs/ava) Test Runner

## Usage

* Currently not usable. If I take it far enough I want to add HteeMLang to a CDN that when you include it via script tag it evaluates your html so you can actually program via html.

## Developers

* Run tests via `npm run test`
