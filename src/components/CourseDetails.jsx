import { makeStyles, div, Typography, useTheme, useMediaQuery, Divider } from "@material-ui/core";
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
    marginBottom: theme.spacing(10),
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 30,
    // padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      height: 'auto',
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
  detailsOverflow: {
    width: '50vw',
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
      marginTop: '15vh'
    },
    color: 'white',
    // overflow: 'hidden'
  },
  detailsContainer: {
    // width: '50vw',
    // marginLeft: 'auto',
    // marginRight: -21,
    paddingRight: theme.spacing(2),
    
    // [theme.breakpoints.down('sm')]: {
    //   width: '80vw'
    // },
    // color: 'white',
    // paddingRight: 17
  },
  details: {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'rgb(94, 212, 200, 0.6)',
    backdropFilter: 'blur(5px)',
    // border: '1px solid #6A040F',
    borderRadius: 8,
    boxShadow: `-0.25rem 0 0.5rem 0 rgba(0, 0, 0, 0.1),
                0.5rem 0 0.5rem 0 rgba(0, 0, 0, 0.1),
                0 -0.25rem 0.5rem 0 rgba(0, 0, 0, 0.1),
                0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.1)`,
    // boxShadow: '5px 10px 8px 10px #888888',

    padding: theme.spacing(4),
    // paddingRight: 30,
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
    '& > *': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  },
  imageContainer: {
    position: 'absolute',
    top: '-30vh',
    left: '-20vw',
    alignSelf: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      top: '0',
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
    // strokeDashoffset: 822,
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
      <LazyLoad className={classes.courseDetail} >

        <div className={classes.imageContainer}>
          <MixerSvg className={classes.svgMixer} />
        </div>
      </LazyLoad>

      <div className={classes.detailsOverflow}>
        <div className={classes.detailsContainer}>
          <LazyLoad className={classes.courseDetail} >
            <div className={classes.details} style={{direction: 'rtl'}}>
              <Typography variant="h3">
                {`על הקורס`}
              </Typography>
              <div style={{width: '30%', alignSelf: 'flex-start', marginLeft: 'auto'}}>
                <hr />
              </div>
              <Typography variant="h6">
                {`הקורס נבנה בצורה כזו שכל אחד שיסיים אותו ירגיש שהוא מוכן לנגן באירועים ויידע שיש לו תמיכה גם להמשך הדרך.`}
                <br/>
                {`הקורס בקבוצות קטנות של ארבעה תלמידים, כדי שיהיה יחס אישי ומנטורינג בתקשורת מלאה ואישית לאורך כל הקורס וגם אחריו מה שיאפשר לכם לקבל את מלוא התמיכה שאתם צריכים בתחילת הדרך לעבר החלום שלכם.`}
              </Typography>

              <Typography variant="h4">
                {`מיקום`}
              </Typography>
              <div style={{width: '30%', alignSelf: 'flex-start', marginLeft: 'auto'}}>
                <hr />
              </div>
              <Typography variant="h6">
                {`הקורס יתרחש באולפני השטוביה, שם יהיה לנו חדר גדול מקצועי ומטופל אקוסטית להפקה מוזיקלית שיהווה לנו בית נעים ונינוח למשך הקורס.`}
              </Typography>
              <Typography variant="h4">
                {`למי מיועד הקורס?`}
              </Typography>
              <div style={{width: '30%', alignSelf: 'flex-start', marginLeft: 'auto'}}>
                <hr />
              </div>
              <Typography variant="h6">
                {`הקורס מיועד לכל האנשים החולמים להכניס את עצמם לסצנת המסיבות והאירועים. לכל אחד שמעוניין לבטא את עצמו דרך יצירה מוזיקלית וניגון לייב מול קהל. `}
              </Typography>
              <Typography variant="h4">
                {`איזה ציוד צריך?`}
              </Typography>
              <div style={{width: '30%', alignSelf: 'flex-start', marginLeft: 'auto'}}>
                <hr />
              </div>
              <Typography variant="h6">
                {`קונטרולר DDJ400 ומעלה, תוכנת רקורדבוקס(מגיעה ברכישת קונטרולר), אוזניות וכבלים.`}
                <br />
                {`אם ברצונכם לרכוש קונטרולר אחר פנו אליי ואעזור לכם לבחור אחד לפי הצרכים שלכם.`}
                <br />
                {`בסופו של דבר כל הקונטרולרים דומים במהותם.`}
              </Typography>
            </div>
          </LazyLoad>
        </div>
      </div>
    </div>
    </>
  )
}))
