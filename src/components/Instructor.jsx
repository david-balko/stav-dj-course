import { makeStyles, div, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import instructorBackground from '../assets/instructor-background.jpg'
import instructorPic from '../assets/instructor-pic.JPG'
import { Image } from "./Image";

const useStyles = makeStyles(theme => ({
  instructor: {
    // background: 'linear-gradient(147deg, #03071e 0%, #faa307 100%);',
    // background: `linear-gradient(rgba(255, 109, 0, 0.60), rgba(255, 109, 0, 0.60)), url(${instructorBackground})`,
    width: '100%',
    height: '90vh',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    '& > *': {
      margin: theme.spacing(2)
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      height: 800,
      
    }

  },
  details: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(3px)',
    // border: '1px solid #6A040F',
    borderRadius: 4,
    boxShadow: '0 0 2rem 0 rgba(0, 0, 0, 0.2)',
    padding: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50vw',
    outline: '5px double #9838A4',
    outlineOffset: 15,
    '& > *': {
      margin: theme.spacing(2)
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      width: '80vw'
    }
    // color: '#faa307'
  },
  image: {
    flex: 'none'
  }
}))

export const Instructor = inject()(observer((props) =>  {

  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('md'))

  const classes = useStyles()

  return (
    <div id="instructor" className={classes.instructor}>
      {/* <div className={classes.imageContainer}>
        <Image height={200} width={200} />
      </div> */}
      <div className={classes.details} style={{direction: 'rtl'}}>
        <Image classes={classes.image} height={desktop ? 400 : '60vw'} width={desktop ? 300 : '60vw'} src={instructorPic} />
        <div>
          <Typography paragraph variant="h3">
            {`מי זה סתיו כהן?`}
          </Typography>
          <Typography variant="h5">
            {`יש יגידו בליין, יש יגידו מליין, ויש יגידו אמן, אבל האמת היא איפה שהוא באמצע`}
          </Typography>
          
        </div>
      </div>
    </div>
  )
}))
