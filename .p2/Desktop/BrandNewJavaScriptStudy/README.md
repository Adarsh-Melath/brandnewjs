## Functions

-   Functions are blocks of code that can be executed multiple times. They are declared using the keyword “function” followed by a name and a set of parentheses.

```javascript
function greet() {
    console.log('Hello, World!');
}

greet();

function greet(name) {
    console.log('Hello, ' + name + '!');
}

greet('Adarsh Melath');
```

## Control Statments

-   Decision making/selection statments

    -   if-else

        ```javascript
        let name = 'Ajay';

        if (name === 'Adarsh Melath') {
            console.log('Hello ' + name);
        } else {
            console.log('Hello Guest');
        }
        ```

-   iterative statments/loop

    -   for

        ```javascript
        // This loop will print numbers from 1 to 5
        for (var i = 1; i <= 5; i++) {
            console.log(i);
        }
        ```
