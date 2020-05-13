import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "../assets/styles/Cards.css";
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    // minWidth: 500,
    justifyContent: 'center',
    borderRadius: '15px',
    
  '&:hover': {
    background:'#dfe6e9',
  }},
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

function Cards(props) {
  const classes = useStyles();
  return (
    <div>
    <Card border={2} borderColor="text.primary" className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          UserId: {props.user}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" component="p">
          {props.body}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
      <Button variant="contained" color="primary" to={`/${props.id}`} component={Link}>
                    Explore More
        </Button>
      </CardActions>
    </Card>
  </div>
  );
};
export default Cards;