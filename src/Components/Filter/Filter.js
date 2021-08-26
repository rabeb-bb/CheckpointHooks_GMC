import React, { useState }from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { Box, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  root2: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));


const Filter = ({searchTerm, setSearchTerm,searchType, setSearchType,searchRate, setSearchRate}) => {
    const classes = useStyles();
    const[show, setShow]=useState(false)

    const toggleShow=()=>{
      setShow(!show)
    }
    //   const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    //   };
    return (
        <div className={classes.root2}  style={{margin: "0% 50% 1% 0%", width:"60%", color:"white"}} >
            <Button variant="outlined" style={{color:"white",border:"white"}} onClick={()=>toggleShow()}>Browse Movies</Button>
            {show? 
            <div  >
             <FormControl fullWidth className={classes.margin}  variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Search Term</InputLabel>
                <OutlinedInput
                id="outlined-adornment-amount"
                labelWidth={60}
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                />
             </FormControl>
             <TextField
                label="Type"
                id="outlined-start-adornment"
                value={searchType}
                onChange={(e)=>setSearchType(e.target.value)}
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                />
                
                {/* <TextField
                label="Rating"
                id="outlined-start-adornment"
                className={clsx(classes.margin, classes.textField)}
                value={searchRate}
                onChange={(e)=>setSearchRate(e.target.value)}
                variant="outlined"
                /> */}
                <TextField
                label="Year"
                id="outlined-start-adornment"
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                />
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Rating</Typography>
                    <Rating
                    name="simple-controlled"
                    value={searchRate}
                    onChange={(event, newValue) => {
                        setSearchRate(newValue);
                    }}
                    />
                </Box>
                
        </div>:null}

            
        </div>
    )
}

export default Filter
