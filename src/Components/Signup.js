import React from 'react';
import {Avatar, Button, Grid,TextField, Typography} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import axios from 'axios';
     var avatarStyle={backgroundColor:'black', margin:25};
     const btnStyle={margin:'8px 0'};
     const headerStyle={margin:0};
     const birthDateStyle = {color : "white"}
     const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
     


class Signup extends React.Component{
 

    constructor()
    {
        super()
        this.state={
        name:'',
        email:'',
        phone:'',
        password:'',
        confirmpassword:'',
        clickedYes: false,
        role:'',
        vehicleNumber:'',
        location:'',
        activityStatus:'',
        errors: {
            fullName: '',
            email: '',
            password: '',
          }
        
    }
        this.changeName=this.changeName.bind(this);
        this.changeEmail=this.changeEmail.bind(this);
        this.changePhone=this.changePhone.bind(this);
        this.changePassword=this.changePassword.bind(this);
        this.changeConfirmPassword=this.changeConfirmPassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.yesHandler = this.yesHandler.bind(this);
        this.changeRole=this.changeRole.bind(this);
        this.changeVehicleNumber=this.changeVehicleNumber.bind(this);
        this.changeLocation=this.changeLocation.bind(this);
        this.changeActivityStatus=this.changeActivityStatus.bind(this);

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
        this.setState ({error : validEmailRegex.test(event.target.value)  ? ''
        : 'Email is not valid!' })
        
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
    yesHandler() {
        this.setState({
          clickedYes: !this.state.clickedYes
        });
      }

    changeRole(event){
        this.setState({
        selectedOption: event.target.value
        })
    }
    changeVehicleNumber(event){
        this.setState({
            vehicleNumber:event.target.value
        })
    }
    changeLocation(event){
        this.setState({
            location:event.target.value
        })
    }
    changeActivityStatus(event){
        this.setState({
            activityStatus:event.target.value
        })
    }

    // handleChange = (event) => {
    //     event.preventDefault();
    //     const { name, value } = event.target;
    //     let errors = this.state.errors;
    
    //     switch (name) {
    //       case 'fullName': 
    //         errors.fullName = 
    //           value.length < 5
    //             ? 'Full Name must be 5 characters long!'
    //             : '';
    //         break;
    //       case 'email': 
    //         errors.email = 
    //           validEmailRegex.test(value)
    //             ? ''
    //             : 'Email is not valid!';
    //         break;
    //       case 'password': 
    //         errors.password = 
    //           value.length < 8
    //             ? 'Password must be 8 characters long!'
    //             : '';
    //         break;
    //       default:
    //         break;
    //     }
    
    //     this.setState({errors, [name]: value});
    //   }

onSubmit(event)
{
    event.preventDefault();
    if(this.handleValidation()){
        alert("Form Submitted");
    }else{
        alert("Form has errors");
    }
    const registered =
    {
        name:this.state.name,
        email:this.state.email,
        phone:this.state.phone,
        password:this.state.password,
        confirmpassword:this.state.confirmpassword,
        role:this.state.selectedOption,
        vehicleNumber:this.state.vehicleNumber,
        location:this.state.location,
        activityStatus:this.state.activityStatus


    }
    axios.post('http://localhost:5000/app/signup',registered)
    .then(res=>console.log(res.data))
    
    this.setState({
        name:'',
        email:'',
        phone:'',
        password:'',
        confirmpassword:'',
        selectedOption:'',
        vehicleNumber:'',
        location:'',
        activityStatus:''
      

        
    })
    

  
}

    render()
    {
        const {errors} = this.state;

        const radioYes = this.state.clickedYes ? <div>
        <TextField label='vehicleNumber' placeholder="Enter Vehicle Number" fullWidth required
        onChange={this.changeVehicleNumber} value={this.state.vehicleNumber}/>
        <TextField label='Location' placeholder="Enter Locartion" fullWidth required
        onChange={this.changeLocation} value={this.state.location}/>
        <TextField label='Activity Status' placeholder="Activity Status" fullWidth required
        onChange={this.changeActivityStatus} value={this.state.activityStatus}/>
        </div> : null ;

    return(
        <div>
        <Grid>
            
                <Grid align="center">
                <Avatar style= {avatarStyle} ><PersonAddIcon/></Avatar>
               <h2 style={headerStyle}> Sign Up</h2>
               <Typography variant='caption'>Create an account now!!</Typography>
               </Grid>
               <form onSubmit={this.onSubmit} noValidate>
               <TextField label='Name' placeholder="Enter Name" fullWidth required onChange={this.changeName} noValidate value={this.state.name} {...this.state.errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}/>
               <TextField label='Email' placeholder="Enter Email" fullWidth required
               onChange={this.changeEmail} noValidate value={this.state.email} {...this.state.errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}/>
               <TextField label='Phone Number' placeholder="Enter Phone Number" fullWidth required
                onChange={this.changePhone} value={this.state.phone} />
               <TextField  label='Password' placeholder="Enter Password" type="password" fullWidth required
                onChange={this.changePassword} noValidate value={this.state.password} {...this.state.errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}/>
               <TextField label='Confirm Password' placeholder="Confirm Password" type="password" fullWidth required
                onChange={this.changeConfirmPassword} value={this.state.confirmpassword}/>
                <TextField label="Brth Date" placeholder="" type="date" fullWidth required style = {birthDateStyle} onChange={this.changeBirthDate} value={this.state.birthDate}/>
                <TextField label='Confirm Password' placeholder="Confirm Password" type="password" fullWidth required onChange={this.changeConfirmPassword} value={this.state.confirmpassword}/>
                <br></br><br></br>



                <div className="radio"> Do you wish to work as delivery executive?
                    <label>                    
                        <input type="radio" value="option2" 
                        clickedYes={this.state.clickedYes}
                        onClick={this.yesHandler}
                        checked={this.state.selectedOption === 'option2'} 
                        onChange={this.changeRole} /> 
                     </label>

                {radioYes}
               
                </div> 
                <br></br>
                 

       
      
      <Button type='submit' variant="contained" color='primary' style={btnStyle} fullWidth required value='Submit'> Sign Up</Button>
      </form>
    </Grid>
        </div>
    )
    }
}
export default Signup;