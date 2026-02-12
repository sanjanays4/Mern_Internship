import React from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Register() {
  return (
    <div>
      <Paper elevation={3} style={{width:'550px', padding:'20px'}}>
      <Typography variant='h4'>REGISTER PAGE</Typography>
      <TextField id="outlined" type='text' label="Name" variant="outlined" fullWidth style={{marginBottom:'10px'}}/>
      <TextField id="outlined" type='email' label="Email" variant="outlined" fullWidth style={{marginBottom:'10px'}}/>
      <TextField id="outlined" type='password' label="Password" variant="outlined" fullWidth style={{marginBottom:'10px'}}/>
      <TextField id="outlined" type='number' label="phone" variant="outlined" fullWidth style={{marginBottom:'10px'}}/>
      <TextField id="outlined" multiline rows={5} label="Address" variant="outlined" fullWidth style={{marginBottom:'10px'}}/>
      <Button variant="contained" color='primary' fullWidth>Register</Button>
      </Paper>
    </div>
  )
}
