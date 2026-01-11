## Comments

-   It is used to explain the code and it will prevent the execution of that code

-   Single Line Comment(//)

-   Multi Line Comment(/\*\*/)

## Variables

-   A variable is a “named storage” for data.

-   we can declare a variable using var,let,const

    -   var

        -   The scope of variables declared with `var`

            -   Variables declared with var can have a global or local scope. Global scope is for variables declared outside functions, while local scope is for variables declared inside functions.

                -   example for globally declared variable

                    ```javascript
                    var number = 50;

                    function print() {
                        var square = number * number;
                        console.log(square);
                    }

                    console.log(number); // 50

                    print(); // 2500
                    ```

                -   example for locally declared variable

                    ```javascript
                    function print() {
                        var number = 50;
                        var square = number * number;
                        console.log(square);
                    }

                    print(); // 2500

                    console.log(number);
                    // ReferenceError: number is not defined
                    ```

        -   It allows for redeclaration and reassignment
        -   variables declared using `var` will be hoisted

    -   let keyword

        -   The scope of variable declared with `let`

            -   Variables declared with let can have a global, local, or block scope. Block scope is for variables declared in a block. A block in JavaScript involves opening and closing curly braces

                -   example for global,local,block scope

                    ```javascript
                    let number = 50;

                    function print() {
                        let square = number * number;

                        if (number < 60) {
                            var largerNumber = 80;
                            let anotherLargerNumber = 100;

                            console.log(square);
                        }

                        console.log(largerNumber);
                        console.log(anotherLargerNumber);
                    }

                    print();
                    // 2500
                    // 80
                    // ReferenceError: anotherLargerNumber is not defined
                    ```

        -   it doesn't allow declaration,but reassign
        -   no hoisting is possible because the variable declared with `let` will be in _Temporal Dead Zone_

    -   const

        -   The scope of variables declared with const

            -   Variables declared with const are similar to let in regards to scope. Such variables can have a global, local, or block scope.

                -   example for global,local,block scoped declaration

                    ```javascript
                    const number = 50;

                    function print() {
                        const square = number * number;

                        if (number < 60) {
                            var largerNumber = 80;
                            const anotherLargerNumber = 100;

                            console.log(square);
                        }

                        console.log(largerNumber);
                        console.log(anotherLargerNumber);
                    }

                    print();
                    // 2500
                    // 80
                    // ReferenceError: anotherLargerNumber is not defined
                    ```

        -   it doesn't support redeclaration or reassignment
        -   no hoisting is possible because the variable declared with `const` will be in _Temporal Dead Zone_

## Data types( 8 basic data types in JavaScript)

-   primitive

    -   They can hold a single simple value.
    -   String:
        -   Textual data.
        -   Example: 'hello', "hello world!", etc.
    -   Number:

        -   An integer or a floating-point number.
        -   Example: 3, 3.234, 3e-2, etc.

    -   BigInt:
        -   An integer with arbitrary precision.
        -   Example: 900719925124740999n, 1n, etc.
    -   Boolean
        -   Any of two values: true or false.
    -   undefined
        -   A data type whose variable is not initialized.
        -   Example: let a;
    -   null
        -   Denotes a null value. let a = null;
    -   Symbol
        -   A data type whose instances are unique and immutable.
        -   Example: let value = Symbol('hello');

-   Non-Primitive
    -   They can hold multiple values. Objects are non-primitive data types.
        -   Object
            -   Key-value pairs of collection of data.
            -   Example:let student = {name: "John"};

## Operators

-   Arithmetic

    -   `+` `-` `*` `/` `%` `++` `--` `**`(Exponent)

-   Assignment

    -   `=`

-   Comparison

| Operator | Meaning                  | Example               |
| -------- | ------------------------ | --------------------- |
| `==`     | Equal to                 | `3 == 5` → `false`    |
| `!=`     | Not equal to             | `3 != 4` → `true`     |
| `>`      | Greater than             | `4 > 4` → `false`     |
| `<`      | Less than                | `3 < 3` → `false`     |
| `>=`     | Greater than or equal to | `4 >= 4` → `true`     |
| `<=`     | Less than or equal to    | `3 <= 3` → `true`     |
| `===`    | Strictly equal to        | `3 === "3"` → `false` |
| `!==`    | Strictly not equal to    | `3 !== "3"` → `true`  |

-   Difference btw (==) and (===)
    -   `==` - only check the value
    -   `===` - check the value and the data type
