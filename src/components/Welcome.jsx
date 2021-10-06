import { Button, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import welcomeBackground from '../assets/syllabus-background.jpg'
import profilePicLay from '../assets/ron-rambell-logo-lay.png'
import profilePic from '../assets/ron-rambell-logo.png'
import { Image } from "./Image";
import { useEffect, useRef } from "react";

const useStyles = makeStyles(theme => ({
  welcome: {
    // background: `linear-gradient(rgba(255, 158, 0, 0.60), rgba(255, 158, 0, 0.60))`,
    // background: `linear-gradient(rgba(255, 158, 0, 0.60), rgba(255, 158, 0, 0.60)), url(${welcomeBackground})`,
    width: '100%',
    height: '101vh',
    // backgroundSize: 'cover',
    // backgroundAttachment: 'fixed',
    // backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    '& > *': {
      margin: theme.spacing(2)
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      // height: 800,
      // minHeight: '125vh',
      height: 'auto'
    },
    '&::before': {
      content: '""',
      background: `url(${welcomeBackground})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      opacity: 0.3,
      // top: window.innerWidth * (12.5/100),
      left: 0,
      width: '100vw',
      height: '75vh',
      position: 'absolute',
      alignSelf: 'center',
      [theme.breakpoints.down('sm')]: {
        top: '25%'
      },
      filter: 'blur(1px)'
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    '& > *': {
      margin: theme.spacing(2)
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      
    },
    zIndex: 1,
    // width: '45vw'
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
    // boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.2)',
    // alignSelf: 'flex-start',
    // marginTop: '33vh'
    zIndex: 1,

  },
  imageImg: {
    width: '40vw',
    [theme.breakpoints.down('sm')]: {
      width: '70vw',
    },
  },
  button: {
    fontSize: 25,
    direction: 'rtl',
    boxShadow: `0 0 10px #e55812`
  }
}))

const getPixelRatio = context => {
  let backingStore =
  context.backingStorePixelRatio ||
  context.webkitBackingStorePixelRatio ||
  context.mozBackingStorePixelRatio ||
  context.msBackingStorePixelRatio ||
  context.oBackingStorePixelRatio ||
  context.backingStorePixelRatio ||
  1;
  
  return (window.devicePixelRatio || 1) / backingStore;
}

export const Welcome = inject()(observer((props) =>  {

  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('md'))

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    setTimeout(() => {
      document.getElementById('contact').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 750)
  }

  const classes = useStyles()

  return (
    <div className={classes.welcome}>
      <div className={classes.image}>
          <img className={classes.imageImg} src={desktop ? profilePicLay : profilePic} alt="ron rambell" />
      </div>

      <div className={classes.container}>
        <div className={classes.text}>
          {/* <Typography className={classes.title} variant="h2">Ron Rambell</Typography>
          <Typography variant="h4" paragraph>Personal Dj Courses</Typography> */}
          <Typography style={{ direction: 'rtl' }} variant={desktop ? "h2" : "h4"} paragraph>
            ברוכים הבאים
            </Typography>
            <Typography style={{ direction: 'rtl' }} variant={desktop ? "h4" : "h6"} paragraph>
            {`לקורס שאחריו אתם כבר על העמדה.`}
            <br />
            {`בעזרת מנטורינג אישי ולמידה מקצועית בקבוצות קטנות, באווירה שמחה וחברית.`}
          </Typography>
          <Button color="primary" size="large" onClick={scrollToContact} variant="contained" className={classes.button}>דברו איתי</Button>
        </div>
      </div>
    </div>
  )
}))
