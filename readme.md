                                     ###  Question Part:
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?



                                      ###Answer Part :
(1)
getElementById : is use to select a single element from the DOM by its unique id.
getElementsByClassName : all elements that have a specific class name is selected by it.
querySelector : Selects the first element that matches a given CSS selector.

(2)
Firt I will create a new element.By seting its content, attributes, or classes then focus
on the selection of the parent element where it will go. Finally inserting the new element by
indroducing DOM manipulation methods.

(3)
When an event occurs on an element, it first runs on that element and then bubbles up to its parent elements.

(4)
Event Delegation is a technique use to attach a single event listener on a parent to handle events on its child elements. It is very useful because it saves memory, handles dynamic elements, and keeps code cleaner. 

(5)
preventDefault(): Stops the default browser action of an event.
stopPropagation(): Prevents the event from bubbling or propagating to ancestor elements.