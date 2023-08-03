function foo() {
    console.log("foo");
    bar();
}
function bar() {
    console.log("bar");
}
foo();
/* 
Here is a funny way to think about the code:

The foo() function is like a person who is talking to themselves. They say "I'm foo!" and then they call themselves "bar".
The bar() function is like the person's echo. They say "I'm bar!", which is just the foo() function repeating itself. */