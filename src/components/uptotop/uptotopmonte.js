import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpandlLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((IconButton) => ({
    toTop:{
        zIndex: 999999999999999,
        position: 'fixed',
        top: '80%',
        opacity: '1',
        right: '20px',
        background: '#35b63b',
        color: 'white',
        "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            opacity: '1',
            background: '#2e7d32'
        },
    }
}))

const Scroll = ({
    showBelow
}) => {

    const classes = useStyles();   

    const [show, setShow ] = useState(showBelow ? false : true)
    
    const handleScroll = () => {
        if (window.pageYOffset > showBelow){
            if(!show) setShow(true)
        }
        else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({top: 0, behavior:`smooth`})
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return() => window.removeEventListener(`scroll`, handleScroll)
        }
    })


    return(
        <div>
            {show &&
            <IconButton onClick={handleClick} className={classes.toTop} aria-label="Hacia arriba" component="span">
                <ExpandlLessIcon/>
            </IconButton>
            }
        </div>
    )
}

export default Scroll
