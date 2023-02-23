152. What is flux?
  
Flux is an application design paradigm used as a replacement for the more traditional MVC pattern. 
It is not a framework or a library but a new kind of architecture that complements React and 
the concept of Unidirectional Data Flow. Facebook uses this pattern internally when working with React.

The workflow between dispatcher, stores and views components with distinct inputs and outputs as follows:

---------------------------
153. What is Redux?

Redux is a predictable state container for JavaScript apps based on the Flux design pattern. 
Redux can be used together with React, or with any other view library

---------------------------
153. What are the core principles of Redux?
[1] Single source of truth: The state of your whole application is stored in an object tree within a single store. 
The single state tree makes it easier to keep track of changes over time and debug or inspect the application.
[2] State is read-only: The only way to change the state is to emit an action, an object describing what happened. 
This ensures that neither the views nor the network callbacks will ever write directly to the state.
[3] Changes are made with pure functions: To specify how the state tree is transformed by actions, you write reducers. 
Reducers are just pure functions that take the previous state and an action as parameters, and return the next state.

------------------------------
157 Can I dispatch an action in reducer?
Dispatching an action within a reducer is an anti-pattern. 
Your reducer should be without side effects, simply digesting the action payload and returning a new state object. 
Adding listeners and dispatching actions within the reducer can lead to chained actions and other side effects.


