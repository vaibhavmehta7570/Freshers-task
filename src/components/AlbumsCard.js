import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: 350,
        height: 250,
        borderRadius: '15px',
        marginRight: '20px',
        marginLeft: '20px',

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
        fontSize: 25,
        height: 100,
    },
    pos: {
        marginBottom: 5,
    },
    moreButton: {
        justifyContent: "center",
        Bottom: "20px",
    }
});

export default function AlbumsCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.pos} color="textSecondary">
                    Album Id: {props.id}
                </Typography>
                <Typography variant="h5" component="h2" className={classes.title}>
                    Title: {props.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    User Id: {props.userId}
                </Typography>
            </CardContent>
            <CardActions className={classes.moreButton}>
                <Button variant="contained" color="primary" to={`/albums/${props.id}`} component={Link}>
                    Explore More
                </Button>
            </CardActions>
        </Card>
    );
}