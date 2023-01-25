import React from "react";
import Main from './components/Main';
// import {Provider} from "react-redux";
import { CryptoProvider} from './Context/Context';

function App() {
  return (
    
    <CryptoProvider>
      <Main/>
    </CryptoProvider>
  
    
  );
}

export default App;
