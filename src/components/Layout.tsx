import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header';
export function Layout() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <div className="py-8 px-16 flex flex-col grow gap-8">
        <Header />
        <div className="grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
