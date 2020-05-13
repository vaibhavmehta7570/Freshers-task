import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "../assets/styles/PostCard.css";

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
  body:{
    marginTop: "20px"
  },
  comment:{
    textAlign:"left",
    marginLeft:"10px"
  }
});

export default function PostCard(props) {
  const classes = useStyles();
  var allComments= props.comments.map(comment =>{
      
      return(
        <React.Fragment>
          <div className="comment-user-name">
              Username: {comment.name}
            </div>
            <div>
              {comment.body}<br /><br />
            </div>
        </React.Fragment>
      );
  })
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Username: {props.username}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.postTitle}
        </Typography>
        <Typography variant="body2" component="p" className={classes.body}>
          {props.postBody}
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <hr/>
        <Typography variant="body2" component="p" className={classes.comment}>
          <p className="title">Comments:</p>
          {allComments}
          </Typography>
      </CardContent>
    </Card>
  );
}