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
