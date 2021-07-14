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

export default function Vault({data}) {
  const classes = useStyles();
  const [sendMoney, setSendMoney] = useState(false);
  return (
      <div>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Account Number: {data.accountNumber}
        </Typography>
        <br/><br/>
          <TextField
          id="filled-read-only-input"
           label="Balance"
           className={classes.textField}
          defaultValue={"₿"+data.amount}
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
        color="primary" variant="contained" size="small" onClick={()=>{setSendMoney(!sendMoney)}}>Money Transfer</Button>
      </CardActions>
    </Card>
    <br/><br/>
    {sendMoney?
    <Card>
       <CardContent style={{
   display: "flex",
   justifyContent: "space-between",
   alignItems: "center",
        }}>
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
          <TextField
          id="filled-read-only-input"
           label="Amount"
         //  className={classes.textField}
         // defaultValue={"₿"+req.balance}
        //   InputProps={{
        //     readOnly: true,
        //   }}
          variant="outlined"
        />
        {/* </Typography> */}
        </CardContent> 
        <CardActions style={{
            display: "flex",
            flexDirection:"column",
            alignItems: "flex-end"
        }}>
        <Button
        color="primary" variant="contained" size="small">send Money</Button>
      </CardActions>
    </Card>
    :null}
    </div>
  );
}
