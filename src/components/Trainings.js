
import React, { useState, useEffect } from 'react';
import 'react-table/react-table.css';
import MaterialTable from 'material-table';
import Moment from 'react-moment';
import ReactTable from 'react-table';


export default function Trainings() {
    const [trainings, setTrainings] = useState([]);
    
    useEffect(() => fetchData() , []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
    }

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
            accessor: 'links[0].href',
        },
      ]


      const dateToFormat = 'date';



    return(
        <div>
        <Moment date={dateToFormat} />
        <ReactTable filterable={true} data={trainings} columns={columns} />
            />
            </div>

    );
}