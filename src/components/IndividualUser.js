import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import "../assets/styles/UserDetails.css";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: '15px',
    '&:hover': {
        background: '#dfe6e9',
    }
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
  subHeading:{
      marginLeft:"40px",
      textAlign:"left",
  }
});

export default function IndividualUser(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            UserId:{props.id}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          UserName:{props.username}
        </Typography>
        <Typography variant="body2" component="p"  className={classes.subHeading}>
          Email:{props.email}<br/>
          Address:{props.address}<br/>
          phone:{props.phone}<br/>
          company:{props.company}<br/>
          website{props.website}<br/>
        </Typography>
      </CardContent>
    </Card>
  );
}