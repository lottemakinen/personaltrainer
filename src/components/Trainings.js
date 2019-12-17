
import React, { useState, useEffect } from 'react';
import 'react-table/react-table.css';
import MaterialTable from 'material-table';
import Moment from 'react-moment';


export default function Trainings() {
    const [trainings, setTrainings] = useState([]);
    
    useEffect(() => fetchData() , []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
    }

    const columns = [
        { title: 'Activity', field: 'activity' },
        { title: 'Date', field: 'date'},
        { title: 'Duration', field: 'duration' },
        { title: 'Customer', field: 'customer.firstname'}
      ]

      const dateToFormat = 'date';



    return(

        <div> 
        <Moment date={dateToFormat} />
         <MaterialTable
      title="Trainings"
      columns={columns}
      data={trainings}
      date={dateToFormat}
            />

        </div>
    );
}