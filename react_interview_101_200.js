102. How to listen to state changes?
The componentDidUpdate lifecycle method will be called when state changes. 
You can compare provided state and props values with current state and props to determine if something meaningful changed.
componentDidUpdate(object prevProps, object prevState)

-----------------------------------
106 The React philosophy is that props should be immutable and top-down. 
This means that a parent can send any prop values to a child, but the child can't modify received props.

-----------------------------------
107 How to focus an input element on page load?
Functional component using hook
  
```javascript
import React, { useEffect, useRef } from "react";

const App = () => {
  const inputElRef = useRef(null);

  useEffect(() => {
    inputElRef.current.focus();
  }, []);

  return (
    <div>
      <input defaultValue={"Won't focus"} />
      <input ref={inputElRef} defaultValue={"Will focus"} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

-----------------------------------
108 What are the possible ways of updating objects in state?

Calling setState() with an object to merge with state:

Using Object.assign() to create a copy of the object:

const user = Object.assign({}, this.state.user, { age: 42 });
this.setState({ user });
Using spread operator:

const user = { ...this.state.user, age: 42 };
this.setState({ user });
Calling setState() with a function:

this.setState((prevState) => ({
  user: {
    ...prevState.user,
    age: 42,
  },
}));

-----------------------------------
127. How to make AJAX call and in which component lifecycle methods should I make an AJAX call?
You can use AJAX libraries such as Axios, jQuery AJAX, and the browser built-in fetch. 
You should fetch data in the componentDidMount() lifecycle method. 
This is so you can use setState() to update your component when the data is retrieved.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      error: null,
    };
  }

  componentDidMount() {
    fetch("https://api.example.com/items")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            employees: result.employees,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  render() {
    const { error, employees } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <ul>
          {employees.map((employee) => (
            <li key={employee.name}>
              {employee.name}-{employee.experience}
            </li>
          ))}
        </ul>
      );
    }
  }
}








