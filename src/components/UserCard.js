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
});

function UserCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    user_id: {props.id}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.name}
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
                <Button variant="contained" color="primary" to={`/users/${props.id}`} component={Link}>
                    Explore More
        </Button>
            </CardActions>
        </Card>
    );
}
export default UserCard;
