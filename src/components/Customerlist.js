import React, { useState, useEffect } from 'react';
import 'react-table/react-table.css';
import MaterialTable from 'material-table';
import ReactTable from 'react-table';

export default function Customerlist() {
    const [customers, setCustomers] = React.useState([]);

    useEffect(() => fetchData() , []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    }

    
    const columns = [
      {
        Header: 'First name',
        accessor: 'firstname'
    },
    {
        Header: 'Last name',
        accessor: 'lastname'
    },
    {
        Header: 'Street address',
        accessor: 'streetaddress'
    },
    {
        Header: 'Postcode',
        accessor: 'postcode'
    },
    {
        Header: 'City',
        accessor: 'city'
    },
    {
        Header: 'Email',
        accessor: 'email'
    },
    {
        Header: 'Phone',
        accessor: 'phone'
    },
    ]
    

    return(
        <div>
            <ReactTable filterable={true} data={customers} columns={columns} />
            
        </div>
    );
}