import { makeStyles, div, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { useEffect, useRef } from "react";
import LazyLoad from "react-lazyload";
import courseDetailsBackground from '../assets/course-details-background.jpg'
import courseDetailsPic from '../assets/course-details-pic.jpg'
import { Image } from "./Image";
import { ReactComponent as MixerSvg } from '../assets/dj-mixer.svg'

const useStyles = makeStyles(theme => ({
  courseDetails: {
    // background: 'linear-gradient(147deg, #03071e 0%, #faa307 100%);',
    // background: `linear-gradient(rgba(131, 56, 236, 0.60), rgba(131, 56, 236, 0.60))`,
    width: '100%',
    // height: '100%',
    position: 'relative',
    // backgroundSize: 'cover',
    // backgroundAttachment: 'fixed',
    // backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    '& > *': {
      margin: theme.spacing(2)
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      // height: 800,
      
    },
    // '&::before': {
    //   content: '""',
    //   background: `url(${courseDetailsBackground})`,
    //   backgroundSize: 'cover',
    //   backgroundAttachment: 'fixed',
    //   backgroundPosition: 'center',
    //   opacity: 0.5,
    //   top: 0,
    //   left: 0,
    //   width: '100%',
    //   height: '100%',
    //   position: 'absolute',
    //   // zIndex: -1,
    // },

  },
  // courseDetail: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   '& > *': {
  //     margin: theme.spacing(2)
  //   },
  //   [theme.breakpoints.down('sm')]: {
  //     flexDirection: 'column-reverse',
  //   }
  // },
  detailsContainer: {
    width: '50vw',
    marginLeft: 'auto',
    marginRight: -21,
    [theme.breakpoints.down('sm')]: {
      width: '80vw'
    },
    // paddingRight: 17
  },
  details: {
    backgroundColor: 'rgba(131, 56, 236 , 0.7)',
    backdropFilter: 'blur(5px)',
    // border: '1px solid #6A040F',
    borderRadius: 4,
    boxShadow: '0 0 0.5rem 0 rgba(0, 0, 0, 0.2)',
    padding: 15,
    paddingRight: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    // width: '80vw',
    // height: '50vh',
    textAlign: 'right',
    // align
    [theme.breakpoints.down('sm')]: {
      // height: 'auto',
      // width: '80vw'
    },
    animation: `$textEnter 750ms ${theme.transitions.easing.easeInOut}`,
  },
  imageContainer: {
    position: 'absolute',
    // top: '-25vh',
    left: '-20vw',
    alignSelf: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      // top: '-10vh',
    }
    // animationDelay: '-0.75s',
  },
  "@keyframes textEnter": {
    "0%": {
      opacity: 0,
      transform: "translateY(15%)"
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)"
    }
  },
  "@keyframes imageEnter": {
    "0%": {
      opacity: 0,
      transform: "scale(0)"
    },
    "33%": {
      opacity: 0,
      transform: "scale(0)"
    },
    "100%": {
      opacity: 1,
      transform: "scale(1)"
    }
  },
  "@keyframes myEffectExit": {
    "0%": {
      opacity: 1,
      transform: "translateY(0)"
    },
    "100%": {
      opacity: 0,
      transform: "translateY(-200%)"
    }
  },
  svgMixer: {
    strokeDashoffset: 822,
    animation: `$imageEnter 1125ms ${theme.transitions.easing.easeInOut}`,
    width: '50vw',
    [theme.breakpoints.down('sm')]: {
      width: '80vw'
    },
  }
}))

export const CourseDetails = inject()(observer((props) =>  {

  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('sm'))

  const classes = useStyles()

  return (
    <>
    <div className={classes.courseDetails} id="course-details">
      <div className={classes.imageContainer}>
        <LazyLoad className={classes.courseDetail} offset={desktop ? -150 : 0} >
          {/* <div className={classes.imageContainer}>
            <Image classes={classes.image} height={desktop ? '30vw' : '70vw'} width={desktop ? '30vw' : '70vw'} src={courseDetailsPic} />
          </div> */}
            <MixerSvg className={classes.svgMixer} />
        </LazyLoad>
      </div>

        <div className={classes.detailsContainer}>
        <LazyLoad className={classes.courseDetail} offset={desktop ? -75 : 0} >
          <div className={classes.details} style={{direction: 'rtl'}}>
            <Typography variant="h3">
              {`על הקורס`}
            </Typography>
            <Typography paragraph variant="h6">
              {`הקורס נבנה בצורה כזו שכל אחד שיסיים אותו ירגיש שהוא מוכן לנגן באירועים ויידע שיש לו תמיכה גם להמשך הדרך.`}
              <br/>
              {`הקורס בקבוצות קטנות של ארבעה תלמידים. כדי שיהיה יחס אישי ומנטורינג במהלך הקורס.`}
              <br/>
              {`גם לאחר לקורס אהיה זמין לכל שאלה והתייעצות.`}
            </Typography>
            <Typography variant="h5">
              {`מיקום`}
            </Typography>
            <Typography paragraph variant="h6">
              {`הקורס יתרכש באולפני השטוביה שם יהיה לנו חדר גדול ומקצועי להפקה מוזיקלית, 
              הקורס יתקיים בסטודיו להפקה מוזקלית מקצועי מטופל אקוסטית שיהווה לנו בית נעים ונינוח.`}
            </Typography>
            <Typography variant="h5">
              {`למי מיועד הקורס?`}
            </Typography>
            <Typography paragraph variant="h6">
              {`הקורס מיועד לכל האנשים החולמים להכניס את עצמם לסצנת המסיבות והאירועים. לכל אחד שמעוניין לבטא את עצמו דרך יצירה מוזיקלית וניגון לייב מול קהל. `}
            </Typography>
            <Typography variant="h5">
              {`איזה ציוד צריך?`}
            </Typography>
            <Typography paragraph variant="h6">
              {`קונטרולר DDJ 400, תוכנת רקורדבוקס (מגיעה ברכישת קונטרולר) אוזניות וכבלים. 
              אם ברצונכם קונטרולר אחר פנו אליי ואעזור לכם לבחור אחד לפי הצרכים שלכם. 
              בסופו של דבר כל הקונטרולרים דומים במהותם.`}
            </Typography>
          </div>
        </LazyLoad>
      </div>
    </div>
    </>
  )
}))
