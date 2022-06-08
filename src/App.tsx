import React, { FunctionComponent } from 'react';
import { Button } from './components/button';

const App: FunctionComponent = () => (
  <>
    <div>
      <h1>Shopping cart</h1>
    </div>
    <div>
      <Button title="Checkout" />
    </div>
  </>
);

export default App;
