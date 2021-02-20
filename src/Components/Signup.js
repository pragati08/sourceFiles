import React from 'react';
import {Avatar, Button, Grid,TextField, Typography} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';



import axios from 'axios';
     var avatarStyle={backgroundColor:'black', margin:25};
     const btnStyle={margin:'8px 0'};
     const headerStyle={margin:0};
    
    
     
const initialState ={
        name:'',
        email:'',
        phone:'',
        password:'',
     nameError:"",
     emailError:"",
     passwordError:""  ,
     phoneError:"" 
}

class Signup extends React.Component{
 state=initialState;

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
       nameError:"",
       emailError:"",
       passwordError:"",
       phoneError:""
        
    }
        this.changeName=this.changeName.bind(this);
        this.changeEmail=this.changeEmail.bind(this);
        this.changePhone=this.changePhone.bind(this);
        this.changePassword=this.changePassword.bind(this);
        this.changeConfirmPassword=this.changeConfirmPassword.bind(this);
        this.onSubmit1=this.onSubmit1.bind(this);
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

    validate=()=>{
        let nameError="";
       let emailError="";
        let passwordError="";
        let phoneError="";

        if((this.state.name.length<5 || this.state.name.length>20) ){
            nameError=" Name should be greater than 5 and less than 20";
        }
        if((this.state.phone.length<10) || (this.state.phone.length>10)){
            phoneError=" 10 number required";
        }
        if((this.state.password.length<5 || this.state.password.length>20) ){
            passwordError=" password should be greater than 8";
        }

        if((!this.state.email.includes('@')) || (!this.state.email.includes('.'))){
            emailError="invalid Email";
        }
        if(emailError || nameError || passwordError || phoneError){
            this.setState({emailError,nameError,passwordError,phoneError})
            return false;
        }
        return true;

    }


onSubmit1(event)
{
    event.preventDefault();
    const isValid= this.validate();
    if(isValid){
        console.log(this.state)
        this.setState(initialState);
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
        <TextField label='vehicleNumber' type="number" placeholder="Enter Vehicle Number" fullWidth required
        onChange={this.changeVehicleNumber} value={this.state.vehicleNumber}/>
        <TextField label='Location' placeholder="Enter Location" fullWidth required
        onChange={this.changeLocation} value={this.state.location}/>
        <TextField label='Activity Status' type="boolean" placeholder="Activity Status" fullWidth required defaultValue="true"
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
               <form onSubmit={this.onSubmit1} >

               <TextField label='Name' placeholder="Enter Name" fullWidth required
                onChange={this.changeName} value={this.state.name}
                />
                {this.state.nameError ?(
                    <div style={{fontSize:12,color:"red"}}>{
                        this.state.nameError}
                    </div>
                ):null 
                    }
               



               <TextField label='Email' placeholder="Enter Email" fullWidth required
               onChange={this.changeEmail} value={this.state.email}/>
                {this.state.emailError ?(
                    <div style={{fontSize:12,color:"red"}}>{
                        this.state.emailError}
                    </div>
                ):null 
                    }



               <TextField label='Phone Number' type ="number" placeholder="Enter Phone Number" fullWidth required
                onChange={this.changePhone} value={this.state.phone} />
                {this.state.phoneError ?(
                    <div style={{fontSize:12,color:"red"}}>{
                        this.state.phoneError}
                    </div>
                ):null 
                    }

               <TextField  label='Password' placeholder="Enter Password" type="password" fullWidth required
                onChange={this.changePassword} value={this.state.password} 
                />
                 {this.state.passwordError ?(
                    <div style={{fontSize:12,color:"red"}}>{
                        this.state.passwordError}
                    </div>
                ):null 
                    }


               <TextField label='Confirm Password' placeholder="Confirm Password" type="password" fullWidth required
                onChange={this.changeConfirmPassword} value={this.state.confirmpassword}/>



                <TextField label="Birth Date" placeholder="" type="date" fullWidth required
                 onChange={this.changeBirthDate} value={this.state.birthDate}/>
                
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