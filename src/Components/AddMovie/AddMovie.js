import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SimpleModal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import { Box, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function AddMovies({addMovie}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  //variables for the form
  const [name, setTitle]=React.useState('');
  const [type, setType]=React.useState('');
  const [image, setImage]=React.useState('');
  const [rating, setRating]=React.useState(0);
  const [description, setDesc]=React.useState('');
  //functions to handle the opening and closing of the modal
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
//the form inside the modal
  const handleForm=(e)=>{
    e.preventDefault();
    addMovie({image, name, type, rating, description});
    // e.target.value=""
  }
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Input movie info</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-name" label="Name" onChange={(e)=>setTitle(e.target.value)} value={name} />
        <TextField id="standard-name" label="Cover URL" onChange={(e)=>setImage(e.target.value)}  value={image} />
        <TextField id="standard-name" label="Type" onChange={(e)=>setType(e.target.value)} value={type} />
        <TextField id="standard-name" label="Rating" onChange={(e)=>setRating(e.target.value)} value={rating} />
        <TextField id="standard-name" label="Description" onChange={(e)=>setDesc(e.target.value)}  value={description} /><br/>
        <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Rating</Typography>
                    <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                    }}
                    />
        </Box>
        <Fab color="primary" aria-label="add"  onClick={(e)=>handleForm(e)}>
        {/* <Fab color="primary" aria-label="add"  onClick={()=>addMovie({image, name, type, rating, description})}> */}
        <AddIcon />
      </Fab>     
    </form>
      
        {/* <label>Title:</label>
        <input onChange={(e)=>setTitle(e.target.value)} type="text" id="title" name="title" /><br/>
        <label>Cover:</label>
        <input onChange={(e)=>setImage(e.target.value)} type="text" id="cover" name="cover"/><br/>
        <label>Type:</label>
        <input onChange={(e)=>setType(e.target.value)} type="text" id="type" name="type"/><br/>
        <label>Rating:</label>
        <input onChange={(e)=>setRating(e.target.value)} type="number" id="rating" name="rating"/><br/>
        <label>Description:</label>
        <input onChange={(e)=>setDesc(e.target.value)} type="text" id="descriptiom" name="description"/><br/>
        {/* {setMovie({ image:{image},
                    rating: {rating},
                    name: {title},
                    type: {type},
                    description: {desc}})} */}
        {/* <button onClick={()=>addMovie({image, name, type, rating, description})}>Add</button> */} 
      <SimpleModal />
    </div>
  );

  return (
    <div>
      <Fab color="primary" aria-label="add"  onClick={handleOpen}>
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}