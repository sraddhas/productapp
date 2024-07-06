import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} > 
    <AppBar position="static">
      <Toolbar>
    
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} textAlign={'left'}>
          Product App
        </Typography>
        <Link to ={'/'}>
        <Button style={{color:'white'}}>ADD</Button></Link>
        <Link to ={'/home'}>
        <Button style={{color:'white'}}>HOME</Button></Link>
      
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar