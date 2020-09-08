import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        backgroundColor: '#FFF',
        marginTop: '16px',
        borderRadius: '12px',
        boxShadow: '24dp',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    media: {
        height: 140,
      },
});

const Recipe = ({title, calories, image, solutionUrl}) => {
    const classes = useStyles();

    return(
        <div className="card-field">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media}
                        image={image}
                        title="image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Calories: {calories}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href={solutionUrl} target="_blank">Full recipe</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default Recipe;