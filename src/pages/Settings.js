import React from 'react';
import './Profile.css';
import { makeStyles } from '@material-ui/core/styles';

import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width:"50ch"
        },
    },
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));
  
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function Settings(props){
    document.body.style = 'background:'+ props.Theme.body;
    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined)

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: true,
        checkedC:true,
      });
    const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setTransition(() => 'TransitionUp');
    setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
      };
    return (
        <div>
            <Snackbar
                open={open}
                onClose={handleClose}
                TransitionComponent={transition}
                message="Task Completed Successfully"
                key={transition ? transition.name : ''}
            />
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"1px 0px",
                backgroundColor:"#20B2AA",
                height:"200px",
                justifyContent:"center",
            }}>
                <div style={{float:"center", marginTop:"80px"}}>
                    <h1>Account Settings</h1>
                </div>   
            </div>
            <div style={{
                backgroundColor:"#f1faee",
                height:"300px",
                marginTop:"100px"
            }}>
                <div style={{float:'left', width:'250px',paddingTop:"50px", marginLeft:"500px"}}>
                    <h3>Change Password</h3>
                </div>
                <div style={{float:'center', paddingTop:"100px"}}>
                    <TextField
                    id="password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    />
                </div>
                <div style={{float:'center'}}>
                    <TextField
                    id="password-input"
                    label="Confirm Password"
                    type="password"
                    autoComplete="current-password"
                    />
                </div>
            </div>
            <div style={{
                backgroundColor:"#f1faee",
                height:"400px",
                paddingTop:"0",
                marginTop:"0",
            }}>
                <div style={{float:'left', width:'250px',paddingTop:"50px", marginLeft:"500px"}}>
                    <h3>Privacy Settings</h3>
                </div>
                <div style={{float:'center', paddingTop:"100px"}}>
                <FormGroup row>
                <div style={{marginLeft:"800px"}}>
                    <FormControlLabel
                        control={
                        <Switch checked={state.checkedA} onChange={handleChange} name="checkedA" color="primary" />}
                        label="Make My WatchList Private"
                        labelPlacement="start"
                    />
                </div>
                <div style={{marginLeft:"800px", marginTop:"10px"}}>
                    <FormControlLabel
                        control={
                        <Switch
                            checked={state.checkedB}
                            onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Make My RatedList Private"
                        labelPlacement="start"
                    />
                </div>
                <div style={{marginLeft:"800px", marginTop:"10px"}}>
                    <FormControlLabel
                        control={
                        <Switch
                            checked={state.checkedC}
                            onChange={handleChange}
                            name="checkedC"
                            color="primary"
                        />
                        }
                        label="Make My Account Private"
                        labelPlacement="start"
                    />
                </div>
                
                </FormGroup>
                </div>
            </div>
        </div>
    );
}