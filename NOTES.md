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
