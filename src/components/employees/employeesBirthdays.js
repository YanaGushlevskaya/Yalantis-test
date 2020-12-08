import React from 'react';
import { MONTHES } from 'const/const';
import formatDate from 'utils/dateFormat';
import './birthdayList.css';

export default function EmployeesBirthdays(props) {

  const { activeEmployees } = props;

  const filterEmployeesByDob = (month) => activeEmployees.filter(
    employee => formatDate(employee.dob, 'longMonth') === month
  );


  return (
    <div className='birthday-list-wrapper'>
      <h2>Employees birthday</h2>

      <ul className='birthday-list reset-list'>
        {!activeEmployees.length ?

          <li>No selected employees</li> :

          MONTHES.map(month => (
            filterEmployeesByDob(month).length > 0
            &&
            <li key={`${month}`}>
              <span>{month}</span>
              <ul className='employees-list'>
                {filterEmployeesByDob(month)
                  .map(employee => (
                    <li key={`${employee.id}`}>
                      {employee.lastName} {employee.firstName} - {formatDate(employee.dob, 'fullDate')}
                    </li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
