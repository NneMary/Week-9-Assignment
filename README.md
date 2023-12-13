JAVASCRIPT ARRAY METHODS

    In javascript, there are several types of Array methods, which include the following;

    1. Array length; this property returns the size of an Array.
    e.g const costmetics = ["lipstick", "powder", "eyeliner"]
        let size = costmetics.length;
        This returns 3 as the length of the array.

    2. Array toString; this converts an array to a string of comma seperated array values

    3. Array pop(); this removes the last element from an array. 
    e.g let fruits = ["apple", "orange", "mango", "banana"]
        fruits.pop()
        this removes banana from the array.

    4. Array push(); this adds a new element to an array (at the end):
    e.g let fruits = ["orange", "grapes", "apple"];
        fruits.push("coconut");
        this adds coconut to the end of the array.

    5. Array shift(); this behaves like pop(), but works on first element instead of last element.

    6. Array unshift(); this adds a new element to an array (at the beginning), and "unshifts" older elements.

    7. Array join(); this behaves just like toString(), but in addition you can specify the separator.

    8. Array splice(); The splice() method can be used to add new items to an array.

    9. Array slice(); The slice() method slices out a piece of an array into a new array.

    10. Array concat(); The concat() method creates a new array by merging (concatenating) existing arrays


JAVASCRIPT FUNCTION

    Function is a block of code used to perform a specific task. 

    A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

    The parentheses may include parameter names separated by commas:
    (parameter1, parameter2, ...)

    The code to be executed, by the function, is placed inside curly brackets: {}

    When JavaScript reaches a return statement, the function will stop executing.

    Variables declared within a JavaScript function, become LOCAL to the function.

    Local variables can only be accessed from within the function.

    Variables declared outside of a function are called global variables.


CONTROL FLOW

Control flow allows you to control the order inwhich programs are executed.

There are three major types of control flow, namely;
    1. If/else statement
    2. Switch statement
    3. Loops

    If/else statements are used to execute a block of code if a certain condition is true, and a different block of code if the condition is false.

    Switch statements are used to execute a block of code based on the value of a variable or expression.

    Loops allow block of codes to run repeatedly under some certain conditions