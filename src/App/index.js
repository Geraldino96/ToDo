import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from "./TodoContext";

// const defaultTodos = [
//   { text: 'Quemarlo', completed: true },
//   { text: 'Tomar cursso de React', completed: false },
//   { text: 'Aprender más', completed: true },
// ];



function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;