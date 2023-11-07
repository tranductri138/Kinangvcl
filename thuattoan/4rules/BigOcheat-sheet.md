# Big O Cheat Sheet:
1. Big OsO(1) Constant- no loops
2. O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
3. O(n) Linear- for loops, while loops through n items
4. O(n log(n)) Log Linear- usually sorting operations
5. O(n^2) Quadratic- every element in a collection needs to be compared to ever other element.
### Two nested loops
1. O(2^n) Exponential- recursive algorithms that solves a problem of size N
2. O(n!) Factorial- you are adding a loop for every element
3. Iterating through half a collection is still O(n)
### Two separate collections: O(a * b)
-What can cause time in a function?-
1. Operations (+, -, *, /)
2. Comparisons (<, >, ==)
3. Looping (for, while)
4. Outside Function call (function())
### -Rule BookRule 1: Always worst Case
1. Rule 2: Remove Constants
2. Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
3. O(a*b)
4. "+" for steps in order
5. "*" for nested steps
  Rule 4: Drop Non-dominant terms

#### -What causes Space complexity?-
####  Variables
#### Data Structures
#### Function Call
#### Allocations


## link bigO cheat sheet
https://www.bigocheatsheet.com/
