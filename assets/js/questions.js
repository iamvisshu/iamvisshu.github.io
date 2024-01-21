// questions.js
const questions = [
    { question: 'Question 1: Java is a statically typed language.', choices: ['True', 'False'], answer: 'True' },
    { question: 'Question 2: In Java, all classes inherit from the Object class.', choices: ['True', 'False'], answer: 'True' },
    { question: 'Question 3: Java supports multiple inheritance.', choices: ['True', 'False'], answer: 'False' },
    { question: 'Question 4: The == operator in Java compares the values of two objects.', choices: ['True', 'False'], answer: 'False' },
    { question: 'Question 5: Java is platform independent.', choices: ['True', 'False'], answer: 'True' },

    { question: 'Question 6: Who invented Java Programming?', choices: ['Guido van Rossum', 'James Gosling', 'Dennis Ritchie', 'Bjarne Stroustrup'], answer: 'James Gosling' },
    { question: 'Question 7: Which component is used to compile, debug and execute the java programs?', choices: ['JRE', 'JIT', 'JDK', 'JVM'], answer: 'JDK' },
    { question: 'Question 8: Which of the following is a type of polymorphism in Java Programming?', choices: ['Multiple polymorphism', 'Compile time polymorphism', 'Multilevel polymorphism', 'Execution time polymorphism'], answer: 'Compile time polymorphism' },
    { question: 'Question 9: Which environment variable is used to set the java path?', choices: ['MAVEN_PATH', 'JAVA_PATH', 'JAVA', 'JAVA_HOME'], answer: 'JAVA_HOME' },

    { question: 'Question 10: Which of the following options lead to the portability and security of Java?', choices: ['A: Bytecode is executed by JVM', 'B: The applet makes the Java code secure and portable', 'C: Use of exception handling', 'D: Dynamic binding between objects'], answer: ['A: Bytecode is executed by JVM', 'B: The applet makes the Java code secure and portable'] },
    { question: 'Question 11: Which of the following are valid declarations of a char in Java?', choices: ['A: char ch = \'\\utea\';', 'B: char ca = \'tea\';', 'C: char cr = \\u0223;', 'D: char cc = \'\\itea\';'], answer: ['A: char ch = \'\\utea\';', 'C: char cr = \\u0223;'] },
    { question: 'Question 12: What does the expression float a = 35 / 0 return in Java?', choices: ['A: 0', 'B: Not a Number', 'C: Infinity', 'D: Run time exception'], answer: ['B: Not a Number', 'C: Infinity'] },

    { question: 'Question 13: What does the following JavaScript code output?',
        code: 'console.log("Hello, World!");',
        choices: ['Hello, World!', 'undefined', 'Error', 'No output'],
        answer: 'Hello, World!' },

    { question: 'Question 14: What does the following JavaScript function do?',
        code: `function add(a, b) {\n    return a + b;\n}\nconsole.log(add(1, 2));`,
        choices: ['Adds two numbers', 'Subtracts two numbers', 'Multiplies two numbers', 'Divides two numbers'],
        answer: 'Adds two numbers' },
    {
        question: 'Question 15: What does the following Java code do?',
        code: `public class HelloWorld {\n    public static void main(String[] args) {\n        for(int i = 0; i < 5; i++) {\n            System.out.println("Hello, World!");\n        }\n    }\n}`,
        choices: ['Prints "Hello, World!" five times', 'Prints "Hello, World!" once', 'Prints "Hello, World!" infinitely', 'Does not print anything'],
        answer: 'Prints "Hello, World!" five times'},

    // Add more questions as needed
    ];

//End of file