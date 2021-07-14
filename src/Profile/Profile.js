import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
});

export default function Profile({data}) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
         <CardContent>
        <br/><br/>
        <Typography variant="h4">
          First Name: {data.firstName}
        </Typography>
        <br/><br/>
        <Typography variant="h4">
          Last Name: {data.lastName}
        </Typography>
        <br/><br/>
        <Typography variant="h4">
          Account No: {data.accountNumber}
        </Typography>
        <br/><br/>
        <Typography variant="h4">
          Address: {data.address}
        </Typography>
        <br/><br/>
        <Typography variant="h4">
          Phone number: {data.phoneNumber}
        </Typography>
        <br/><br/>
        <Typography variant="h4">
          Email Id: {data.emailId}
        </Typography>
      </CardContent>
    </Card>
  );
}
