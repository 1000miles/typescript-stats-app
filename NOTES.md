# Notes

1. Any built-in standard library of node must be installed with typed definition file.
  - `npm i @types/node`
2. fs Encoding:
  - If not specified as `utf-8` the nodeJS file system returns `buffer` per default.
3. Enums
  - follow near-identicall syntax rules as normal objects.
  - creates an object with the same keys and values when convete from TS to JS.
  - primary goal is to signal other engineers that these are all closely related values.
  - use whenever we have a small fixe set of values that are all closely related and known at compile time.
4. Tuples
  - when using a tuple to represent object values the order is important.
  - Define a new type as a tuple (structure).
5. Abstract Classes
  - TypeScript allows to define abstract classes using the keyword `abstract` for mainly inheritancee where other classes may derive from.
  - Instance classes can not be created from abstract classes.
  - An abstract class typically includes one or more abstract methods or property declarations. A class that extends another abstract class must define all abstract methods.
6. Generics
  - Like function arguments, but for types in class/function definitions.
  - Aallows us to ddefine the type of a property/argument/return value at a future point.
  - Used heavily when writing reusable code.
