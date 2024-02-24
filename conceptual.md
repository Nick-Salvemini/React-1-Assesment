### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  It is a front-end framework that uses Javascript.  It allows developers to make more modular applications with reusable components.

- What is Babel?
  It is a javascript compiler that converts newer JS in a way that any browser can utilize. It is also crucial for transpiling JSX into Javascript. 

- What is JSX?
  It is a syntax that lets you write code very similar to HTML in Javascript, which is then traspiled by Babel, so that it is understood as Javascript and renders as HTML.

- How is a Component created in React?
  Components are usually placed in their own dedicated file and are written as functions (or classes), which can be exported and then imported by other components of the app so that they can be rendered as HTML.

- What are some difference between state and props?
  A prop is a property that can be passed into a component when it is called, similar to an argument passed into a function.  State is an object which can be created using the useState hook and can be used to track and update a value in a component.

- What does "downward data flow" refer to in React?
  It's the idea that a piece of state should be initialized in higher level (parents) components and be passed down to lower level (child) components as props.

- What is a controlled component?
  A form component that uses state to control the input. It using an onChange function to keep the value of the input and the state updated.  

- What is an uncontrolled component?
  A form component where the value is handled by the DOM.  It uses refs to retrieve the values when needed instead of storing them in a state.

- What is the purpose of the `key` prop when rendering a list of components?
  A key is an ID that is given to each instance of a rendered component, which should be unique to that instance. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  It can cause performance issues due to re-rendering unnecessarily.  It can also risk potentially having duplicate keys for multiple components.

- Describe useEffect.  What use cases is it used for in React components?
  It is a built in hook that allows you to assign a callback function that is executed at certain times, depending on the arguments passed to it.  It can be used to execute the function every time a certain dependency is changed or only on the initial rendered. It is often used for fetching data from and API, manipulating the DOM, or can be used to run clean up functions on things like eventListeners.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  It stores a mutable value that persists across re-renders and does not cause re-renders.  

- When would you use a ref? When wouldn't you use one?
  You would use it when you want to access a DOM element or set up/clear a timer. Avoid using it for managing data that would be better handled with state.

- What is a custom hook in React? When would you want to write one?
  I custom hook is a hook that is written manually by the developer.  It is best used when you are rewriting chunks of code across multiple components, such as making API calls.  