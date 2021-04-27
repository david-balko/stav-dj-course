import { makeStyles, div, Typography, useTheme, useMediaQuery, Divider } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { useEffect, useRef } from "react";
import LazyLoad from "react-lazyload";
import courseDetailsBackground from '../assets/course-details-background.jpg'
import courseDetailsPic from '../assets/course-details-pic.jpg'
import { Image } from "./Image";
import { ReactComponent as RomanticVinylSvg } from '../assets/romantic-vinyl.svg'

const useStyles = makeStyles(theme => ({
  courseDetails: {
    // background: 'linear-gradient(147deg, #03071e 0%, #faa307 100%);',
    // background: `linear-gradient(rgba(131, 56, 236, 0.60), rgba(131, 56, 236, 0.60))`,
    width: '100%',
    // height: '100%',
    position: 'relative',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    // backgroundSize: 'cover',
    // backgroundAttachment: 'fixed',
    // backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 30,
    // padding: theme.spacing(2),
    flexDirection: 'column-reverse',
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
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
      marginTop: '15vh'
    },
    color: 'white',
    overflow: 'hidden'
  },
  detailsContainer: {
    // width: '50vw',
    // marginLeft: 'auto',
    marginLeft: -21,
    paddingLeft: 20
    // [theme.breakpoints.down('sm')]: {
    //   width: '80vw'
    // },
    // color: 'white',
    // paddingRight: 17
  },
  details: {
    backgroundColor: 'rgb(137,136,223)',
    backdropFilter: 'blur(5px)',
    // border: '1px solid #6A040F',
    borderRadius: 4,
    boxShadow: '0 0 0.5rem 0 rgba(0, 0, 0, 0.2)',
    padding: 15,
    paddingLeft: 30,
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
    top: '-20vh',
    right: '-20vw',
    alignSelf: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      top: '0',
    },
    zIndex: -1
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
    
  },
  lessons: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    '& > *': {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2)
    }

  }
}))

export const Syllabus = inject()(observer((props) =>  {

  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('sm'))

  const classes = useStyles()

  return (
    <>
    <div className={classes.courseDetails} id="course-details">

      <LazyLoad className={classes.courseDetail} offset={desktop ? 0 : 0}  >

        <div className={classes.imageContainer}>
              <RomanticVinylSvg className={classes.svgMixer} />
        </div>
      </LazyLoad>

      <div className={classes.detailsOverflow}>
        <div className={classes.detailsContainer}>
          <LazyLoad className={classes.courseDetail} >
            <div className={classes.details} style={{direction: 'rtl'}}>
              <Typography paragraph variant="h3">
                {`סילבוס`}
              </Typography>
              <Typography paragraph variant="h6">
                {`בכל מפגש יהיה חלק מעשי! למה? כי אין כמו להתנסות בעצמנו`}
              </Typography>
              
              <div className={classes.lessons}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <Typography paragraph variant="h4">
                    {`שיעור ראשון`}
                  </Typography>
                  <Typography paragraph variant="h6">
                    {`- התשוקה לעולם הריקוד`}
                    <br />
                    {`- סקירה של הציוד`}
                    <br />
                    {`- מיקס ראשון`}
                  </Typography>
                  <br />
                  <Typography paragraph variant="h4">
                    {`שיעור שני`}
                  </Typography>
                  <Typography paragraph variant="h6">
                    {`- מה זה bpm? לומדים לספור פעימות`}
                    <br />
                    {`- סדר וארגון בתוכנה ובמחשב`}
                    <br />
                    {`- שמיעה באוזניות`}
                  </Typography>
                  <br />
                  <Typography paragraph variant="h4">
                    {`שיעור שלישי`}
                  </Typography>
                  <Typography paragraph variant="h6">
                    {`- מבנה של שיר`}
                    <br />
                    {`- סולם מוזיקלי טיפונת על הרמוניה`}
                    <br />
                    {`- קאט מיקס cut mix`}
                  </Typography>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <Typography paragraph variant="h4">
                    {`שיעור רביעי`}
                  </Typography>
                  <Typography paragraph variant="h6">
                    {`- איקולייזר`}
                    <br />
                    {`- ביט מיקס beat mix`}
                    <br />
                    {`- מתחילים ללמוד אפקטים לעומק, הפעם Reverb`}
                  </Typography>
                  <br />
                  <Typography paragraph variant="h4">
                    {`שיעור חמישי`}
                  </Typography>
                  <Typography paragraph variant="h6">
                    {`- לופים`}
                    <br />
                    {`- הוט קיוז Hot cues`}
                    <br />
                    {`- אפקט חדש לאוסף Transformer`}
                  </Typography>
                  <br />
                  <Typography paragraph variant="h4">
                    {`שיעור שישי`}
                  </Typography>
                  <Typography paragraph variant="h6">
                    {`- סוגים שונים של סטים`}
                    <br />
                    {`- איך בונים סט`}
                    <br />
                    {`- דאבל דרופינג double Dropping`}
                  </Typography>
                </div>

              </div>

            </div>
          </LazyLoad>
        </div>
      </div>

      
    </div>
    </>
  )
}))
