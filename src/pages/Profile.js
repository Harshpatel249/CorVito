import React from 'react';
import Carous from '../containers/Carous';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import SettingsIcon from '@material-ui/icons/Settings';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import './Profile.css';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import SaveIcon from '@material-ui/icons/Save';
import MyEditor from '../components/MyEditor';
import TextField from '@material-ui/core/TextField';
import { NavLink, Link } from "react-router-dom";

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
export default function Profile(props){
    document.body.style = 'background:'+ props.Theme.body;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog  fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar style = {{backgroundColor: props.Theme.navbar}} className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Edit Profile
                    </Typography>
                    <IconButton autoFocus color="inherit" onClick={handleClose}>
                        <SaveIcon/> Save
                    </IconButton>
                </Toolbar>
                </AppBar>
                <div style={{
                    backgroundColor:"#20B2AA",
                    height:"100%", 
                    width:"100%", 
                    justifyContent:"center"}}>
                    <div style={{
                        width:"300px", 
                        float:"left",
                        }}>
                        <MyEditor />
                    </div>
                    <div  className={classes.root} style={{
                        marginLeft:"40%",
                        marginTop:"0px",
                        float:"center",
                        width:"1000px",
                        }}>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                        <TextField
                        id="outlined-textarea"
                        label="Bio"
                        placeholder="Placeholder"
                        multiline
                        variant="outlined"
                        style={{width:"103ch"}}
                        />
                    </div>
                </div>
            </Dialog>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"1px 0px",
                backgroundColor:"#20B2AA",
                height:"300px",
                justifyContent:"center",
            }}>
                <div>
                    <img style = {{width:"160px", height:"160px", borderRadius:"80px", marginLeft:"100px",marginTop:"50px"}}
                    src = "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                </div>
                <div>
                    <h1 style={{
                        color:"black",
                        marginTop:"100px",
                        marginLeft:"25px",
                        }}>Darshan Paaji</h1>
                        <div style={{padding:"0", marginLeft:"0"}}>
                        <IconButton onClick={handleClickOpen}><CreateIcon/></IconButton>
                        <NavLink to="/settings" tag={Link} style={{textDecoration: 'none'}}>
                            <IconButton><SettingsIcon/></IconButton>
                        </NavLink>
                        <IconButton><EqualizerIcon/></IconButton>
                        </div>
                        <Typography variant="h8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                </div>
            </div>
            <div>
                <div style={{height:50}}>
                    <h2 style={{color:props.Theme.text, textAlign:'left'}}>Watch List</h2>
                </div>
                <div>
                    <Carous Theme={props.Theme}/>
                </div>
            </div>
            <div>
                <div style={{height:50}}>
                    <h2 style={{color:props.Theme.text, textAlign:'left'}}>Rated Movies</h2>
                </div>
                <div>
                    <Carous Theme={props.Theme}/>
                </div>
            </div>
            <div>
                <div style={{height:50}}>
                    <h2 style={{color:props.Theme.text, textAlign:'left'}}>Recommendations</h2>
                </div>
                <div>
                    <Carous Theme={props.Theme}/>
                </div>
            </div>
        </div>
    );
}