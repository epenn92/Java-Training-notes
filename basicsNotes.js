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
Assembly- used by processor(CPU) to generate binary
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

Librarys: utilities written to perform complex work w/ a simplier API (JQuery, JDBC Drivers)
Frameworks: Larger utilities designed to run code for you, write code specific for the framework which makes tasks easier, (Spring Java framework)
Libraries much more flexible than frameworks

Git version control tool- can think of it as taking snapshots when you stage changes/commit you're changing your local repo then when you push you're establishing changes to the remote repo everyone is connected to;
Master/Main
Branch 1
Branch 2

Git clone- grab a remote repo and make your own local copy
Team workflow for git with teams is usually git add, git pull so you don't have any merge conflicts locally first b4 you push to a remote repository shared by team members, if you push without verifying you could cause issues w/ team members then have to revert etc


VIM- press i to make changes (insert mode) similar to nano, emac
VIM is also modal can switch between edit/save
:wq (write quit)
*/