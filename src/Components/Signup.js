import React,{ Component }from 'react';
import {Avatar, Button, Grid,Paper,TextField, Typography,Link} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';

  var paperStyle={padding:'30px 20px',height:'60vh',width:300,margin:"0 auto"};
     var avatarStyle={backgroundColor:'  #5b9aa0'};
     const btnStyle={margin:'8px 0'};
     const headerStyle={margin:0};
  

class Signup extends React.Component{
   
    
 

    constructor()
    {
        super()
        this.state={
        name:'',
        email:'',
        phone:'',
        password:'',
        confirmpassword:''
        
        }
        this.changeName=this.changeName.bind(this);
        this.changeEmail=this.changeEmail.bind(this);
        this.changePhone=this.changePhone.bind(this);
        this.changePassword=this.changePassword.bind(this);
        this.changeConfirmPassword=this.changeConfirmPassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    changeName(event)
    {
        this.setState({
        name: event.target.value
        })
    }
    changeEmail(event)
    {
        this.setState({
        email: event.target.value
        })
    }
    changePhone(event)
    {
        this.setState({
        phone: event.target.value
        })
    }
    changePassword(event)
    {
        this.setState({
        password: event.target.value
        })
    }
    changeConfirmPassword(event)
    {
        this.setState({
        confirmpassword: event.target.value
        })
    }
onSubmit(event)
{
    event.preventDefault()
    const registered =
    {
        name:this.state.name,
        email:this.state.email,
        phone:this.state.phone,
        password:this.state.password,
        confirmpassword:this.state.confirmpassword

    }
    axios.post('http://localhost:5000/app/signup',registered)
    .then(res=>console.log(res.data))
    
    this.setState({
        name:'',
        email:'',
        phone:'',
        password:'',
        confirmpassword:''
        
    })

  
}

    render()
    {
    return(
        <div>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                <Avatar  style={avatarStyle}><AddCircleOutlineIcon/></Avatar>
               <h2 style={headerStyle}> Sign Up</h2>
               <Typography variant='caption'>Create an account now!!</Typography>
               </Grid>
               <form onSubmit={this.onSubmit}>
               <TextField label='Name' placeholder="Enter Name" fullWidth required onChange={this.changeName}
               value={this.state.name}/>
               <TextField label='Email' placeholder="Enter Email" fullWidth required
               onChange={this.changeEmail} value={this.state.email}/>
             
               <TextField label='Phone Number' placeholder="Enter Phone Number" fullWidth required
                onChange={this.changePhone} value={this.state.phone}/>
               <TextField label='Password' placeholder="Enter Password" fullWidth required
                onChange={this.changePassword} value={this.state.password}/>
               <TextField label='Confirm Password' placeholder="Confirm Password" fullWidth required
                onChange={this.changeConfirmPassword} value={this.state.confirmpassword}/>
               
       
      
      <Button type='submit' variant="contained" color='primary' style={btnStyle} fullWidth required value='Submit'> Sign Up</Button>
      </form>
            </Paper>
        </Grid>
        </div>
    )
    }
}
export default Signup;