import React,{ useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    width: '200px',
  },
});

export default function Vault() {
  const classes = useStyles();
  const [sendMoney, setSendMoney] = useState(false);
  let req={
      accountId:'12345',
      balance:1.00056
  }
  return (
      <div>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Account Number: {req.accountId}
        </Typography>
        <br/><br/>
          <TextField
          id="filled-read-only-input"
           label="Balance"
           className={classes.textField}
          defaultValue={"₿"+req.balance}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
      </CardContent>
      <CardActions style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
        <Button
        color="primary" variant="contained" size="small" onClick={()=>{setSendMoney(!sendMoney)}}>Send money</Button>
      </CardActions>
    </Card>
    <br/><br/>
    {sendMoney?
    <Card>
       <CardContent>
       {/* <Typography variant="h6" component="h2">
          Account Number:  */}
          <TextField
          id="filled-read-only-input"
           label="Account Number"
         //  className={classes.textField}
         // defaultValue={"₿"+req.balance}
        //   InputProps={{
        //     readOnly: true,
        //   }}
          variant="outlined"
        />
        {/* </Typography> */}
        </CardContent> 
    </Card>
    :null}
    </div>
  );
}
