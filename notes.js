/*Class- blueprint or outline that manages state/behavior
Object- instance of class (what lives in memory)

Constructor
New keyword starts a process called instantiation(processionals of java creating an instance of obj in memory depending on the class type)
Constructor is block of code that is executed when the new keyword is invoked

EX: class SomeClass {
    int someVariable;
    public SomeClass(){}
    public SomeClass(int variable) {…}

    public static void main(String[] args) {
    …
    }

Encapsulation act of enclosing an item/data from outside influence, can only be changed by methods you create
Data Hiding- act of declaring variables private for no direct access from outside classes/entities
Access Modifiers - changes permission lvls other classes have to this method/class/variable
(public- all classes have access, protected- only subclasses(in any pkg) or classes in same pkg, private- no classes except itself, default- only classes in same package *default happens if you don’t specify an access modifier
possible to get access private variables with get/set methods if provided in public
public class Person {
  private String name; // private = restricted access

  // Getter
  public String getName() {
    return name;
  }

  // Setter
  public void setName(String newName) {
    this.name = newName;
  }

Typically access modifier is 1st keyword when creating entities (private/protected aren’t available at class lvl)
Common patterns are to mark members/instance variables private and have public methods to access variables so classes can't direct change/view values with methods you write

Inheritance- gives access to variables/methods of one class to another

public class Book {
int numPages;
    public void turnPage() {

    }
}
public class Magazine extends Book {

}
Book is a super/base/parent class
Magazine is a sub/derived/child class of Book
A class in java can only extend one other class
Multiple inheritance( when a class inherits/extends two items with the same signature from two different sources doesn't work with java)
Inheritance makes it so you don't have to rewrite methods in children and you can change all of them by adjusting the super
Also creates an (is a) relationship btw child/parent class; relationship is one way magazines are books but not all books are magazines... Can use this rule backwards to figure out what can be inherited

Polymorphism- many forms refering to the is a relationship
when one class extends another an instance of that child class is also an instance of the parent class, if one class can be described as an example of example/subtype of another class can probably inherit from the more generic class
Child class has the public variables/methods of the super class that can be different
Objects are stored in heap memory and addresses stored in ref variables, ref variables use a class as type and can hold address of any object that is an instance of tha tclass
Ex: Dog myDog = new Dog () ; creates a new Dog obj, stores the address of Dog obj in reference variable named myDog type Dog
Refernce variable type (Dog) is like a mask you put over your code ( reference type gives you access to those methods in that class)
Upcasting- process of storing a more specific value in a less specific type;
Reference type also uses its initialization over other classes

Method Overloading- creating methods of same name in the same class w/ diff parameters EX:
class Calculator {
    public int add(int i, int j) {
        return i+ j;
    }
    public double add(double i, double j) {
        return i + j;
    }
    public long add(long i, long j ) {
        return i + j;
    }
}

Inheriting Methods( Ex: modififers methodName(parameters) exceptions )
Any child class you write to extend a class will inherit its methods; child class can specify a new implementation of the method
Overriding allows child classes to provide new implemenation for their parent functionality, EX:
GameObject[] objects;
for (GameObject o : objects) {
    o.collide();
}
To override a method must have method on parent class, in child class specif method of same signature
No, we can't override a static method because static methods are done at compile time while method overriding only occurs at runtime

Abstraction- simply complex thought/system
input -> tax system(blackbox) -> output
Interfaces- abstract entity used to gurantee availability of methods in implementing classes, All methods are public/abstract, all variables are public/static/final used to declare specific actions for objects EX:
public interface Doable {}
public class Chore extends TASK
    implements Doable {}

Also makes complier-enforced contracts: Classes must provide implementation for every interface method or be an abstract class
Interfce methods don't have implementaitons and interface variables are static so no states/behaviors are inherited
Has a type inheritance, class that implements on interface is polymorphically considered an instance of hte interface
When naming interfaces use adjectives or verbs so it can describe what behaviors a class should have, ir provides non of its own (EX: Runnable, Serializable, Functional )
A Class can implement multiple interfaces, interfaces extend other interfaces unlimitedly, can't extend other classes and don't implement anything.

Static- keyword marked on an item as a member of the class
Class acts as a blueprint and an obj is an instance of the class; any methods/variables you label as static are available w/o creating objs of that class type EX: main is static

Final- can't change a value, can be assigned to clases,variables,methods
public final int magicNum = 42
Final variables - code cannot change its value
Final methods- no subclass can override its implementation
Final class- no class can extend this one

While loop- repeat code until condition is fulfilled
Do while loop - executes statements at least once, then repeats while condition is unfulfilled EX: do {} while(condition);

Data structures- working with large data sets
Arrays- linear collection of variables of uniform size/type; reserves a certain amount of memory so contents are adjacent, fixed sizes, contents accessed by index, array elements are empty if contents are removed.
Vectors/Lists- Flexible in size, memory is not reserved at initialization, wrapper around arrays, can access elements by index, internally doubles in size when full, adding/removing elements causes elements to shift, performance for flexibility
Linked Lists- linear collection w/o index, made of nodes, node is a wrapper for actual element w/ a link to next element, accessing elements means searching the entire list from start, adding/removing elements means linking to neighbors can be single/double linked
Maps/Dictionaries- collection of nodes, each node wraps element and tracks an assigned key for that element, map must be able to return a node when given a certain key
Exceptions- problems that occur during compliation/executions, are thrown and can be caught/handled independently, checked: detected during compilation, unchecked: occur during runtime; EX:
public class Exception Test {
        public static void main (String[] args) {
            try {
                    code here/
            }   catch (ArithmeticException e) {
                    caugh an exception
            }   finally {
                    optional block
            }
        }
}
DocType
tells the browser what version of markup language is being used.
What are the four pillars of oop?
Abstraction,Polymorphism, Encapsulation, Inheritance

Throws Clause- method declaration can have a throws clause indicating it may throw and will not handle certain exceptions, can rethrow it up to the calling code, method w/ throws clause is a source for checked exceptions, make sure to handle exceptions
Data Organization- allows for quickly searching records, accessing records concurrently, updating most recent data, also linked related data
Relational databases- link data in one table to related data in another table, tables are like named spreadsheets, that track records, columns are properties of record while rows are the record itself
SQL- standard for database languages, managed by American National Standards Institute(ANSI)
designed to be readable by design, interaction occurs through statements/queries
SQL trigger- stored programs that are automatically executed in response to an event, such as inserting a new row in a table

SQL sublanguages- DDL: data definition language - define databse structure(create tables, alter, drop remove delete tables/DBs), DML: Data Maniupulation Language manipulate table data(CRUD operations), TCL: Transaction control Language- control the execution of queries, how DML statements are issued/executing, Transaction group of SQL statements either all executed or none
COlumn Datatypes: VARCHAR: string w/ specified max length,
Integer: 32- bit signed whole numbers
SmallInt: 16 bit signed whole number
Number(n,d): decimal numbers with limited figures
Float: floating-point numbers
Date: day/month/year record
Timestamp: combination of date/time
null = nothing while 0 is a value
Table Constraints- Column attributes that restrict data
Primay Key: column whose values uniquely identify each row
Composite Key: two or more columns acting as a primary key
Foreign Key: column in one table that references column in another table
Unique Key: column whose values must be unique in each row
Not Null: column must have a value in each row
Check: column values must meet some criteria

TCL Transaction Control Language- useful for rolling back transactions in case mistakes or crashes using 3 simple statements( SavePoint, Rollback, Commit)
Commit- committing is act of making SQL query permanent/visible to all users, most DBs commit automatically by default
Set Autocommit = off (set is command to change value inside variables/property in DBs)
With autocommit of, INSERT, UPDATE, DELETE statements require manual committing,
COMMIT SQL command commits all uncommitted changes, this allows multiple SQL commands to be commited at same time, very useful with savepoint/rollback
SAVEPOINT- usedto create backup point b4 executing queries, each savepoint has a name identfying it
ROLLBACK- allows you to rollback to a savepoint destroying all savepoints made after target, cannot rollback past a commit EX:
SAVEPOINT s0;
DELETE People;
ROLLBACK TO SAVEPOINT s0;
These only work on data changed since DB was last turned on so not suitable for physical backups, make savepoints b4 working in session and only commit when ready.

Joins/Unions-
Alias is alt name you can grant to columns/tables to make it easier to reference EX:
SELECT customer_id AS ID FROM Customers; ( result table will have ID instead of customer_id)
Joining two tables requires they have some data in common like sharing column
Foreign keys are an easy way to spot a column to join on but not needed for joins EX:
SELECT * FROM Customers c INNER JOIN OrderHistory o ON c.CustomerID = o.CustomerID Only gets results where both tables have a customerID value that matched INNER JOIN where two tables overlap
Want to see all customer records and orderhistory data for those
Left Join EX:
SELECT * FROM Customers c LEFT JOIN OrderHistory o ON c.CustomerID = o.CustomerID
Right join would do reverse, give all rows from orderhistory table and customers w/ no orders filled iwth null
Outer Joins, rows that have no match in other tables EX:
SELECT * FROM Customers c LEFT JOIN OrderHistory o ON c.CustomerID = o.CustomerID WHERE o.customerID = NULL
SELECT * FROM Customers WHERE NOT customerID IN (SELECT customerID from OrderHistory)
Union statement- combines two SELECT statements but results are stacked vertically, instead of horizontally like joins, two rules though: number of columns returned by both select statements must be same and data types of each column must match EX:
SELECT customerID, firstname, lastname FROM Customers UNION SELECT customerID, firstname, lastname FROM VIP_Customers
Full join returns all records from both tables despite any conditions

Join: operation that combines results of two tables
left join return resutls from first table and records from second table if they match a condition, right join does 2nd table to first if they mathc records in 2nd on a condition
Inner join- returns records from both tbales if they match a condition
Full join returns all records from both tables
WHERE clause- appened to end of slect statement, condition indicates a column to filter and any comparison operators and values
EX: SELECT STATEMENT WHERE Condition
SELECT * FROM EMPLOYEES WHERE employee_id > 5;

Functions/Procedures- batches of SQL statements run together to produce results, Aggregate functions are built in but you can design your own
Different DBs have own syntax for queries,
Functions in SQL- accepts 0+ inputs, and usually return a scalar value, at most one tabular value in some DBs
User-Defined Functions-
CREATE FUNCTION function_name (
    input1 type1,
    input2 type2,
    ...
) RETURN type(INT, NUMBER, VARCHAR)
BEGIN
-- logic
RETURN value
END;
Stored Procedure- similar to function being a series of SQL statements, series of SQL staetments executed as a batch invoked by a name, can have 0+IN and OUT parameters that are tabular values
Stored procedures live on DB but can be invoked remotely by other programs so can save on processing time/network bandwidth as well as safety, best practice to use them where possible
User-Defined Procedures- EX flow:
CREATE PROCEDURE procedure_name (
    paramter1 IN type1,
    parameter2 OUT type2,
    ...
) BEGIN
-- SET paramter2 = value;
END [procedure_name];
Stored Procedures cannot be part of another SQL statement must be explicitly run using CALL or EXECUTE
CALL procedure_name(parameter1, ...)


HTML- hypertext markup laungauge,provides structure, hypertext- content linked to related content, tags- how a browser should see
Elements: EX <tag> content </tag> < img />
attributes: <tag attribute='' > </tag>
!DOCTYPE html, HTML, (HEAD- metadata for page, TITLE) BODY,
Tables: <table> <tr> <td> <th> <thead> <tbody> <tfoot>
Lists: Ol, Ul type attribute can change the bullet points/numbering of lists
Responsive Web Design- designing web pages to display according to device/size of screen, scrolling vertically more common now, force content down to next line
Best practices:
Design for smallest size first, enchance after, lines of text should be 8-10 words long
Use CSS Media Queries for styling specific device sizes, use min-width and relative dimensions, avoid @imports for performance
Avoid using large fixed weidth elements, avoid tables for layout, relatives with width values, Div's are good for layout
CSS Statements: selector {
    declartion (property: value); declaration
}
Element selector
.(name) class
#(name) ID
multiple selectors, h1, p, {}
Parent-child selector (apply to all immediate children not grand children) div > p {}; to go down another level aka grandchildren just use a space instead of > so: div p
Sibling selector h2 + p
Javascript - is not a serverside language, it is a scripting language, does not need to be complied but is interpreted by browsers, designed to manipulate web pages, made by using script type is optional
script src=""
Datatypes- specialized form of information : Javascript - string, number, boolean, object, Date, Array, undefined, null
Javascript follows camelCase convention, nums must begin with letter, + $, names are case-sensitive
null can be used to set a variable to an empty value

linking css stylesheet
<link rel="stylesheet" type="text/css" href="css/style.css"> in head of index.html


Java keywords - reserved words in java
Static - defines class variables/methods members, globally available to all instances, static method can only use other static members w/ same class. Can use a static member with dot operator class w/o substantiating the class first.
The main() method must be static to be executed by JVM.
static variables are shared accross all instances of a class
Example of this: (
    class StaticDemo {
        static int counter = 0;
        int number = 0;
        public StaticDemo(){
            counter++;
            number++;
        }
    }
    public class StaticExample {
        public static void main(String[] args) {
            StaticDemo instanceA = new StaticDemo();
            System.out.println('instanceA counter:' + instanceA.counter)
        }
    }
)

Final- makes immutable, ref vars can't switch refs, methods can't be overridden, classes can't be extended
Abstract- incomplete/missing definition,can't be instantiated, if a class contains any abstract methods it becomes abstract class, but can declare abstract class if it only contains concrete methods. If a child class extends abstract class, it must override all inheritied abstract methods to provide its own implementation, if not the subclass must be declared abstract
Example of this: (
    abstract class Animal {
        public void eat() {
        }
        abstract void move();
    }
)
    class Dog extends Animal {
        public void move() {
            System.out.println('The dog walks around');
        }
        public void beg() {
            System.out.println('The dog looks cute to get food');
        }
    }
    public class AbstractExample {
        public static void main(String[] args) {
            Dog myDog = new Dog();
            myDog.eat();
            myDog.move();
            myDog.beg();
        }
    }

Interfaces- abstract entity used as a contract to gurantee availability of methods in implementing classes, all methods are public abstract, all variables are public static final
Ex: public interface Doable {}
public class Chore
    extends Task
    implements Doable {}
To implement an interface in class, use implements keyword after extending if necessary, since its complier enforced contract each method in interface must be supplied w/ a concrete implementation by the implementing class, if not on all methods the class must be abstract. Referred to as type inheritance, use adjectives/verbs to reinforce relationship an interface describes what behaviors a class should have/provides none its own. Class can implement multiple inferfaces, interfaces can extend unlimited amount of interfaces, cannot extend classes and don't implement with other interfaces
EX: public class InterfacesExample {
        public static void main(String[] args) {
            Domesticated domesticatedThing = new Dog(); (polymorphism to refer to dog obj w/ domesticated type reference variable)
            domesticatedThing.doWork()
        }
}
    interface Domesticated {
        public void doWork();
    }
    class Animal {
        public void eat() {
            System.out.println('I eat food');
        }
    }
    class Wolf extends Animal {
        public void eat() {
            System.out.println('I eat fresh meat');
        }
    }
    class Dog extends Animal implements Domesticated {
        public void eat() {
            System.out.println('I eat kibble');
        }
        public void doWork() {
            System.outprintln('I perform a trick');
            (remember to implement all methods in interfaces to avoid abstract classes)
        }
    }

Default method for interfaces: interface methods implemented in interface, implementing classes not required to implement default methods but can override them
Ex: public interace Doable {
    default void doAThing() {
        System.out.println('Done!');
    }
}
Instance variables declared in interface are always public/static/final, can't be changed once given a value/constant across all objects implementing this interface, can still declare local variables in default methods.
Default methods can call other methods delcated by interface even if not defined since the guarantee w/ interfaces is that the implementing class will provide an implementation for those other methods making it safe. W/ Static method can call direclty off interface w/o creating obj
Interfaces can have static methods w/ definitions (static meaning you can invoke w/o creating an instance of class that implement the interface, they can only call other static methods or access non-static methods through local reference variables).
EX: public class Java8InterfaceExample {
        public static void main(String[] args) {
            Domesticated myDog = new Dog();
            Domesticated.register(myDog);
            myDog.doWork();
            myDog.doWork('play fetch!');
            System.out.println('Domesticated Animals:' + Domesticated.animals);
        }
}
interface Domesticated {
    ArrayList<String> animals = new ArrayList<>();
    ArrayList<String> plants = new ArrayList<>();
    static void register(Domesticated species) {
        if (species instanceof Animal)
            animals.add(species.getClass().getName());
        else if (species instanceof Plant)
            plants.add(species.getClass().getName());
    }
    void doWork();

    default void doWork(String job) {
        System.out.println('I' + job);
    }
    (
        Multiple Inheritance- two interfaces w/ default methods of same name, a class implementing both will conflict, can use super keyword so specify which interface implementation to use,
        Domesticated.super.doWork();
        Worker.super.doWork();
    )
}

abstract class Animal {}
abstract class Plant {}

class Dog extends Animal implements Domesticated {
    public void doWork() {
        System.out.println('I hunt for food!');
    }
}
class Wheat extends Plant implements Domesticated {
    public void doWork() {
        System.out.println('I produce grain');
    }
}
Abstract Classes- can have instance variables that aren't public/static/final unlike interfaces, non public methods etc
In general, if you wanted to develop and enforce a certain hierarchy of functionality where state and behavior was tracked, then you would use an abstract class. If you want a class to be free to implement functionality without constrained to a hierarchy, then an interface is a better approach.

Exceptions- problem occuring during compliation/execution of programs, thrown and can be caught/handled
Checked/Unchecked exceptions- checked means complier looks for and catches error and app won't run until fixed, unchecked happens without checking and could kill app during runtime.
Throwable -> Exception(unable to locate/connect to resources, etc) -> RuntimeException(logic problems in code, accessing non-existent array element, /0, casting outside inherticance tree)
EX: public class ExceptionTest {
        public static void main(String[] args) {
            try {
            }
            catch (ArithmeticException e) {
            }
            finally {
            }
        }
}
Try block must have at least one catch or finally block, can have multiple catch blocks to handle different types of exceptions. Finally block normally has code to close resources/connections to database so safely continue program. Only first catch block applicable to exception thrown will be invoked, principle of polymorphism applies to exceptions so remeber any exception will be caught by hte catch block that handles the more generic exception first if its above your more specified exceptions.
Instead of handling exceptions you can use throws clause to re throw it back to calling code, make sure to handle exceptions.
ETC You can catch errors but you shouldn't an application can rarely handle them properly, or continue running after they occur

import java.io.FileInputStream;
import java.io.FileNotFoundException;

public class CheckedExceptionExample {
    public static void openFile() throws FileNotFoundException {
        new FileInputStream('C://DoesNotExist.txt);
    }
    (throwing exception to calling code)
    public static void main(String[] args) {
        (make sure to handle exception)
        try {
        openFile();
        } catch(FileNotFoundException e) {
            e.printStackTrace();
        }

Java Variables/Data Types-
Variables- temporarily store data in RAM, Strongly Typed- each variable can only hold one type of data, java variable types two: primitive and reference
Primitive variables store data directly as bytes while references store memory addresses where objs are located and dictate how they're accessed
Range of values for primitives storing is limitied by amount of memory reserved for the type
Primitive data types- lowercase, initialized to lowest value(0, false, \u0000)
boolean- true/false occcupies 1 bit of memory, java doesn't support truthy values false is not == 0
byte: -128 to 127 occupies 8 bits(1 byte of memory)
short: -2^15 to 2^15 - 1, occupies 16 bits
char: unicode characters '\u0000' to \ufff' 16 bits
int: -2^31 to 2^31-1 occupies 32 bits
float: 32 bit floating point number, not as precise as double, 0.15f, 1.25e4f
long: -2^63 to 2^63 -1 64 bits 500:
double: 64 bit floating point # occupies 64 bits common for decimals
Ref Variables use class as their type, can only point to objs that are instances of the class that's their type, can use . operator to access variables/methods of referenced obj delcared in class type, ref variables point to an obj not itself
Arrays- collection of primitive values or obj refs,
Arrays have fixed size and data type determined when instantiated
EX: int[] intArray = new int[10];
int[] intArray = {2, 4, 6};
intArray[5] = 12;
Array is technically an obj in java, can be used with .notation to get length array.length
Multidimensional array:
int [][] myArray = new int[3][2];
int[][] otherArr = {{1,2}, {2,4}, {3,6}};
Variable Classifications- {} operators denote a change in scope, variables are visible to nested scopes but not higher scopes
Instance variables- declared in class scope, every instance of the class with have a copy of that variable. Static keyword on variable makes it a class variable/global variable, every obj of that class shares same value of variable
variable declared in method is local variable and doesn't exist outside method and deleted after method is done.

Java Statements- two types: Expression statements- built from expressions joined by operators
Control Flow Statements- control execution of other statements w/ logic
Expressions- compute a value; examples below
returns (or could return) a value EX: int a; a = 5
Method invocations/equations using operators that return results
type of data returned depends on types of operands or operator used
b < 3; returns a boolean b/c < operator.

Statements- similar to sentence in languages, built from one or more expressions; uses of assignment operator, method invocations, new keyword all statements
Block- series of statements between {}
Switch Statements- evaluates a single expression to take an action based on value, EX:
switch(expression) {
    case value_1: statement;
        break;
    case value_2: statement;
        break;
    default: statement;
        break;
}
If missing abreak statement, execution alls through to next case until a break is reached
Loop Statements: executes statement/block until a condition is met, good for iteration,
For loop- iterates a predetermined amount of times,
 for(initilization; termination; increment)
    statement;
public static void main(String[] args) {
    for (int count = 1; count <= 10; count++) {
        System.out.println(count);
    }
    System.out.println('exiting loop');
    (count variable is out of scope after loop ends)
}
While loops- runs as long as boolean expression is true
while(experession) {
    statement;
}
Do-while loops- runs at least once then performs while loop
Do {
    statement
}
while (experssion)
break statement allows you to exit loop,
continue statement terminatess current iteration of loop and goes to next

Class- structure that can have states/behaviors and serves as a template for objects which are instances of class w/ a specific state
Acceess Modifiers- keywors controlling ability for outside code to access/change state and behvaiors of a class(public, private, protected, default all work for fields/methods/consructors) but for classes only public/default
Best method for exposing data in a class to outside manipulation is to make data in class private then creating simple methods (accessor/mutator)getters/setters to return value of variable/change value EX:
public class Robot {
    private int maxSpeed;
}

    public Robot() {
        this.maxSpeed = 1;
    }
    public Robot(int maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    public int getMaxSpeed() {
        return maxSpeed;
    }
    public void setMaxSpeed(int maxSpeed) {
        if (maxSpeed >= 0)
            this.maxSpeed = maxSpeed
        else
            this.maxSpeed = 0;
    }
    public void travel() {
        System.out.println('maxSpeed')
    }

public class RobotTester {
    public static void main(string[] args) {
        Robot myRobo = new Robot();
        (constructor is used to create an object of a class and set its initial state, if you don't write one yourself JVM gives you a default constructor which takes no arguments and sets no values)
        myRobo.travel()
    }
}
A class can have many constructors all w/ same name but must be differentiated by number/type of parameters they accept called method overloading

Class is template used to instantiate objects, also a type when used w/ ref variable, determines what states/behaviors an obj possesses, ref variable determines what behaviors of an obj can be invoked and how any variables get intialized
Object- instance of a class in memory, never interact through objs directly but through references
Default Constructors- constructor is a block of code executed when a class is instantiated, once per obj created
Constructors always have same name as class and can accept any # of parameters; if you don't specify constructor complier makes one for you- default no-arg constructor
Specifying a no-arg constructor makes complier not add one
Constructors cNoArg = new Constructors();

Implicit Constructor Calls- Java has many implicit bevahiors (actions happening auto/invisibly)
In particular when java provides default no-arg constuctor and another is invoking a super class's constructor from within a constructor
EX:
class Animal {}
-->
class Animal{
    public Animal() {}  //constructor added by complier

        super(); //added by compiler for rule
}
Rules of constructors is it must have a call to invoke super class's constructor, exception is if the constructor of Object class which creates an obj in memory if you invoke this() to call another constructor from within the class
class Animal {}

public class Dog extends Animal {
    private String name;
    private String breed;

    public Dog(String name, String breed) {

        super(); //implicit call to superclass constructor added by complier, doesn't add no-arg version since we created a constructor for Dog class
        this.name = name;
        this.breed = breed;
    }
}
Inheritance hierarchy  is now Dog invoking Animal which invokes Object, eventually superclass constructor must be called which guarantees that end of chain Object constructor is getting called so obj can be created in memory
Implicit Constructor Pitfalls- when creating constructors make sure you don't break superclass chain
class Animal {

    public Animal(String name) {}

    super(); //added by complier when it handles your code
}
public class Dog extends Animal {
    private String name;
    private String breed;

    public Dog(String name, String breed) {
        super(); //added by complier this causes error b/c call to super() attempts to invoke no arg constuctor in Animal class but it doesn't have one since we defined our own, fix would be to add explicit call to super('') passing in String arugment to match Animal's only constructor)
        this.name = name;
        this.breed = breed;
    }
}

Method Overloading-
class can define multiple methods/ good for having same functionality of one method but use diff inputs
EX: public int add(int a, int b) {
    return a + b;
}
public double add(double a, double b) {
    return a + b;
}
Overloading rules- overloaded method must have a different number and/or types of parameters and/or order of parameters
overloaded method can throw Exceptions
overloaded method can return a different datatype
public class OverloadedMethods {

  public static void main(String[] args) {
    //create instance here
    OverloadedMethods om = new OverloadedMethods();
    om.print();
    om.print("second print method");
    om.print("second", "third");
  }

  //overload methods here
  public void print(){
    System.out.println("original print method.");
  }

  public void print(String str){
    System.out.println(str);
  }

  public void print(String str, String str2){
    System.out.println(str + " " + str2);
  }
//causes an error since it can't differentiate btw this and method above
  public void print(String first, String second){
    System.out.println(first + " " + second);
  }

}

Object Class- parent of all classes in Java, provides several methods as convenience/ acts as wrapper for polymorphic code
Object class methods- toString(): gives string representation of obj and called when you directly print an obj to console, by defaul prints memory address of obj
hashCode(): provides unique identifier to object
equals(Object o):  used to compare two objs using memory addresses (==)
finalize(): called by garbage collector for any obj instance b4 it is removed from memory
clone(): create copy of obj
EX:
class Person {
    private String name;

    public String getName() { return name;}
    public void setName(String name) { this.name = name;}
}
public class ObjectTest {
    public static String print(Object o) {
        return o.toString();
    }
    public static void main(String[] args) {
        Person someone = new Person();
        System.out.println(print(someone));
    }
}

Strings- package java.lang is special, its default and implicitly imported into all Java classes, requires no package declaration, System and String classes come from this package
String class- can be instantiated in two diff ways unlike classes, string objs often recycled by JVM instead of creating new ones each time from string pool,
String class is immutuable in Java, so when you create two strings w/ same name in Java the JVM shares them to save memory, if use new keyword can force a new String obj to be instantiated
EX:   public class StringTesT {
    public static void main(String[] args) {
        String stringA = 'Hello';
        String stringB = new String('Hello');
    }//both have same value but are not the same object ==
}
String API (app programming interface) gives library of fuctions

equals() and == :
== used to compare value of primities, if you compare two reference variables using == operator, it compares ref address of objs each variable points too, if you compare two strings and one is a new object but same also returns false, Should use equals() method with objects to compare values of objects

String, StringBuilder, StringBuffer
Both String class and value stored inside String obj are final, String class cannot be extended and once instantiated value can't be changed, everytime you modify a string object a new one is created
To create a mutable STring, use StringBuilder or StringBuffer object which allow text value to chang at will, however its not thread-safe(if two proceses running at same time need access to same STring Obj) StringBuffer however is mutable and thread-safe but slows performance since only one thread can access it at a time

Final keyword can be applied to a class, method, or variable
public final int x = 124, cannot reassign variable to another value
public final int someMethod(){...} cannot override method
public final class FinallClass{} cannot create subclass of class

Data Structures- Arrays, LinkedLists, Stacks/Queues, Maps/Dictionaries

typing- languages seperating values into groups like ints, etc
variables given fixed amount of memory, Java its 4 bytes-32 bits of memory, this means amount of memory reserved is always 4 bytes
Every byte of memory has an address/ cpu knows where to access variable through the address of first byte reserved
So an array is a series of reserved memory addresses for a fixed #/type of variables; So if my array starts at address 2, and each integer is reserved 4 bytes, then accessing array index 3 is as simple as accessing memory address 2 + (4 * 3), or memory address 14
Array values are considered to be memory adjacent so pretty fast, accessing an array by index is an O(1) operation. Expanding array in java requires creating a new one so it is an O(n) operation since you have to iterate over entire old array.
String- series of alphanumeric characters, can be implemented as arrays of characters.
Palindrome is a string algorithm, reads same order of characters forward/backwards. Test way to write an algorithm testing a palindrome w/ psudeocode
algorithm palindrome is  input: string phrase, output: true/false result
let length = phrase.length
let c = 0
while (c <= length/2)
    if (phrase[c] != phrase[length - 1 - c])
        return false
    c = c + 1
    return true

Collections - object acting as a storage system for elements similar to array but strictly for objects, also a class called Collections w/ several static methods for collection objs. SortedSet maintains order by a supplied rule.
Collection subinterfaces -
Set - no duplicate elements, order doesn't matter, common classes are HashSet unsorted, TreeSet sorted
List - specifies a collection that is ordered but not sorted, common class that implements list interface is ArrayList
Queue - particular order of elements for processes, common classes are LinkedList and PriorityQueue, Queue is FIFO, PriorityQueue follows developer order code
Collections have methods to add/remove elements:
methods.add(Object.o) - add element to collection,
contains(Object.o) - returns true if collection has obj
remove(Object.o) - remove obj from collection if present
size() - return number of elements

ArrayList- class that implements List interface and can grow/shrink dynamically unlike Arrays,
Ex code:
import java.util.ArrayList;

public class CollectionExample {
    public static void main(String[] args) {
        //angle brackets denote that this is an example of Generic data types in use
        ArrayList<String> arrList = new ArrayList<>();

        arrList.add("Hello");
        arrList.add("");
        arrList.add("World");
        arrList.add(3,"!");
        //get is delcared in ArrayList class and used to return element at specified index/position
        System.out.println("Value at index 2: " + arrList.get(2));
    }
}

Maps- Map interface doesn't extend Collection interface but still referred to as a collection/data structure
Implementing classes for map interfaces: Hashtable, HashMap, TreeMap
Hashtable/HashMap- store objs based on hash code(generated for obj using special hashing function), both sort/retrieve objs extremely efficiently; Hashtable unlike HashMap is synchronized meaning in apps that use multiple concurrent process/threads Hastable can be accessed safely by two diff processes at same time, also no null keys/values
HashMap is faster and preferred when only one process needs to access map at a time, allows one null key and any values can be null
TreeMap: HashMap but sorted
Map main Methods- put, get, and keySet
Put- adds a key/value pair to map (single data type for key and single datatype for value ! can be different String, Int) public V put(K key, V value)
public V get(K key)
Get- used to retrieve value by specifying associated key, if it doesn't exist in map returns null ( remove can remove key/value pair by specifying key) public V remove (K key)
public Set<K> keySet()
Keyset- helpful method to return a List of all keys in map/ good for iterating,
public Collection<V> values()
Returns a collection of all values but no keys

EX Code:
import java.util.HashMap;
public class TestHashMap {
    public static void main(String[] args) {
        HashMap<Integer, String> myMap = new HashMap<>();
        myMap.put(1, "James");
        myMap.put(2, "Mike");
        myMap.put(3, "Mary");
        System.out.println("Te String sorted under the key \"3\" is: " + myMap.get(3));
    }
}
Maps access contents in O(1) time
Many algorithms move data to map format to speed up processing

OOP- make sure to understand different btw Class, Object, Reference Variable
Class- tempalte used to instantiate objects, also called type when used w/ a ref variable. Classes determine what states/behaviors an obj will possess, class used as type for ref variable determines what behaviors ref object can be invoked
Object- instance of class in memory, don't interact w/ objs in memory directly but through references(memory address used by JVM to find obj)
Reference Variable- variable storing ref to obj in memory, type of ref variable determines what types of objs a ref variable can store a ref to, when a class is used as type of ref variable it can only be used to invoke behaviors of the obj delcared in class/type EX:
   1      2            3
Animal someVar = new Animal();
1- class/type of ref variable, 2-name of ref variable, 3 instantiation of new obj using new keyword to invoke constructor
The someVar reference variable does not contain an Animal object, it contains a reference that points to it in memory
The Animal type means that someVar can only store a reference to an object that is an instance of the Animal class (directly or through inheritance)
The Animal type means that someVar can only be used to invoke methods or access public variables present in the Animal class (whether defined in Animal or inherited from a superclass)
The "new Animal()" expression creates an object, it is not the object itself. You can never access the object directly.

Inheritance- write less code by writing more generic code by creating relationships btw objs, when one class inherits from another an obj that is an instance of the first class will contain states/behaviors of the 2nd
Base,Super,parent classes -> derived/sub/child classes

EX: Java - class Automobile{} class Sedan extends Automobile{}
C# - class Autombile{} class Sedan : Automobile {}
obj of sedan class possesses copies of any variables/methods defined in automobile class in addition to variables/methods defined in sedan class. Inheritance is- A(n) relation
EX:
public class Automobile {
    public int position = 3;
    public void move() {
        position += 4;
    }
}
public class Sedan extends Automobile { }
public class Example {
    private static moveAutomobile(Automobile auto) {
        auto.move();
    }

    public static void main(String[] args) {
        Sedan car = new Sedan();
        car.move();
        moveAutomobile(car);
    }
}
Polymorphism- ability for an obj to be considered an instance of every class in its inherticance chain, magazine -> book -> obj
Method Overriding- child classes inherit public/protected items from parents but can also declare own method w/ same name/parameters
Super keyword- Always a refernce to currently objects parent class
calls super-class's implementation of someMethod() so you don't have to rewrite generic code in your child classes EX: super.someMethod();
Inheritance C#-
allows you to organize classes into a heirarchy,
Virtual: identifies a method in parent class that can be overriden in child class,
Override- identifies method as an override (need both a virtual/override)
Base- used to access superclass member
Sealed- prevents class from being inherited

Inheritance isn't the only way of creating relationships btw objs
Composition (Has-A) EX:
public class Dog {}
public class Person {
    Dog myDog = new Dog();
}
class Person HAS-A class Dog, ref variable creates a HAS-A relationship, technically Obj B cannot exist without object A
Composition- if program only indicates Dog obj can never be created w/o Person obj
Aggregation- if program creates independent Dog objects elsewhere

Object Polymorphism- class B inherits from class A, obj of class B is considered to be an obj of class A; allows generic code that can be used with families of related objs



SQL- Structured Query Language, managed by ANSI(American National Standards Institute), used with Relational Database Management System; Interaction occurs through SQL statements/queries
SQL sub-Languages- DDL: Data Definition Language (Statements like CREATE, ALTER, DROP)
DML:Data Manipulation Language (SELECT, INSERT, UPDATE, DELETE) CRUD statements
TCL: Transaction Control Language- statements that control execution of queries, Transactions are groups of SQL statements executed together.

Column Datatypes- Columns can hold single type of data ( common data types are: VARCHAR(2), INTEGER, SMALLINT(16bit) NUMBER(decimals n-digits, d decimals), FLOAT, DATE, TIMESTAMP (combo of date/time))
NULL in databases means no data not 0

Table Constraints- Rules for RDBMS to manage data;
Primary Key- columns must have a value in each row, should be unique for each entry, composite key- two or more columns acting together as primary key.
Foreign Key- column in one table used to reference a different column in another table(big for making DBs relational); this allows you to delete rows from multiple tables relating to each other
Unique Key- Column whose values must be unique in each row(can also have none for some rows)
Not Null- constraint requiring column values to not be null, must be value (can be 0 or empty string)
Check- constraint ensuring value in column meets a certain condition
Default- constraint allowing for a specific default value for a column if none are supplied
DB Normalization- process of designing database so you have no composite columns, little to no redundant data, data dependencies make sense. Generally reach 3rd stage (3rd Normal Form) out of the 6-7
First Normal Form (1NF)- Eliminate composite columns, must have primary or composite key, (composite columns hold multiple data values)
Second Normal Form (2NF)- move columns causing data dulplication to different tables and relate with foreign key
1 to Many (1:N)- record in one table coresponds to one/more records in another table, or multiple records in one table share a reference to a record in another table; Many table gets a forieng key column that refernces one table
1 to 1 (1:1)- A single row in one table refers to a single row in another table, 1 to 1's usually mean you should merge the table unless business requirements state otherwise
Many to Many (N:N)- have to make a join table/association table since it violates 2NF to combine tables here, The table sits between the 2 N:N tables and tracks a 1 to many relationship btw tables on each side; the tables column are foreign keys to both tables and combination of both clolumns is a composite key
Third Normal Formm (3NF)- every column will descrube the key (1NF), the whole key (2NF), nothing but the key(3NF)
Normalizing databases is driven by business requirements, extremely large databases might take longer to search through relationships
DDL- Data definition Language
Not ever language implements SQL standard in same way make sure to read DB documentation
Comments in SQL are preceeded by two hypens --
CREATE -  CREATE [TABLE | DATABAES] name;
CREATE TABLE name (
    column_1 data_type constraint,
)
CREATE TABLE Customer(
    customer_id INTEGER PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    age INTEGER CHECK (age > 18)
);
1:N relationship w/ customers table
CREATE TABLE Customer_Phones (
    customer_id INTEGER REFERENCES Customer(customer_id),
    phone VARCHAR NOT NULL,
    PRIMARY KEY(customer_id, phone)
)
ALTER- changes tables
ALTER TABLE table_name
    ADD column_name data_type;
    ADD (
        (adding multiple columns)
        column_1 data_type,
        ...
    );
    (can change datatype of column using modify)
    MODIFY column_name data_type constraint,
    or
    (MySQL/PostgresSQL)
    ALTER COLUMN column_name data_type;
    DROP COLUMN column_name;
    RENAME TO table_name;
    RENAME COLUMN old_name TO new_name;
ALTER TABLE table_name
    DROP CONSTRAINT constraint_name;
    ADD CONSTRAINT constraint_name constraint;
    (May have to drop a constraint b4 changing a table/column name)
DROP [TABLE | DATABASE] name;
will remove all data from structure/ cannot drop table w/ constraints
(to delete just data use truncate)
TRUNCATE TABLE table_name;

DML Data Manipulation Language-
CRUD, CREATE READ UPDATE DELETE
SELECT, INSERT, UPDATE, DELETE
SELECT (*) column1, column2, ....,
FROM table_name
SELECT firstname, lastname
FROM People
ORDER BY clause- allows you to sort the returned results according to value each row has for the given column
SELECT first_name, last_name
FROM Customers
ORDER BY last_name;
Aggregate Function- SQL command processsing a tabular input and returning a scalar value
AVG(column_name) returns average value
SELECT AVG(age) FROM People;
SUM(column_name) returns sum of all values
[MIN | MAX](column_name) returns min/max value (works with VARCHAR/text columns)
[FIRST | LAST] returns first or last value
COUNT(column_name) returns number of results found
GROUP BY Clause- group column values by criteria b4 performing aggregate function on each group
SELECT customerID, SUM(order_cost)
FROM Order_History
GROUP BY customerID;
Group by used to containerize resutls returned from an aggregate function,
WHERE Clause- Filter results of a statement w/ any comparison/logical operators
SELECT *
FROM Customers
WHERE age > 35
    OR customerID < 3; AND first_name = "Susan"; OR NOT last_name
Subqueries- SQL query nested inside another, so results of inner one inform outer
SELECT *
FROM Customers
WHERE customerId = (
    (= will break query if two customers have most expensive order can fix this using IN keyword- evaluates a range of inputs for equality instead of just one)
WHERE customerID IN ()
    SELECT customerID
    FROM Order_History
    WHERE order_cost = (
        SELECT MAX(order_cost)
        FROM Order_History
    )
)
subquery example:
SELECT column1, column2 from (select column1, column2 from table);
subquery will execute first, store its results in temporary table then outer query will execute its function against that temp table
select * from cities WHERE population = (select min(population) from cities);
select * from cities WHERE id = (select min(id) from cities WHERE population = (select min(population) from cities));
Where uses comparison operators to limit records
LIKE keyword- accepts % symbol as wildcard for matching patterns in text, can use multiple %'s to match wildcard patterns
SELECT *
FROM Customers
WHERE first_name LIKE "R%"; (gives all customer rows where first name starts with R and ends w/ any combination of characters)
INSERT - adds data to table either in whole rows or columns
INSERT INTO table_name(column1, ...)
    VALUES(value1, ...);
    (to insert data into all columns just do)
INSERT INTO table_name VALUES(value1, ...)
UPDATE- changes data in table based on given criteria
UPDATE table_name
SET column_name = value;
UPDATE table_name
SET column1 = value1,
    column2 = value2
UPDATE table_name
SET column1 = value1,
WHERE condition;
DELETE FROM table_name;
DELETE FROM table_name;
WHERE condition;


HTML notes- self closing tags (img) <selfclosingtag />
DOCTYPE tag <!DOCTYPE html> just lets browser know this is an HTML document
Syntax Rules- tags aren't case sensitive but use lowercase when declaring tags, attributes/values are case sensitive
HTML documents respect single whiet space characters, browsers ignore unknown attributes/elements
<br /> Line Break tag
<!-- text --> Comment text
Block/Inline elements
<div> Block elements, group interior content, occupies entire window width
<span> Inline element, groups interior content, occupies width of interior content
Semantic Elements- don't provide any inherent styling just used to organize related content
<header> <nav> <section> <article> <section> <aside> <footer>
Webpages/browsers may attach special styling/functionality to semantic tags
Anchor Tag Attrbutes: -href="": hypertext ref resource link directs to
-target="": target window, determines which context link opens in
+"_self" opens link in same context/window default value
+"_blank" opens link in new context/tab/window
+"_parent" opens link in parent context
+"_top" similar to parent but finds ancestor of all contexts/1st parent
Internal Links- use IDs  as href value when those elements have a ID assigned EX: <a href="#div1">Link to div1</a>
Tables-
<table> <tr> <td> <th>table header are centered automatically
Semantic table elements: <thead> tablehead <tbody> table body <tfoot>table footer these apply no stylign just used for grouping
Table cell Elements-
rowspan="1" : row span determines how many rows a cell will occupy(Vertically)
colspan="1" column span determines how many columns a cell will occupy(horizontally)
Table caption- <caption> attaches text caption to table, only use caption element directly beneath table element
Lists: ol, ul, li
list type denotes the bullet points for lists a/A  I:roman numerals

Forms- collect/submit user input to server
<form> attributes
method="post/get" http determines which http is used to send form request (don't use get w/ sensitive info)
action="handler" declares URL of handler that will process form data (frontend meeting backend) current page handles form if none is specified
Form Inputs-
<input>: form input creates a data entry field
<textarea>: text area creates a resizable text box
<select>: selection input creates a drop-down list
<option>: selection option denotes an item selectable in select list
<fieldset>: field set groups form inputs together
<legend>: field set legend names a field set
<button type="submit">: creates button on page
Form Inputs-
type='email': validates input as an email address
type='number': allows only numbers as input
type='color': offers a color-picker tool
type='date': restricts input to mm/dd/yyyy calendar
type='password': visually obscures user input
type='range' replaces input w/ a slider
type='tel' formats input as a phone number
type='url' valides input as a URL
Best Practices- use HTML 5 input types whenever possible, rendered as text boxes by browsers not supporting them, method="post" senstive data
Media-
Images- <img /> , src, alt,
Audio/Video- <audio> <video> links embedded audio/video files,
Attributes: controls(toggles playback controls on/off), autoplay: toggles auto playback, loop: auto replays media after it finishes
EX: <audio src="something.mp3" controls> Your browser doesn't support audio </audio> Text displays if audio can't play, by including multiple srcs you can reduce the chance of browsers not being able to play audio
EX: <audio controls>
        <source src="someting.mp3" type="audio/mp3" />
        <source src="someting.ogg" type"audio/ogg" /> </audio>

CSS- selector {
    declarations (property:value)
}
Selectors-
Element Selector p {}
class Selector .className {}
Id Selector #IdName {}
Universal Selector * {} applies to all elements on page
Multiple Elements p, h1, h2 {}
Parent-Child Selector div > p {} all p's that are immediate children of divs
Ancestor-Descendant Selector div p {} all p's that are children of divs
Sibling Selector h2 + p {} all immediate p's that follow h2 w/ same parent
Predecessor-Successor Selector div~p {} all p's that are siblings of div(more generic sibling selector)
Combining Selectors- p.red.tall all p's with class red/tall
Colors- Specifying color:
name(red), hex-value(#FF0000) FF=255Red 00Green 00Blue RGB(255,0,0) RGBA(255,0,0,1)transparency last value Hsl(360,100%,100%) Hue saturation and lightness hsla(360, 100%, 100%, 1) transparency
Background Property- background: color, size, position, image, repeat
Background size- contain(default value) cover
Background-repeat: repeat, no-repeat, repeat-y(repeats along y axis)
CSS shorthand- div { (can apply multiple properties in one line)
    background: url("bg.jpg") #0000FF top right;
}
Font properties
Font-Family- specifies font family name or generic name(fonts all browsers have access to) *{ font-family: 'Raleway', sans-serif;}
Generic Names: serif, sans-serif, monospace, cursive, fantasy; should always specify a generic name in case family doesn't load
Font-Variant: normal(default), small caps(uppercase but small)
Font-Style: normal(default), oblique, italic
Font-Weight: boldness of characters (accepts numeric/predefined)
100-900, or normal, lighter, bold, bolder
Text Properties
text-align: center, left, right, justify, justify-all(forces last line to be justified)
text-decoration: underline, overline, line-through, none (a tags have default text-decoration that you can override)
text-transform: controls capitlization of text; uperrcase, lowercase, capitalize, none
line-height: controls min height of space btw paragraphs; numerical(multiplier for normal line-height), length(mm, px, pt, em, etc), %, normal(defualt)
text-indent: nuerical, %, default(0)
vertical-align: controls vertical alignment of text relative to its parent; baseline, sub, super, text-top, text-bottom, middle, top, bottom, length, %
direction: specifies reading direction; ltr(left to right) rtl
letter spacing- normal, length
word spacing- normal, length, %
text-shadow- manipulatse shadow effects on text: color, x-offset, y-offset, blur-radius; or color at end

Table Properties-
Border, can manipulate color, style, thickness
Border-collapse, allows padding/margin calculation in borders width(seperate or collapse)
caption-side, specifies bottom or top for caption to be placed
border-spacing, controls spacing of borders btw cells (only works if border-collapse is seperate)
empty-cells, property to toggle display/hide of empty cells (show or hide)
table-layout, alter width of tbale based on content size or fixed widths

List Properties-
List-style-type: controls type of character used to enumerate list items,(letters, numbers)-> upper-alpha, lower-alpha, decimal
list-style-image: renders an image in place of bullet/alphanumeric values
list-style-position: specifies location to place label for list item (outside-defualt or inside) if you use border it'll be inside or outside border

Link Properties-
text-decorations:
links have 4 anchor states a:link, a:visited, a:hover, a:active(link default, visited when link has been clicked, however, mouse over link, active during mousedown state/active clicking)

Units of Measurement CSS
Express properties in terms of value(%, pixels, points)
Absolute Units- measurements based on length of unit and not another element
Relative Units- measurements based on dimensions of another element
em- relative to font size property, rem- relative to root element of page, ch- relative to width of 0 character, % based on parent element or browser's window depending on property
Controlling Height- if expressed in % height is based on parent element, can make body/html elements have height of 100% for child elements(div) to effectively express a % value; width always refers to window's length unlike height

Box Model- way for drawing(rendering) engine to layout and display elements
4 containers:
Margin- controls spacing from other elements
Border- color/outline for elements
Padding- controls space btw a border and content
Content

Positioning- specifies layout mechanism for elements
Absolute, Fixed, Relative, Static(default)
specify position (left, right, top, bottom)
EX: div{
    position: fixed;
    top: 0;
}
Relative position- sets element relative to its normal flow, best to specify left/top rather than right/bottom, also leave blank spaces where they would normally be
Absolute Positioning- sets element relative to its parent or document body if parent is positioned statically
Fixed Positioning- sets element relative to window, Fixed elements scroll w/ window
Z-Index Property- browsers render elements on top depending on position, highest get displayed over lower, 0 and - values are valid
Float - left right none allows text to wrap around, flexbox is better i'm sure
Overflow Property- specifies how to display content that falls outside of its container/parent (hidden, scroll, visible, auto)




*/
