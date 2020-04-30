import React, { Fragment } from 'react';
import MainHead from './MainHeader'
import Navbar from './Navbar'

/**
 * Brings together the top AppBar and left side tabs drawer
 */
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