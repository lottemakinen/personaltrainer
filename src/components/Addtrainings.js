import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function Addtrainings(props) {

    const [open, setOpen] = React.useState(false);
    const[trainings, setTrainings] = React.useState({
        activity: '', date: '', duration: '', customer: ''
    })

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleInputChange = (event) => {
        setTrainings({...trainings, [event.target.name]: event.target.value})
    }

    const addTrainings = () => {
        props.saveTrainings(trainings);
        handleClose();

    } 

    return(
        <div>
      <Button size="small" onClick={handleClickOpen}>Add training</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New training</DialogTitle>
            <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            name="activity"
            value={trainings.activity}
            onChange={e => handleInputChange(e)}
            label="Activity"
            fullWidth
        />
        <TextField
            margin="dense"
            name="date"
            value={trainings.date}
            onChange={e => handleInputChange(e)}
            label="Date"
            fullWidth
        />
        <TextField
            margin="dense"
            name="duration"
            value={trainings.duration}
            onChange={e => handleInputChange(e)}
            label="Duration"
            fullWidth
        />
        <TextField
            margin="dense"
            name="customer"
            value={trainings.customer.firstname}
            onChange={e => handleInputChange(e)}
            label="Customer"
            fullWidth
        />
            </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addTrainings} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}