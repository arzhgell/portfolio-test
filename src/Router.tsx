import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout';

import { Home } from './containers/Home';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
