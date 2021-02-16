import React,{Component} from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const paperStyle = { padding: 20, height: '60vh', width: 300, margin: "0 auto" }
const avatarStyle = { backgroundColor: '  #5b9aa0' }
const btnStyle = { margin: '8px 0' }
const GridStyle={margin:'0px 0 0 0 '}



const msg={backgroundColor:'red'}
const initialValues = {
    username: '',
    password: '',
    remember: false
}
const validationSchema = Yup.object().shape({
    username: Yup.string().email('Please Enter a Valid Email').required('Compulsory Field'),
    password: Yup.string().required('Compulsory Field')
})
const onSubmit = (values, props) => {
    console.log(values);
    props.resetForm();
    console.log(props);
}



class Login extends React.Component{
    constructor()
    {
        super()
        this.state={

        email:'',
        password:''
       
        
        }
       
        this.changeEmail=this.changeEmail.bind(this);
        this.changePassword=this.changePassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    changeEmail(event)
    {
        this.setState({
        email: event.target.value
        })
    }
   
    changePassword(event)
    {
        this.setState({
        password: event.target.value
        })
    }

    onSubmit(event)
{
    event.preventDefault()
    const loggedin =
    {
        
        email:this.state.email,
        password:this.state.password
      

    }
    axios.post('http://localhost:5000/app/login',loggedin)
    .then(res=>console.log(res.data));
    
    this.setState({
        email:'',
        password:''
      
        
    })

  
}
   
    
    
    render()
    {

 

    return (
        <div>
        <Grid style={GridStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2> Sign In</h2>
                </Grid>
              
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                     
                     <form onSubmit={this.onSubmit}>
                            <Field as={TextField} label='Username'  placeholder="Enter username" fullWidth required
                                //  helperText={<ErrorMessage name='email' style={msg} />} 
                                onChange={this.changeEmail}
                                value={this.state.email}/>
                            
                            <Field as={TextField} label='Password'  placeholder="Enter password" type="password" fullWidth required
                                //  helperText={<ErrorMessage style={msg}/>}
                                onChange={this.changePassword}
                                value={this.state.password}/>
                            
                            <Field as={FormControlLabel}
                                name='remember'
                                control={
                                    <Checkbox

                                        color="primary"
                                    />
                                }
                                label="Remember Me"
                            />
                            <Button type='submit' value='Submit'variant="contained" color='primary' style={btnStyle} fullWidth required> Sign In</Button>
                        </form>

                    )}
                </Formik>
            
              {/* <Typography>Do you have an account?
         <Link href="#" onClick={() => handleChange('event', 1)}>
                        Sign Up
          </Link>
                </Typography> */}
            </Paper>
        </Grid>
        </div>
      
    )}
                            }
            
export default Login;