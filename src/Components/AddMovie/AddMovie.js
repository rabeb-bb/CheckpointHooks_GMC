import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SimpleModal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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
}));

export default function AddMovies({addMovie}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
//   const[movie, setMovie]=React.useState({ image:"",
//   rating: 0,
//   name: "",
//   type: "",
//   description: ""})
  const [name, setTitle]=React.useState('');
  const [type, setType]=React.useState('');
  const [image, setImage]=React.useState('');
  const [rating, setRating]=React.useState(0);
  const [description, setDesc]=React.useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
//   const handleClick=()=>{
//     setMovie({ image:{image},
//         rating: {rating},
//         name: {title},
//         type: {type},
//         description: {desc}});
//         addMovie({movie});
//   }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Input movie info</h2>
      
      <label>Title:</label>
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
        <button onClick={()=>addMovie({image, name, type, rating, description})}>Add</button>
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