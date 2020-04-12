import React, { Fragment } from 'react';
import MainHead from './MainHeader'
import Navbar from './Navbar'

export default function Layout(props) {
  const { children } = props;
  return (
    <Fragment>
      <MainHead/>
      <Navbar>
        {children}
      </Navbar>
    </Fragment>
  )
}