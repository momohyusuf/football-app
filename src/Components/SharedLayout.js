import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

function SharedLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default SharedLayout;
