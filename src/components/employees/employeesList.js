import React from 'react';
import { ALPHABET } from 'const/const';
import './employeesList.css';

export default function EmployeesList(props) {

  const { employees, activeEmployees, handleChange } = props;

  const filterEmployeesByName = (letter) => employees.filter(employee => employee.lastName[0] === letter);
  const isActiveEmployee = (employee) => activeEmployees.some((activeEmployee) => activeEmployee.id === employee.id);

  return (
    <div className='alphabet-list-wrapper'>
      <h2>Employees</h2>

      <ul className='alphabet-list reset-list'>
        {ALPHABET.map((letter, index) => (
          <li key={`${letter}-${index}`} className='alphabet-item'>
            <span>{letter}</span>

            <ul className='employees-list reset-list'>
              {
                !filterEmployeesByName(letter).length ?
                  <li>----</li> :
                  (filterEmployeesByName(letter)
                    .sort((currEmployee, prevEmployee) => currEmployee.lastName.localeCompare(prevEmployee.lastName))
                    .map(employee =>
                      <li key={`${letter}-${employee.id}`}>
                        <label>
                          <span>{employee.lastName} {employee.firstName}</span>
                          <input type="checkbox" value={employee.id} checked={isActiveEmployee(employee)} onChange={() => handleChange(employee)} />
                        </label>
                      </li>
                    )
                  )
              }
            </ul>
          </li>
        ))
        }
      </ul>
    </div>
  )
}
