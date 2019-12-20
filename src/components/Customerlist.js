import React, { useState, useEffect } from 'react';
import 'react-table/react-table.css';
import ReactTable from 'react-table';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';

export default function Customerlist() {
    const [customers, setCustomers] = React.useState([]);

    useEffect(() => fetchData() , []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    }

    const deleteCustomer = (link) => {
        if(window.confirm('Are you sure?')){
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))
    }
    }

    const useStyles = makeStyles(theme => ({
        button: {
          margin: theme.spacing(1),
        },
      }));

      const classes = useStyles();

      const saveCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
      }

      const updateCustomer = (customer, link) => {
          fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
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
    {
        sortable: false,
        filterable: false,
        width: 100,
        Cell: row => <Editcustomer updateCustomer={updateCustomer} customer={row.original}/>
    },
    {
        sortable: false,
        filterable: false,
        accessor: 'links[0].href',
        Cell: row => <Button size="small" variant="contained" color="secondary" className={classes.button} startIcon={<DeleteIcon />}  onClick={() => deleteCustomer(row.value)}>Delete</Button> 
    }
    ]
    

    return(
        <div>
            <Addcustomer saveCustomer={saveCustomer} />
            <ReactTable filterable={true} data={customers} columns={columns} />   
        </div>
    );
}