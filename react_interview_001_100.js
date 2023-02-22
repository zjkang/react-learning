# https://github.com/sudheerj/reactjs-interview-questions#table-of-contents

1. What is React? 
React is an open-source front-end JavaScript library that is used for building user interfaces, especially for single-page applications. 
It is used for handling view layer for web and mobile apps.

----------------------------------------
2. What are the major features of React?
The major features of React are:

Uses JSX syntax, a syntax extension of JS that allows developers to write HTML in their JS code.
It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.
Supports server-side rendering.
Follows Unidirectional data flow or data binding.
Uses reusable/composable UI components to develop the view.

----------------------------------------
3. What is JSX?
JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the 
React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax.

```js
export default function App() {
  return (
    <div>
      <h1>{"Welcome to React world!"}</h1>
    </div>
  );
}

----------------------------------------
5. How to create components in React?
Function Components: This is the simplest way to create a component. 
Those are pure JavaScript functions that accept props object as the first parameter and return React elements:

function Greeting({ message }) {
  return <h1>{`Hello, ${message}`}</h1>;
}
Class Components: You can also use ES6 class to define a component. The above function component can be written as:

class Greeting extends React.Component {
  render() {
    return <h1>{`Hello, ${this.props.message}`}</h1>;
  }
}

----------------------------------------
7. What are Pure Components? 
https://juejin.cn/post/6844904002652471309
https://juejin.cn/post/6844903480369512455

React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() method for you. 
When props or state changes, PureComponent will do a shallow comparison on both props and state. 
Component on the other hand won't compare current props and state to next out of the box.
Thus, the component will re-render by default whenever shouldComponentUpdate is called. 
In functional components we use React.memo() API. React.memo() is a higher-order component. 
It takes a React component as its first argument and returns a special type of React component that allows the renderer to 
render the component while memoizing the output. Therefore, if the component’s props are shallowly equal, 
the React.memo() component will bail out the updates.

----------------------------------------
8. What is state in React?
State of a component is an object that holds some information that may change over the lifetime of the component. 
We should always try to make our state as simple as possible and minimize the number of stateful components.

Let's create a user component with message state,

import React, { useState } from "react";

function User() {
  const [message, setMessage] = useState("Welcome to React world");

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

----------------------------------------
9. What are props in React?
Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a 
naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child component.

The primary purpose of props in React is to provide following component functionality:

Pass custom data to your component.
Trigger state changes.
Use via this.props.reactProp inside component's render() method.

import React from "react";
import ReactDOM from "react-dom";

const ChildComponent = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  );
};

const ParentComponent = () => {
  return (
    <div>
      <ChildComponent name="John" age="30" />
      <ChildComponent name="Mary" age="25" />
    </div>
  );
};

-----------------------------------------
11. Why should we not update the state directly?
If you try to update the state directly then it won't re-render the component.

//Wrong
this.state.message = "Hello world";
Instead use setState() method. It schedules an update to a component's state object. 
When state changes, the component responds by re-rendering.

//Correct
this.setState({ message: "Hello World" });

-----------------------------------------
15. How to pass a parameter to an event handler or callback?

You can use an arrow function to wrap around an event handler and pass parameters:

<button onClick={() => this.handleClick(id)} />
This is an equivalent to calling .bind:

<button onClick={this.handleClick.bind(this, id)} />
Apart from these two approaches, you can also pass arguments to a function which is defined as arrow function

<button onClick={this.handleClick(id)} />;
handleClick = (id) => () => {
  console.log("Hello, your ticket number is", id);
};

------------------------------------------
18. What is "key" prop and what is the benefit of using it in arrays of elements?

A key is a special string attribute you should include when creating arrays of elements. 
Key prop helps React identify which items have changed, are added, or are removed.

Keys should be unique among its siblings. Most often we use ID from our data as key:

const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort:

const todoItems = todos.map((todo, index) => (
  <li key={index}>{todo.text}</li>
));

-----------------------------------------
24. What is Virtual DOM?

The Virtual DOM (VDOM) is an in-memory representation of Real DOM. 
The representation of a UI is kept in memory and synced with the "real" DOM. 
It's a step that happens between the render function being called and the displaying of elements on the screen. 
This entire process is called reconciliation.

------------------------------------------
25. How Virtual DOM works?

1. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.
2. Then the difference between the previous DOM representation and the new one is calculated.
3. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.

-----------------------------------------
33. What are the different phases of component lifecycle?

Mounting: The component is ready to mount in the browser DOM. This phase covers initialization from constructor(), 
getDerivedStateFromProps(), render(), and componentDidMount() lifecycle methods.

Updating: In this phase, the component gets updated in two ways, sending the new props and updating the state either from setState() or forceUpdate(). 
This phase covers getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate() and componentDidUpdate() lifecycle methods.

Unmounting: In this last phase, the component is not needed and gets unmounted from the browser DOM. 
This phase includes componentWillUnmount() lifecycle method.

-----------------------------------------
34. What are the lifecycle methods of React?

Before React 16.3

componentWillMount: Executed before rendering and is used for App level configuration in your root component.
componentDidMount: Executed after first rendering and here all AJAX requests, DOM or state updates, and set up event listeners should occur.
componentWillReceiveProps: Executed when particular prop updates to trigger state transitions.
shouldComponentUpdate: Determines if the component will be updated or not. By default it returns true. If you are sure that the component doesn't need to render after state or props are updated, you can return false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives new prop.
componentWillUpdate: Executed before re-rendering the component when there are props & state changes confirmed by shouldComponentUpdate() which returns true.
componentDidUpdate: Mostly it is used to update the DOM in response to prop or state changes.
componentWillUnmount: It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.
React 16.3+

getDerivedStateFromProps: Invoked right before calling render() and is invoked on every render. This exists for rare use cases where you need a derived state. Worth reading if you need derived state.
componentDidMount: Executed after first rendering and where all AJAX requests, DOM or state updates, and set up event listeners should occur.
shouldComponentUpdate: Determines if the component will be updated or not. By default, it returns true. If you are sure that the component doesn't need to render after the state or props are updated, you can return a false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives a new prop.
getSnapshotBeforeUpdate: Executed right before rendered output is committed to the DOM. Any value returned by this will be passed into componentDidUpdate(). This is useful to capture information from the DOM i.e. scroll position.
componentDidUpdate: Mostly it is used to update the DOM in response to prop or state changes. This will not fire if shouldComponentUpdate() returns false.
componentWillUnmount It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.

-------------------------------------
37. What is context?

Context provides a way to pass data through the component tree without having to pass props down manually at every level.
For example, authenticated users, locale preferences, UI themes need to be accessed in the application by many components.
const { Provider, Consumer } = React.createContext(defaultValue);

-------------------------------------
40. What is the purpose of using super constructor with props argument?

A child class constructor cannot make use of this reference until the super() method has been called. 
The same applies to ES6 sub-classes as well. The main reason for passing props parameter to super() 
call is to access this.props in your child constructors.

-------------------------------------
52. What are the advantages of React?

Increases the application's performance with Virtual DOM.
JSX makes code easy to read and write.
It renders both on client and server side (SSR).
Easy to integrate with frameworks (Angular, Backbone) since it is only a view library.
Easy to write unit and integration tests with tools such as Jest.

-------------------------------------
56. What are the recommended ways for static type checking?

Normally we use PropTypes library (React.PropTypes moved to a prop-types package since React v15.5) for type checking in the React applications. 
For large code bases, it is recommended to use static type checkers such as Flow or TypeScript, 
that perform type checking at compile time and provide auto-completion features.

------------------------------------
63. What will happen if you use setState() in constructor?

When you use setState(), then apart from assigning to the object state React also re-renders the component and all its children. 
You would get error like this: Can only update a mounted or mounting component. 
So we need to use this.state to initialize variables inside constructor.

------------------------------------
65. Is it good to use setState() in componentWillMount() method?

Yes, it is safe to use setState() inside componentWillMount() method. But at the same it is recommended to avoid async initialization in componentWillMount() lifecycle method. componentWillMount() is invoked immediately before mounting occurs. It is called before render(), therefore setting state in this method will not trigger a re-render. Avoid introducing any side-effects or subscriptions in this method. We need to make sure async calls for component initialization happened in componentDidMount() instead of componentWillMount().

componentDidMount() {
  axios.get(`api/todos`)
    .then((result) => {
      this.setState({
        messages: [...result.data]
      })
    })
}

-----------------------------------
82. Why function is preferred over object for setState()?
React may batch multiple setState() calls into a single update for performance. 
Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

-------------------------------------
96. What is the difference between React and ReactDOM?
The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. 
You can think of these as the isomorphic or universal helpers that you need to build components. 
The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with 
ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().

--------------------------------------
100. How to re-render the view when the browser is resized?
You can listen to the resize event in componentDidMount() and then update the dimensions (width and height). 
You should remove the listener in componentWillUnmount() method.

class WindowDimensions extends React.Component {
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  render() {
    return (
      <span>
        {this.state.width} x {this.state.height}
      </span>
    );
  }
}

-------------------------------------




















