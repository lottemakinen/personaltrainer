import React, { useState, useEffect } from 'react';
import 'react-table/react-table.css';
import MaterialTable from 'material-table';

export default function Customerlist() {
    const [customers, setCustomers] = React.useState([]);

    useEffect(() => fetchData() , []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    }

    
    const columns = [
      { title: 'First name', field: 'firstname' },
      { title: 'Last name', field: 'lastname' },
      { title: 'Street address', field: 'streetaddress' },
      { title: 'Postcode', field: 'postcode' },
      { title: 'City', field: 'city' },
      { title: 'Email', field: 'email' },
      { title: 'Phone', field: 'phone' },
    ]
    

    return(
        <div>
            <MaterialTable
      title="Customers"
      columns={columns}
      data={customers}
            />
        </div>
    );
}