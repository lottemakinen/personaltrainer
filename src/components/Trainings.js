import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default function Trainings() {
    const [trainings, setTrainings] = useState([]);
    
    useEffect(() => fetchData() , []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
    }

    const columns = [
        {
            Header: 'Date',
            accessor: 'date'
        },
        

    ]

    return(
        <div>
            <ReactTable filterable={true} data={trainings} columns={columns} />

        </div>
    );
}