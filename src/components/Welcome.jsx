import { makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import welcomeBackground from '../assets/welcome-background.jpg'
import profilePic from '../assets/ron-rambell-profile-pic.png'
import { Image } from "./Image";

const useStyles = makeStyles(theme => ({
  welcome: {
    background: `linear-gradient(rgba(255, 158, 0, 0.60), rgba(255, 158, 0, 0.60)), url(${welcomeBackground})`,
    width: '100%',
    height: '95vh',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    '& > *': {
      margin: theme.spacing(2)
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      height: 800,
      
    }
  },
  text: {
    // backgroundColor: 'rgba(255, 255, 255, 0.05)',
    // backdropFilter: 'blur(5px)',
    // // border: '1px solid #6A040F',
    // borderRadius: 4,
    // boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.2)',
    padding: 10,
  },
  title: {
    // fontWeight: 'bold',
    // fontSize: 50
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    // alignSelf: 'flex-start',
    // marginTop: '5vh',
    // '& > *': {
    //   marginTop: '5vh'
    // }
  },
  image: {
    boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.2)',
  }
}))

export const Welcome = inject()(observer((props) =>  {

  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('md'))

  const classes = useStyles()

  return (
    <div className={classes.welcome}>
      <div>
        <div className={classes.text}>
          <Typography className={classes.title} variant="h2">Ron Rambell</Typography>
          <Typography variant="h4" paragraph>Personal Dj Courses</Typography>
          <Typography style={{direction: 'rtl'}} variant="h6">
            ברוכים הבאים<br/>לקורס התקלוט שבו החלום הופך למציאות.<br/>יחס אישי, אולפן מקצועי, תרגול מעשי, קבוצות קטנות, אווירה מדהימה!
          </Typography>
        </div>
      </div>
      <div className={classes.imageContainer}>
        {/* <Image height={200} width={200} /> */}
        <Image classes={classes.image} height={desktop ? 400 : '60vw'} width={desktop ? 400 : '60vw'} src={profilePic} />
      </div>

    </div>
  )
}))
