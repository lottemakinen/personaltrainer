
import React, { useState, useEffect } from 'react';
import 'react-table/react-table.css';
import Moment from 'react-moment';
import ReactTable from 'react-table';
import Button from '@material-ui/core/Button';
import { makeStyles, formatMs } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';


export default function Trainings() {
    const [trainings, setTrainings] = useState([]);
    
    useEffect(() => fetchData() , []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
    }

    const deleteTrainings = (link) => {
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
      

    const columns = [
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: 'Date',
            accessor: 'date'
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
        {
            Header: 'Customer',
            accessor: 'customer.firstname'
        },
        {
            filterable: false,
            sortable: false,
            accessor: 'data.id',
            Cell: row => <Button size="small" variant="contained" color="secondary" className={classes.button} startIcon={<DeleteIcon />}  onClick={() => deleteTrainings(row.value)}>Delete</Button>
        },
      ]






    return(
        <div>
        <ReactTable filterable={true} data={trainings} columns={columns} />
            />
            </div>

    );
}