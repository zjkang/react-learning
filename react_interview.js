# https://github.com/sudheerj/reactjs-interview-questions#table-of-contents

1. What is React? 
React is an open-source front-end JavaScript library that is used for building user interfaces, especially for single-page applications. 
It is used for handling view layer for web and mobile apps.

2. What are the major features of React?
The major features of React are:

Uses JSX syntax, a syntax extension of JS that allows developers to write HTML in their JS code.
It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.
Supports server-side rendering.
Follows Unidirectional data flow or data binding.
Uses reusable/composable UI components to develop the view.

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

