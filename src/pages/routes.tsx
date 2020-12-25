import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';

export default function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={SignIn} />
      <Route path="/home" component={Home} />
    </BrowserRouter>
  );
}
