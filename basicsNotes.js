/*
absolute path ex: /Users/Revature/Documents/file (measured from root/globally fixed point)
relative path ex: measured from location of another file/directory ex: ../styles/stylesheet.css (.. references location outside)

bash commands-
echo: prints out string of whatever you type

> allows you to redirect output of command to line ( deletes infomation and replaces it)

>> appends the information to the location rather than replacing
pwd > textFile.txt

grep: prints any line in a file(s) that match a given pattern, or RegEx, EX: print all lines in hello.txt that have word goodbye (grep goodbye hello.txt)
by default case sensitive but can apply options for your use case EX: -i ignores case, -v prints all lines that don't match pattern etc, -w match whole word etc)

cat: concatenate command prints contents of file to console
head: prints 1st 10 lines or whatever specified -n (#)
tail: last 10 lines
touch: great for creating empty files, allows modifying timestamp
cp- copy creates specified file, -r (recrusive)
mv- move
rm- remove -r allows you to delete directories
wc- word count (can print out bytes -c --bytes, chars -m --chars, lines etc)
ln- creates link btw files, makes a shortcut to the file EX: ln index.txt indexLink; ln index.txt otherIndex.txt (another way to copy info since it just copies info to 2nd file)
man <command>- manual info about command
EX: man cat
Client-server-DB architecture

Project 0 tips- bank account w/ login and superuser privileges etc

Java Basics
Git basics/ CS foundations
CPU memory structures
Temp memory- CPU, CPU Cache, RAM
Permanent memory-Hard Disk

Board Categories of Computer Languages:
Binary
Assembly- used by processor(CPU) to generate binary, higher lvl language/complex binary commands
Complied Languages- writtend in plain text/need to be transformed into another form like CPU/ or another app Ex: java, c#, big difference btw complied/scripting languages is how they are complied* more efficient since there's no 2nd checkup like scripting langs
Interpreted/Scripting Languages- for scripting languages environment performs the compling/interpretation(general assumptions to generate complied code also much more forgiving w/ errors missing ;)
Markup Languages- used by other apps to give context/describe (CSS can be considered a subtype of markup languages)
Base 10 vs Base 2, number system vs binary
how to reference negative binary numbers:
1's compliemnt
0001 - 1
1110 - (-1) how do you know if this is a negative binary number(must know if using 1/2 compliment and how many digits EX: if the furthest digit on left is a 1, generally representing a negative number) This is less commonly used b/c you have a + and - 0 value; 0000- 0, 1111- (-0)
2's compliment
-reverse all binary digits; add 1 to reversed value
0001 - 1
1110 + 1 ->
1111 - (-1)
Always have a slightly larger interpretation w/ 2's compliment while 1's are about half
0000 1000 - 8
1111 1000 - (-8)

Librarys: utilities written to perform complex work/functionality w/ a simplier API (JQuery, JDBC Drivers)
Frameworks: Larger utilities designed to run code for you, write code specific for the framework which makes tasks easier, (Spring Java framework); automate more tasks/ provides implementation
Libraries much more flexible than frameworks

Git version control tool- can think of it as taking snapshots when you stage changes/commit you're changing your local repo then when you push you're establishing changes to the remote repo everyone is connected to;
Master/Main
Branch 1 git checkout -b newBranch (shortcut for making new branch)
Branch 2

Git clone- grab a remote repo and make your own local copy
Team workflow for git with teams is usually git add, git pull so you don't have any merge conflicts locally first b4 you push to a remote repository shared by team members, if you push without verifying you could cause issues w/ team members then have to revert etc
Can directly merge branches git merge <branch> however more likely to pull/push merges
Rarely to work on main branch, more of just pull from it
Git fetch, gets all branches/information from remote repo
Git pull (shorthand for git fetch, git merge fetch_head)
Forking Repos' creates your own ccopy of a project, git pull (url of original)
can create a pull request if you want to add

Minimum standards for teams, Pull beginning of day? push by end of day?

Java gitignore:
compiled class file .class
log file .log
blueJ files .ctxt
Mobile tools for Java
.mtj.tmp/
Package Files: .jar, .war, .nar, .ear, .zip, .tar.gz, .rar
virtual machine crash logs

VIM- press i to make changes (insert mode) similar to nano, emac
VIM is also modal can switch between edit/save
:wq (write quit)

Javadoc comments `/** */
/*

JDK: Java Development Kit -> javac command -> bytecode: .class -> JRE: Java Runtime Environment -> JVM: Java Virtual Machine (JIT Compliation) -> OS

Java Notes-
Java Pros: Write once, run anywhere (JVM complies JAVA to bytecode to machine code)
Java handles memory management for you; etc garbage collector

Java Classes are blueprints used to instantiate(create usable entity that you can manipulate based off the blueprint) objs, classes have states(variables)/behaviors(methods); behaviors/states are shared across all instances of a class but variable values may be different

Anatomy of a CLASS
Access Modifier class ClassName {

}
public class Dog {

}

Compile your program- javac HelloWorld.java
Run your program- java HelloWorld

A class w/ a specifically-delcated main() method is executable(JVM can invoke method w/ creating instance of class 1st)
An app usually only has 1 executable class (servers as entry point of processing)

When you compile a program, it looks for common problems/typos/mistakes (;, symbol not found, valid classes) code that could generate issues (exceptions) is not handled safely
IDEs catch these errors and warn u

Variables in Java- hold a single value/reserve fixed amount of memory based on value's datatype

Primitive types: whole numbers(byte8(bits),short16,****char16,int32,long64) Decimals(float32,double64) Boolean

Java has built in methods to deal with numeric literals ( _ )
: can place any number of _'s in the #
cannot start/end number w/ _
cannot be placed b4/after .00(decimals)
Generally proper usage is using them _ in place of commas 1_000_000.00

Converting variables:
moving from smaller datatype to larger is upcasting
moving from larger to smaller datatype is downcasting and must be explicitly stated; going up in size is implicit
EX: long l = 91;
int s = (int)l; (truncates the additional bytes)

Expressions vs statements:
Expression- segments of code that produce a value EX:(3, 3+4, x, x > 3(operators return expressions), performAction()invoking a method returns a value as an expression)
Statements- segments of code that do something, built out of expressions EX: (doSomething(x) invoking a method, int x = 3 + 4 assigning a value to variable, if(x < 5){} flow control statements,)
evaluated generally from inside-out,
Code Blocks, collection of statements surrounded by {}

Java Operators- Unary Operators (single operand), Binary operators, Ternary operators(3)
Execution Order-
Unary oprators 1st - expression++, expression--, !expression,
Binary operators 2nd - X, /, %, +, -, >, >=, x instanceof y, x == y, x != y, &/|(logical evalutes both), &&/||(shortcut checks one side first)

Assignment operators- sub category of own operator ( variable = expression)
(Weird EX: int result = (variable = 15); )
result = 15, variable = 15
Java is a pass by value language not pass by reference which is why these things can happen
Compound Assignments x += y (x = x + y)
interesting case: twenty = (twenty - 5)++; doesn't work
twenty = twenty++ - 5 (++/-- are shortcuts which change a variable, doesn't work with expressions only variables)
another interesting case: twenty = ++twenty = 5 doesn't work cause you can't assign a number to an expression/operator

In java, when doing math/converting btw decimals/whole numbers are casted to integers and the decimal places are truncated EX: (x(5) / y(2)) = 2 not 2.5

first line of code (compiler readable) must be package declaration for your class
package flowcontrol;
public class IfStatements {
    public static void main(String[] args) {
    }
}

flow control- concept where we can change execution order/allow programs to repeat functionality using built-in reserved words/statements in Java, or structure/architecture of methods
Flow control statements (if, loops, switch...) apply to next line of code
Ternary Operator- shorthand if...else conditional statement( condition ? exprIfTrue : exprIfFalse)
int x = false ? 15 : 25;
(x > y) ? returnTwenty() : returnFive(); doesnt work need to assign a value to expression
int result = (x > y) ? returnTwenty() : returnFive();

Switch Statements check variable against multiple defined values and executes code if value of variable matches, good for known or limited assignment of a variable's value/ exhibit fall-through logic(can use break statements to stop performing cases after finding a match)

switch(var) {
    case value1:
        //executes if var === value1
        break;
    case value2:
        //executes if var === value2
        break;
    case value3:
        //executes if var === value3
        break;
    default: (default only runs if there are no matches in values for the switch statement, doesn't matter where default is located in switch statement)
}

Spring Boot auto format code CMD + SHIFT + F


Conventions in Java-
frameworks/tools are used w/ conventions that do specific actions as long as you stick to certain conventions
SomeExample(Pascal/uppercamel casing): class
someExample(camelCase): variables
SomeExample(): constructor (used to create objs and must match name of class as well)
someExample(): non-constructor methods
some.example(lowercase w/ . seperating package: package (package+classname = fully qualified class name) Helps w/ navigation in the future by making folders

Creating Arrays-
Arrays are collectinos of multiple values of same type EX: int[] array of int values, String[] array of String refs
Arrays have fixed length determined at creation, b/c Java reserves memory for them, EX: 1 int 4 bytes, int[10] 40 bytes, reserved space adjacent in memory

Return statement- when we declare a return type for method, have to use return keyword and provide expression w/ return same type.
EX: int number = b.returnTwenty();
return 20;

return keyword- 1)allows for assignment/use of associated expression 2)halts execution of code within method and retursn program control back to executing location

Methods- Java, often referred to as functions in other programming languages, passing input values in methods are parameters
Declaring a method:
Access modifier determines how accessible given method is: public
Non-access Mod(optional) keywords that can add/limit functionality, static
Return Type specified type of info method must return, if no data use void return type,
Name identifier used to call method later
Parameters(optional) placeholder variables used to pass matching datatypes into a method,
Throws declaration list of execeptions or errors that may occur during execution of method
{Method body}
Method Invocation- calling method and matching parameters


Static Keyword, static means the variable/method belongs to the class instead of each obj of the class, variables w/ static reside in static scope
*/
