## Exception

-   An exception is an unwanted / unexpected event

-   Occurs during runtime

-   Disrupts the normal flow of the program

## Error

-   Represents a serious problem that cannot be handled by the program

-   Examples:

    -   OutOfMemoryError

    -   StackOverflowError

-   Errors are not recoverable

-   Always unchecked

## Exception Hierarchy

Object
|
Throwable
|
|-- Exception (Recoverable)
| |-- Checked Exceptions
| |-- Unchecked Exceptions
|
|-- Error (Not Recoverable)

# Checked vs Unchecked Exceptions

| Checked Exception                  | Unchecked Exception (Runtime)                      |
| ---------------------------------- | -------------------------------------------------- |
| Must be handled or declared        | Handling is optional                               |
| Checked at compile time            | Checked at runtime                                 |
| Example: IOException, SQLException | Example: ArithmeticException, NullPointerException |
| Used for recoverable conditions    | Used for programming errors or bugs                |

## Error vs Exception

| Error                     | Exception                      |
| ------------------------- | ------------------------------ |
| System-level issue        | Application-level issue        |
| Unrecoverable             | Recoverable                    |
| Not handled by program    | Can be handled                 |
| Indicates serious failure | Indicates unexpected condition |

-   Note: When an exception occurs, JVM creates an exception object containing:

    -   Exception name

    -   Description

    -   Stack trace

    -   JVM Check:

        -   If exception is handled → program continues

        -   Else → JVM uses default exception handler

            -   prints error

            -   program stops

## Methods to Print Exception Information

-   printStackTrace()

    -   Prints exception name, description, and stack trace

-   System.out.println(e) / e.toString()

    -   Prints exception name and description

-   System.out.println(e.getMessage())

    -   Prints description only

## Try–Catch–Finally Block

-   try → code that may cause an exception

-   catch → handles the exception

-   finally → block which always executes, whether an exception occurs or not

    -   Uses of finally block:

        -   Used to close files

        -   Close database connections

        -   Release network resources

## final vs finally vs finalize()

-   final

    -   A keyword in Java

-   finally

    -   A block used with try–catch

-   finalize()

    -   A method in java.lang.Object

    -   Called by the Garbage Collector before an object is destroyed

    -   Allows an object to perform cleanup (releasing system resources)

    -   Called only once per object

    -   Note: From Java 9, this method is deprecated because it is unreliable

## throw

-   Used to manually create and throw an exception

-   Used inside a method

-   You can throw only one exception at a time

    -   Can throw:

    -   Checked exception

    -   Unchecked exception

## throws

-   Used in a method declaration

-   Informs the caller that the method may throw certain exceptions

-   Used mainly for checked exceptions (compiler requires handling)

-   Can declare multiple exceptions-
