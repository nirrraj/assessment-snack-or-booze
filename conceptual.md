### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

 To allow developers to handle routing in a single-page React application. It provides a way to map URLs to specific components, enabling the creation of a seamless, multi-page user experience without requiring a full page refresh.

- What is a single page application?

A single page application in React is a web application that loads all its content dynamically into a single HTML page, which then updates as the user interacts with it. This allows for a fast and seamless user experience without the need for full page reloads.

- What are some differences between client side and server side routing?

Client-side routing allows the user to navigate between pages without requiring the server to reload the entire page. Server-side routing requires the server to generate a new HTML page and send it to the client each time the user navigates to a new page, resulting in potentially slow page loads and poor user experience.

- What are two ways of handling redirects with React Router? When would you use each?

One way is to use the <Redirect> component, which is useful when you need to redirect to a specific URL based on state. The other way is to use 'history', which is useful to generally redirect based on user input or other dynamic condition.

- What are two different ways to handle page-not-found user experiences using React Router? 

One way is to use a <Switch> component, which will render the first matching child component (or if none match, a catch-all component at the end). Another way is to use the 'render' prop on a <Route> component, allowing you to define a custom rendering function that can render any component you define when there is no match (e.g., a customized 404 page).

- How do you grab URL parameters from within a component using React Router?

In the router you can use a colon to declare a param variable /:variable, and then use useParams() hook in your component to get that variable from the route URL.

- What is context in React? When would you use it?

Context is a way to pass data across components without clunky prop drilling (i.e., continually passing down props through child components that have no use for it, simply to make the value available to a child far away from the parent component hierarchically). The useContext() hook is available via the Context API.

- Describe some differences between class-based components and function components in React.

Class-based components are the old way of building components in React. They are defined using JavaScript Class syntax (`class` declaration, constructor functions, `extends` parent classes, `this` to refer to class instance, etc). They follow lifecycle methods such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. They generally may be more complex and less readable, with potentially complicated nesting and duplicated logic.

Function components are the newer way to program in React, and generally have the ability to access hooks to streamline nesting, compartmentalize logic in a modular way, and simplify readability.

- What are some of the problems that hooks were designed to solve?

Hooks were created to simplify complex component hierarchies, implement more modular and reusable logic, reduce code duplication, and improve readability and performance.