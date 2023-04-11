# stack

LIFO-the last in, first out

Top - end of the stack
Base - start of the stack

methods

- push
  - This method adds a new element (or several elements) to
    the top of the stack
- pop
  - his method removes the top element from the stack. It also returns
    the removed element
- peek
  - This method returns the top element from the stack. The stack is not
    modified (it does not remove the element; it only returns the element for
    information purposes).
- isEmpty
  - This method returns true if the stack does not contain any
    elements, and false if the size of the stack is bigger than 0.
- clear
  - This method removes all the elements of the stack.
- size
  - This method returns the number of elements that the stack contains.
    It is similar to the length property of an array.

In the array-based version, we were able to add multiple elements to the Stack
class at the same time

In object-based Stack class we use a **count** property to help us keep
track of the size of the stack

|                       array-based                       | object-based                                             |
| :-----------------------------------------------------: | :------------------------------------------------------- |
|                     complexity O(n)                     | complexity O(1)                                          |
| dd multiple elements to the Stackclass at the same time |                                                          |
|                                                         | **count** property , keep track of the size of the stack |
