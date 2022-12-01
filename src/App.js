import Main from './components/Main';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? <Main /> : <Home setShow={setShow} />}
    </>
  );
}

export default App;
