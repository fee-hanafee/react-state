// NodeModules
import React from 'react';
import ListContent from './Components/list/ListContent';

function App() {
  return (
    <div>
      <ListContent name='todo' />
      <ListContent name='book' />
      <ListContent name='shopping' />
    </div>
  );
}

export default App;