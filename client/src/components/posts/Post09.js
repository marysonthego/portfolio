import React from 'react';
import { useLocation } from "react-router-dom";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {xonokai} from 'react-syntax-highlighter/dist/esm/styles/prism';

export function Post09() {
  const location = useLocation();

  const Created = "September 09, 2021";
  let TopPic = "media/python.png";
  let Title = "90% of Python3";

  if (location.pathname.toString() === "/bloglist") {
    return (
      <span>
        <span className="blog">{Title}</span>
        <div className="blogListIemDate">{Created}</div>
      </span>
    );
  }

  let code1 = `marys@G7-7790 MINGW64 /c/users/marys/desktop/python
$ python3

Python 3.10.4 (tags/v3.10.4:9d38120, Mar 23 2022, 23:13:41) [MSC v.1929 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.

>>> print("This is a test")
This is a test
>>>
>>> help()

Welcome to Python 3.10's help utility!

If this is your first time using Python, you should definitely check out
the tutorial on the internet at https://docs.python.org/3.10/tutorial/.

Enter the name of any module, keyword, or topic to get help on writing
Python programs and using Python modules.  To quit this help utility and
return to the interpreter, just type "quit".

To get a list of available modules, keywords, symbols, or topics, type
"modules", "keywords", "symbols", or "topics".  Each module also comes
with a one-line summary of what it does; to list the modules whose name
or summary contain a given string such as "spam", type "modules spam".

help> topics

Here is a list of available topics.  Enter any topic name to get more help.

ASSERTION           DELETION            LOOPING             SHIFTING
ASSIGNMENT          DICTIONARIES        MAPPINGMETHODS      SLICINGS
ATTRIBUTEMETHODS    DICTIONARYLITERALS  MAPPINGS            SPECIALATTRIBUTES
ATTRIBUTES          DYNAMICFEATURES     METHODS             SPECIALIDENTIFIERS
AUGMENTEDASSIGNMENT ELLIPSIS            MODULES             SPECIALMETHODS
BASICMETHODS        EXCEPTIONS          NAMESPACES          STRINGMETHODS
BINARY              EXECUTION           NONE                STRINGS
BITWISE             EXPRESSIONS         NUMBERMETHODS       SUBSCRIPTS
BOOLEAN             FLOAT               NUMBERS             TRACEBACKS
CALLABLEMETHODS     FORMATTING          OBJECTS             TRUTHVALUE
CALLS               FRAMEOBJECTS        OPERATORS           TUPLELITERALS
CLASSES             FRAMES              PACKAGES            TUPLES
CODEOBJECTS         FUNCTIONS           POWER               TYPEOBJECTS
COMPARISON          IDENTIFIERS         PRECEDENCE          TYPES
COMPLEX             IMPORTING           PRIVATENAMES        UNARY
CONDITIONAL         INTEGER             RETURNING           UNICODE
CONTEXTMANAGERS     LISTLITERALS        SCOPING
CONVERSIONS         LISTS               SEQUENCEMETHODS
DEBUGGING           LITERALS            SEQUENCES

help> quit

You are now leaving help and returning to the Python interpreter.
If you want to ask for help on a particular object directly from the
interpreter, you can type "help(object)".  Executing "help('string')"
has the same effect as typing a particular string at the help> prompt.
>>> quit
Use quit() or Ctrl-Z plus Return to exit
>>> ^Z`;

  let code2 = `marys@G7-7790 MINGW64 /c/users/marys/desktop/python
$ python3 hello.py

Hello Python!

marys@G7-7790 MINGW64 /c/users/marys/desktop/python
$`;

let code3 = `>>> print("This is how to print a line")
This is how to print a line
>>> x = 1
>>> if x == 1:
... print("x is 1")
  File "<stdin>", line 2
    print("x is 1")
    ^
IndentationError: expected an indented block after 'if' statement on line 1
>>> print("Indent 4 spaces inside a block")
Indent 4 spaces inside a block
>>> x = 1
>>> if x == 1:
...     print("x is 1")
...
x is 1
>>>`;
let code4 = `>>> myint = 7
>>> print(myint)
7
>>> myfloat=7.7
>>> print(myfloat)
7.7
>>> number = 1 + 2 * 3 / 4.0
>>> print(number)
2.5
>>>
remainder = 11 % 3
>>> print("11 modulo 3 is %d" % remainder)
11 modulo 3 is 2
>>>
>>> squared = 7 ** 2
>>> cubed = 2 ** 3
>>> print("7 ** 2 = %d" % squared)
7 ** 2 = 49
>>> print("2 ** 3 = %d" %cubed)
2 ** 3 = 8
>>>
>>> mystring = 'hello'
>>> print(mystring)
hello
>>> mystring = "Apostrophes''' inside double-quotes are fine"
>>> print(mystring)
Apostrophes''' inside double-quotes are fine
>>>`;

  let code5 = `>>> one = 1
>>> two = 2
>>> three = one + two
>>> print(three)
3
>>>
>>> word1 = "Hello"
>>> word2 = "world"
>>> helloworld = word1 + " " + word2
>>> print(helloworld)
Hello world
>>>
>>> a, b = 3, 4
>>> print(a, b)
3 4
>>>
>>> mystring = "hello"
>>> myfloat = 10.0
>>> myint = 20
>>>
>>> if mystring == "hello":
...     print("String: %s" % mystring)
...
String: hello
>>>
>>> if isinstance(myfloat, float) and myfloat == 10.0:
...     print("Float: %f" % myfloat)
...
Float: 10.000000
>>>
>>> if isinstance(myint, int) and myint == 20:
...     print("Integer: %d" % myint)
...
Integer: 20
>>>
`;

let code6 = `>>>
>>> mylist = []
>>> mylist.append(1)
>>> mylist.append(2)
>>> mylist.append(3)
>>>
>>> print(mylist[0])
1
>>> print(mylist[1])
2
>>> print(mylist[2])
3
>>>
>>> for x in mylist:
...     print(x)
...
1
2
3
>>>
>>> numbers = []
>>> numbers.append(1)
>>> numbers.append(2)
>>> numbers.append(3)
>>>
>>> strings = []
>>> strings.append("hello")
>>> strings.append("world")
>>>
>>> names = ["John", "Eric", "Jessica"]
>>>
>>> second_name = names[1]
>>>
>>> print(numbers)
[1, 2, 3]
>>> print(strings)
['hello', 'world']
>>> print("The second name on the names list is %s" % second_name)
The second name on the names list is Eric
>>>

>>> lotsofhellos = "hello " * 10
>>> print(lotsofhellos)
hello hello hello hello hello hello hello hello hello hello
>>>
>>> even_numbers = [2,4,6,8]
>>> odd_numbers = [1,3,5,7]
>>> all_numbers = odd_numbers + even_numbers
>>> print(all_numbers)
[1, 3, 5, 7, 2, 4, 6, 8]
>>>
>>> print([1,2,3] * 3)
[1, 2, 3, 1, 2, 3, 1, 2, 3]
>>>`;

let code7 = `>>>
>>> x = object()
>>> y = object()
>>>
>>> x_list = [x] * 10
>>> y_list = [y] * 10
>>> big_list = x_list + y_list
>>>
>>> print("x_list contains %d objects" % len(x_list))
x_list contains 10 objects
>>>
>>> print("y_list contains %d objects" % len(y_list))
y_list contains 10 objects
>>>
>>> print("big_list contains %d objects" % len(big_list))
big_list contains 20 objects
>>>
>>> if x_list.count(x) == 10 and y_list.count(y) == 10:
...     print("Almost there...")
...
Almost there...
>>>
>>> if big_list.count(x) == 10 and big_list.count(y) == 10:
...     print("Great!")
...
Great!
>>>`;

let code8 = `>>>
>>> name = "John"
>>> print("Hello, %s!" % name)
Hello, John!
>>>
>>> name = "John"
>>> age = 23
>>> print("%s is %d years old." % (name, age))
John is 23 years old.
>>>
>>> mylist = [1,2,3]
>>> print("A list: %s" % mylist)
A list: [1, 2, 3]
>>>
>>> # %s - String (or any object with a string representation, like numbers)
>>>
>>> # %d - Integers
>>>
>>> # %f - Floating point numbers
>>>
>>> # %.<number of digits>f - Floating point numbers with a fixed amount of digits to the right of the dot.
>>>
>>> # %x/%X - Integers in hex representation (lowercase/uppercase)
>>>
>>> data = ("John", "Doe", 53.44)
>>> format_string = "Hello %s %s. Your current balance is $%.2f"
>>> print(format_string % data)
Hello John Doe. Your current balance is $53.44
>>>
>>> astring = "Hello world!"
>>> print("single quotes are ' '")
single quotes are ' '
>>> print(len(astring))
12
>>>
>>> astring = "Hello world!"
>>> print(astring.count("l"))
3
>>>
>>>
>>> astring = "Hello world!"
>>> print(astring.index("o"))
4
>>>
>>> astring = "Hello world!"
>>> print(astring[3:7])
lo w
>>>
>>> astring = "Hello world!"
>>> print(astring[3:7:2])
l
>>>
>>> astring = "Hello world!"
>>> print(astring[3:7])
lo w
>>> print(astring[3:7:1])
lo w
>>>
>>> astring = "Hello world!"
>>> print(astring[::-1])
!dlrow olleH
>>>
>>> astring = "Hello world!"
>>> print(astring.upper())
HELLO WORLD!
>>> print(astring.lower())
hello world!
>>>
>>> astring = "Hello world!"
>>> print(astring.startswith("Hello"))
True
>>> print(astring.endswith("asdfasdfasdf"))
False
>>>
>>> astring = "Hello world!"
>>> afewwords = astring.split(" ")
>>> print(afewwords)
['Hello', 'world!']
>>>
>>> s = "Strings are awesome!"
>>> # Length should be 20
>>> print("Length of s = %d" % len(s))
Length of s = 20
>>>
>>> # First occurrence of "a" should be at index 8
>>> print("The first occurrence of the letter a = %d" % s.index("a"))
The first occurrence of the letter a = 8
>>>
>>> # Number of a's should be 2
>>> print("a occurs %d times" % s.count("a"))
a occurs 2 times
>>>
>>> # Slicing the string into bits
>>>
>>> print("The first five characters are '%s'" % s[:5])
>>># Start to 5
The first five characters are 'Strin'
>>>
>>> print("The next five characters are '%s'" % s[5:10])
>>># 5 to 10
The next five characters are 'gs ar'
>>>
>>> print("The thirteenth character is '%s'" % s[12])
>>># Just number 12
The thirteenth character is 'a'
>>>
>>> print("The characters with odd index are '%s'" %s[1::2])
>>>#(0-based indexing)
The characters with odd index are 'tig r wsm!'
>>>
>>> print("The last five characters are '%s'" % s[-5:])
>>># 5th-from-last to end
The last five characters are 'some!'
>>>
>>> # Convert everything to uppercase
>>> print("String in uppercase: %s" % s.upper())
String in uppercase: STRINGS ARE AWESOME!
>>>
>>> # Convert everything to lowercase
>>> print("String in lowercase: %s" % s.lower())
String in lowercase: strings are awesome!
>>>
>>> # Check how a string starts
>>> if s.startswith("Str"):
...     print("String starts with 'Str'. Good!")
...
String starts with 'Str'. Good!
>>>
>>> # Check how a string ends
>>> if s.endswith("ome!"):
...     print("String ends with 'ome!'. Good!")
...
String ends with 'ome!'. Good!
>>>
>>> # Split the string into three separate strings,
>>> # each containing only a word
>>> print("Split the words of the string: %s" % s.split(" "))
Split the words of the string: ['Strings', 'are', 'awesome!']
>>>`;

let code9 = `>>> x = 2
>>> print(x == 2) # prints out True
True
>>> print(x == 3) # prints out False
False
>>> print(x < 3) # prints out True
True
>>>
>>> name = "John"
>>> age = 23
>>> if name == "John" and age == 23:
...     print("Your name is John, and you are also 23 years old.")
...
Your name is John, and you are also 23 years old.
>>>
>>> if name == "John" or name == "Rick":
...     print("Your name is either John or Rick.")
...
Your name is either John or Rick.
>>>
>>> statement = False
>>> another_statement = True
>>> if statement is True:
...     # do something
...     pass
... elif another_statement is True: # else if
...     # do something else
...     pass
... else:
...     # do another thing
...     pass
...
>>>
>>> # Unlike the double equals operator "==", the "is" operator
>>> does not match the values of the variables, but the instances themselves.
>>> x = [1,2,3]
>>> y = [1,2,3]
>>> print(x == y) # Prints out True
True
>>> print(x is y) # Prints out False
False
>>>
>>> x = [1,2,3]
>>> y = [1,2,3]
>>> print(x == y) # Prints out True
True
>>> print(x is y) # Prints out False
False
>>>
>>> print(not False) # Prints out True
True
>>> print((not False) == (False)) # Prints out False
False
>>>
>>>
>>> number = 16
>>> second_number = 0
>>> first_array = [1,2,3]
>>> second_array = [1,2]
>>>
>>> if number > 15:
...     print("1")
...
1
>>> if first_array:
...     print("2")
...
2
>>> if len(second_array) == 2:
...     print("3")
...
3
>>> if len(first_array) + len(second_array) == 5:
...     print("4")
...
4
>>> if first_array and first_array[0] == 1:
...     print("5")
...
5
>>> if not second_number:
...     print("6")
...
6
>>>`;

let code10 = `>>> # for loop
>>> primes = [2, 3, 5, 7]
>>> for prime in primes:
...     print(prime)
... # For loops can iterate over a sequence of numbers using the "range"
#and "xrange" functions. The difference between range and xrange is
#that the range function returns a new list with numbers of
#that specified range, whereas xrange returns an iterator,
#which is more efficient. (Python 3 uses the range function,
#which acts like xrange). Note that the range function is zero based.
...
2
3
5
7
>>> # Prints out the numbers 0,1,2,3,4
>>> for x in range(5):
...     print(x)
...
0
1
2
3
4
>>> # Prints out 3,4,5
>>> for x in range(3, 6):
...     print(x)
...
3
4
5
>>> # Prints out 3,5,7
>>> for x in range(3, 8, 2):
...     print(x)
...
3
5
7
>>>`;

let code11 = `>>> # While loops repeat as long as a certain boolean condition is met.
>>> # Prints out 0,1,2,3,4
>>> count = 0
>>> while count < 5:
...     print(count)
...     count += 1  # This is the same as count = count + 1
...
0
1
2
3
4
>>> # break is used to exit a for loop or a while loop
>>>
>>> # continue is used to skip the current block, and return to
# the "for" or "while" statement.
>>>
>>> # Prints out 0,1,2,3,4
>>> count = 0
>>> while True:
...     print(count)
...     count += 1
...     if count >= 5:
...         break
...
0
1
2
3
4
>>> # Prints out only odd numbers - 1,3,5,7,9
>>> for x in range(10):
...     # Check if x is even
...     if x % 2 == 0:
...         continue
...     print(x)
...
1
3
5
7
9
>>># When the loop condition of "for" or "while" statement fails
#then code part in "else" is executed. If a break statement is
#executed inside the for loop then the "else" part is skipped.
#Note that the "else" part is executed even if there is
#a continue statement.
>>>
>>># Prints out 0,1,2,3,4 and then it prints "count value reached 5"
>>>
>>> count=0
>>> while(count<5):
...     print(count)
...     count +=1
... else:
...     print("count value reached %d" %(count))
...
0
1
2
3
4
count value reached 5
>>> # Prints out 1,2,3,4
>>> for i in range(1, 10):
...     if(i%5==0):
...         break
...     print(i)
... else:
...     print("this is not printed because for loop is terminated because of break but not due to fail in condition")
...
1
2
3
4
>>> # Loop through and print out all even numbers from the numbers list
#in the same order they are received. Don't print any numbers
#that come after 237 in the sequence.
>>> numbers = [
...     951, 402, 984, 651, 360, 69, 408, 319, 601, 485, 980, 507, 725, 547, 544,
...     615, 83, 165, 141, 501, 263, 617, 865, 575, 219, 390, 984, 592, 236, 105, 942, 941,
...     386, 462, 47, 418, 907, 344, 236, 375, 823, 566, 597, 978, 328, 615, 953, 345,
...     399, 162, 758, 219, 918, 237, 412, 566, 826, 248, 866, 950, 626, 949, 687, 217,
...     815, 67, 104, 58, 512, 24, 892, 894, 767, 553, 81, 379, 843, 831, 445, 742, 717,
...     958, 609, 842, 451, 688, 753, 854, 685, 93, 857, 440, 380, 126, 721, 328, 753, 470,
...     743, 527
... ]
>>>
>>> # your code goes here
>>> for number in numbers:
...     if number == 237:
...         break
...     if number % 2 == 1:
...         continue
...     print(number)
...
402
984
360
408
980
544
390
984
592
236
942
386
462
418
344
236
566
978
328
162
758
918
>>>`;

let code12 = `# Functions in python are defined using the block keyword "def", followed with the function's name as the block's name.
>>>
>>> def my_function():
...     print("Hello From My Function!")
...
>>> def my_function_with_args(username, greeting):
...     print("Hello, %s , From My Function!, I wish you %s"%(username, greeting))
...
>>>
>>> def sum_two_numbers(a, b):
...     return a + b
...
>>> # print(a simple greeting)
>>> my_function()
Hello From My Function!
>>>
>>> #prints - "Hello, John Doe, From My Function!, I wish you a great year!"
>>> my_function_with_args("John Doe", "a great year!")
Hello, John Doe, From My Function!, I wish you a great year!
>>>
>>> # after this line x will hold the value 3!
>>> x = sum_two_numbers(1,2)
>>>
>>> def list_benefits():
...     return "More organized code", "More readable code", "Easier code reuse", "Share and connect code together"
...
>>>
>>>
>>> # Modify this function to concatenate to each benefit - " is a benefit of functions!"
>>> def build_sentence(benefit):
...     return "%s is a benefit of functions!" % benefit
...
>>>
>>> def name_the_benefits_of_functions():
...     list_of_benefits = list_benefits()
...     for benefit in list_of_benefits:
...         print(build_sentence(benefit))
...
>>> name_the_benefits_of_functions()
More organized code is a benefit of functions!
More readable code is a benefit of functions!
Easier code reuse is a benefit of functions!
Share and connect code together is a benefit of functions!
>>>`;

let code13 = `line 423 in script.py`;

  let Section1 = (
    <div>
      <h5 className="subsub">
        Run Python3 from the command line, get help, and quit:
      </h5>
      <p className="p-text">
        Enter <code>python3</code> at a command prompt
      </p>
      <p className="p-text">
        The python prompt looks like this: <code>&gt;&gt;&gt;</code>
      </p>
      <p className="p-text">
        Type <code>help()</code> to get module or keyword help
      </p>
      <p className="p-text">
        Leave the help subsystem by typing <code>quit</code> at the <code>help&gt;</code> prompt
      </p>
      <p className="p-text">
        Leave the python3 interpreter by typing <code>quit()</code> or <code>ctrl-Z enter</code>
      </p>
      <SyntaxHighlighter
          language="javascript"
          style={xonokai}
        >
          {code1}
        </SyntaxHighlighter>
        <h5 className="subsub">
        Run a Python script file from the command line:
        </h5>
      <SyntaxHighlighter
          language="javascript"
          style={xonokai}
        >
          {code2}
        </SyntaxHighlighter>
      <h5 className="subsub">Indent code blocks with <code>tab</code> or <code>4 spaces</code> not 2 spaces!</h5>
      <SyntaxHighlighter
          language="python"
          style={xonokai}
        >
          {code3}
        </SyntaxHighlighter>

      <h5 className="subsub">int, float, string, apostrophe</h5>

      <SyntaxHighlighter
          language="bash"
          style={xonokai}
        >
          {code4}
        </SyntaxHighlighter >
        <h5 className="subsub">Variables</h5>

      <SyntaxHighlighter
          language="bash"
          style={xonokai}
        >
        {code5}
        </SyntaxHighlighter >
        <h5 className="subsub">Lists and print multiples</h5>
        <SyntaxHighlighter id="step2"
          language="bash"
          style={xonokai}
        >
        {code6}
        </SyntaxHighlighter >
        <h5 className="subsub">Objects</h5>
        <SyntaxHighlighter
          language="bash"
          style={xonokai}
        >
        {code7}
        </SyntaxHighlighter >
        <h5 className="subsub">Print formats</h5>
        <SyntaxHighlighter
          language="bash"
          style={xonokai}
        >
        {code8}
        </SyntaxHighlighter >
        <h5 className="subsub">Conditionals</h5>
        <SyntaxHighlighter
          language="bash"
          style={xonokai}
        >
        {code9}
        </SyntaxHighlighter >
        <h5 className="subsub">For Loops</h5>
        <SyntaxHighlighter
          language="bash"
          style={xonokai}
        >
        {code10}
        </SyntaxHighlighter >
        <h5 className="subsub">While Loops, Break, and Continue</h5>
        <SyntaxHighlighter
          language="bash"
          style={xonokai}
        >
        {code11}
        </SyntaxHighlighter >
        <h5 className="subsub">Functions</h5>
        <SyntaxHighlighter
          language="bash"
          style={xonokai}
        >
        {code12}
        </SyntaxHighlighter >
        <h5 className="subsub">Classes</h5>
        <SyntaxHighlighter
          language="bash"
          style={xonokai}
        >
        {code13}
        </SyntaxHighlighter >
    </div>
  );
  return (
    <div className="post-wrapper post">
      <div className="post-img-top">
        <img src={TopPic} alt="Post" />
      </div>
      <h3 className="post-title text-center">{Title}</h3>
      <div className="sec01">{Section1}</div>
    </div>
  );
};
