import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className='main-page'>
      <h1>Please, go to <Link to='/Yalantis-test/employees'>Employees Page</Link></h1>
    </div>
  )
}