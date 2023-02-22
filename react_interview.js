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
7. What are Pure Components? (https://juejin.cn/post/6844904002652471309)
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






