import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import{ TransitionProps}  from '@mui/material/transitions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./DetailCar.css";

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement<any, any>;
//   },
//   ref: React.Ref<unknown>,
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });
function Price (props){
  // const total = 
  const changePrice = parseFloat(props.price);
  const total = Math.floor((changePrice * 3)*1000);
  return (
      <span style={{fontSize:22, color: 'black'}}>{total} VND</span>
  )
}

function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{height:'fit-content', width:'fit-content'}}>
      <Button variant="outlined" onClick={handleClickOpen} style={{fontSize:10, minWidth:0, width:5}}>
      <FontAwesomeIcon icon="fa-solid fa-circle-question"/>
      </Button>
      <Dialog
        open={open}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
      <div style={{display:'flex'}}>
        <DialogTitle style={{fontWeight:'bold', width:200}}>{"Chi tiết giá"}</DialogTitle>
        <DialogTitle style={{fontWeight:'bold', width:'fit-content',cursor:'pointer'}} onClick={handleClose}>X</DialogTitle>
      </div>
        <DialogContent style={{paddingTop:10, paddingLeft:8}}>
          <DialogContentText id="alert-dialog-slide-description" style={{fontSize:20}}>
            Dịch vụ cơ bản
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            VND 609.600/ngày
          </DialogContentText>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <DialogContentText id="alert-dialog-slide-description">
              3 ngày
            </DialogContentText>
            <DialogContentText id="alert-dialog-slide-description" style={{paddingTop:20}}>
            <Price  price='609.600'/>
            </DialogContentText>
          </div>
        </DialogContent>
        <br/>
      </Dialog>
    </div>
  );
}
export default AlertDialog;
