import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
        background: 'linear-gradient(45deg, #1976d2 30%, #a6d4fa 90%)',
        border: 0,
        boxShadow: '0 3px 5px 2px rgba(55, 15, 235, .3)',
        color: 'white',
        padding: '20px',
        fontSize:"40px"
    },
});

const Title = () => {
    const classes = useStyles();
    return (
        <div className={classes.title}>
            Weather application
        </div>
    )
}

export default Title;