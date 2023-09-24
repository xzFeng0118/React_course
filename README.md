# React_course
Notes and project for my react self learning process

What is React?
  A javascript library to build UI
  A javascript library to transfer data into HTML view
  1. Send request to get data
  2. Processing Data
  3. Operating DOM to display the interface
  
features
  1. Component mode, declarative coding, improve development efficiency, component reuse rate
  2. Use React grammar to develop for mobile end in React Native.
  3. Use virtual DOM + Diffing algorithm to reduce interaction with real DOM

JSON:- parse
     - stringify

Module:
  A js provides specific functions(Js file typically).
  Why module: As work and logic increase, code will be more complex.
  Reuse, improve efficiency.

Component:
  A set includes codes and resources(html, css, js, image etc.)
  Why: A website could be complex, make similar parts as components can be reused and improve efficiency.

Components' instance core propoties:
  1.state
  2.props
  3.refs

State
  1.The state is the most important property in the component object, value is the object(can contain multiple key-value combination)
  2.Component is a kind of state machine, update the UI display by updating components' state(re-render compoent)
  Attention:
    1.The 'this' in render method is the component instance object.
    2.The 'this' in customize method is undefined, how to solve?
      a.Binding 'this' through function_object.bind() 
      b.Arrow function
    3.The state data only can be changed by setState method.
