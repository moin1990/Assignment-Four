Q no 1. What is the difference between getElementById, getElementsByClassName and querySelector/querySelectorAll?

Answer: Difference between getElementByID, getElementByClassName and querySelector/querySelectorAll are given below:

    a. getElementById selects only one element by it's unique Id and returns one element object.

    b. getElementByClassName selects many elements by class name and returns with a live html collection.

    c. querySelector returns the first element that matches a CSS selector. On the other hand querySelectorAll returns with all matching elements as a static Node list.

Q no 2. How do you create and insert a new element into the DOM?

Answer: To create and insert a new element into the DOM, atfirst I use "document.createElement()" to create the element. then I set its content or attributes.Finally I insert it into the DOM using methods like "appendchild()" , "append()" or "prepend()" -on a selected parent element. This allows dynamic updates without reloading the page.

Q no 3. What is Event Bubbling? And how does it work?

Answer: Event Bubbling is a mechanism in the DOM where an event starts from the target element and then propagates upward through its parent elements until it reaches the root of the document.

When an event is triggered on an element, the browser first executes the event handler attached to that specific element. After that, the same event propagates step by step to its parent.Then granparent and continues upward until it reaches the document root.

This upward flow is called the bubbling phase. it allows parent elements to respond to events triggered on their child elements. If needed , the bubbling process can be stopped using "event.stopPropagation()".