# React Intro

UI: User Interface
  - How you interact with an application
API: Application Programming Interface
  - Transmits data without a view

React is a Javascript Library
  Library - collection of code snippets for devs to use
  Javascript Library - code snippets are node modules
  Package Manager - yarn, organizing and managing node modules

## React
Component based - built from little pieces like a tile mosaic
Scalable 
  - code that can work under many conditions
  - think about how your app can grow
Reusable
  - Components are reusable
    - functions
    - functions return data including objects
    - JSX (Javascript XML (extensiple markup language))
      - JSX is Javascript flavored markdown that behaves like HTML
User interactions focused
  - DOM: Document Object Model, visual representation of your code
    - Node: each node represents a single HTML element
  - React uses Virtual DOM - Listens for individual nodes in the DOM, compares the diff and refreshes only the element being changed

## React Components
```javascript
      const App = () => {
        return <h1>Hello World!</h1>
      }
```
React components:
 - Made up of functions
 - Must have a return
 - inside return has JSX
- Component call / Invocation <App />