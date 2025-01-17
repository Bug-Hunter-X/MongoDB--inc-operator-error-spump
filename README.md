# MongoDB $inc Operator Error

This repository demonstrates an incorrect usage of MongoDB's `$inc` operator and provides a corrected solution.

The original code attempts to increment a field with a string value, resulting in an error. The corrected code shows how to properly use `$inc` with a numerical value.

## Bug
The bug lies in the use of the `$inc` operator with a string value instead of a number.  MongoDB's `$inc` operator is designed to increment a numerical value, not a string. Attempting to use it with a string will result in an error.

## Solution
The solution involves modifying the update operation to use a numerical value for the increment.
