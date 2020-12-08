import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeesList from './employeesList';
import EmployeesBirthdays from './employeesBirthdays';
import './employees.css';

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        'https://yalantis-react-school-api.yalantis.com/api/task0/users',
      );

      setEmployees(response.data);
    }
    fetchData();
  }, []);

  const [activeEmployees, setActiveEmployees] = useState(JSON.parse(localStorage.getItem('activeEmployees')) || []);

  const handleEmployeesListChange = (employee) => {
    const isActiveEmployee = (employee) => activeEmployees.some((activeEmployee) => activeEmployee.id === employee.id);
    setActiveEmployees(
      isActiveEmployee(employee) ?
        activeEmployees.filter(currEmployee => employee.id !== currEmployee.id) :
        [...activeEmployees, employee]
    )
  }

  useEffect(() => {
    localStorage.setItem('activeEmployees', JSON.stringify(activeEmployees));
  }, [activeEmployees])

  return (
    <div className='employees-container'>
      <EmployeesList
        employees={employees}
        activeEmployees={activeEmployees}
        handleChange={handleEmployeesListChange}
      />
      <EmployeesBirthdays activeEmployees={activeEmployees} />
    </div>
  )
}