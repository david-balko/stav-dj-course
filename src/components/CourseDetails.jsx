import { makeStyles, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import LazyLoad from "react-lazyload";
import { ReactComponent as MixerSvg } from '../assets/dj-mixer.svg'

const useStyles = makeStyles(theme => ({
  courseDetails: {
    background: `linear-gradient(rgba(176, 141, 255, 0.60), rgba(176, 141, 255, 0.60))`,
    // background: `linear-gradient(rgba(131, 56, 236, 0.60), rgba(131, 56, 236, 0.60))`,
    width: '100%',
    // height: '100%',
    position: 'relative',
    // backgroundSize: 'cover',
    // backgroundAttachment: 'fixed',
    // backgroundPosition: 'center',
    display: 'flex',
    paddingBottom: theme.spacing(10),
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 30,
    padding: theme.spacing(2),
    // padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      height: 'auto',
      padding: theme.spacing(),
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
      width: '90vw',
      margin: 'initial',
      marginTop: '15vh',
    },
    color: 'white',
    // overflow: 'hidden'
  },
  detailsContainer: {
    // width: '50vw',
    // marginLeft: 'auto',
    // marginRight: -21,
    // paddingRight: theme.spacing(2),
    
    // [theme.breakpoints.down('sm')]: {
    //   width: '80vw'
    // },
    // color: 'white',
    // paddingRight: 17
  },
  details: {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'rgb(62, 204, 189, 0.8)',
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
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(0.5)
    }
  },
  imageContainer: {
    zIndex: 2,
    position: 'absolute',
    top: '-30vh',
    left: '-18vw',
    alignSelf: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      top: '0',
    }
    // animationDelay: '-0.75s',
  },
  list: {
    margin: 0,
    marginRight: theme.spacing(4),
    padding: 0,
    fontWeight: 400,
    fontSize: "1.5rem",
    lineHeight: 1.334,
    letterSpacing: "0em",
  },
  header: {
    color: '#EAE0CC',
  },
  headerBorder: {
    borderTop: '1px solid #EAE0CC'
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
              <Typography className={classes.header} variant={desktop ? "h3" : "h4"}>
                {`על הקורס`}
              </Typography>
              <div style={{width: '30%', alignSelf: 'flex-start', marginLeft: 'auto'}}>
                <hr className={classes.headerBorder} />
              </div>
              <Typography variant={desktop ? "h6" : "h6"}>
                {`מורכב מ 12 מפגשים שבועיים של שלוש וחצי שעות בקבוצה קטנה של שישה משתתפים באולפן שמרגיש כמו בית באווירה חברית מאוד וגם מקצועית.`}
                <br />
                {`במהלך הקורס כל אחד מקבל שעה פרטנית איתי.`}
                <br />
                {`שיעור שיווק לדיגיז מתחילים על ידי אמן אורח.`}
                <br />
                {`שיעור מאורח בהתגברות על פחדים ומחסומים.`}
                <br />
                {`בנוסף גם תקבלו תיקיית מוזיקה שאיתה אפשר להתחיל את המסע.`}
              </Typography>
              {/* <ul className={classes.list}>
                <li >
                  <Typography variant="h5">
                    {`הקורס מתקיים בקבוצה קטנה של חמישה משתתפים`}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5">
                    {`מורכב מעשרה מפגשים של שלוש וחצי שעות פעם בשבוע.`}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5">
                    {`הקורס נבנה בצורה כזו שתקבלו את כל התיאוריה הנדרשת אך בעיקר תצברו ניסיון מעשי וביטחון כדי שבסופו תוכלו לבטא את עצמכם בצורה שאתם מדמיינים ולא תחששו לעלות על העמדה.`}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5">
                    {`הקבוצה היא קטנה כדי שאוכל לתת יחס אישי כמו מנטורינג לכל אחד מהמשתתפים כמו ליווי צמוד.`}
                  </Typography>
                </li>
              </ul> */}

              <Typography className={classes.header} variant="h4">
                {`למי הוא מתאים`}
              </Typography>
              <div style={{width: '30%', alignSelf: 'flex-start', marginLeft: 'auto'}}>
                <hr className={classes.headerBorder} />
              </div>
              <Typography variant={desktop ? "h6" : "h6"}>
                {`לך ולך ולך ולך!! סתם תכלס הקורס מתאים למי שרוצה להתפתח ולהתקדם בתוך עולמות מוזיקלים ולכם! שרוצים לגעת באנשים דרך מוזיקה ולהרים רחבות.`}
              </Typography>
              <Typography className={classes.header} variant="h4">
                {`הקבוצה`}
              </Typography>
              <div style={{width: '30%', alignSelf: 'flex-start', marginLeft: 'auto'}}>
                <hr className={classes.headerBorder} />
              </div>
              <Typography variant={desktop ? "h6" : "h6"}>
                {`גוד וייבס אנשים טובים נוצרת אווירה חברית ומרימה, שנותנת דרייב להגיע כל שבוע להתקדם בקצב מהיר.`}
              </Typography>
              {/* <ul className={classes.list}>
                <li >
                  <Typography variant="h5">
                    {`הקורס מתאים לכולם! אין צורך בידע קודם.`}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5">
                    {`הוא מיועד לכל האנשים החולמים להכניס את עצמם לסצנת המסיבות והאירועים. לכל אחד שמעוניין לבטא את עצמו דרך יצירה מוזיקלית לייב מול קהל ולאלו שפשוט רוצים לרכוש תחביב חדש ומגניב.`}
                  </Typography>
                </li>
              </ul> */}
              {/* <Typography className={classes.header} variant="h4">
                {`איזה ציוד צריך?`}
              </Typography>
              <div style={{width: '30%', alignSelf: 'flex-start', marginLeft: 'auto'}}>
                <hr className={classes.headerBorder} />
              </div>
              <Typography variant={desktop ? "h5" : "h6"}>
                {`קונטרולר DDJ400 ומעלה בשביל התרגול בבית, תוכנת רקורדבוקס (מגיעה ברכישת קונטרולר), אוזניות וכבלים.`}
                <br />
                {`דברו איתי לפני שאתם רוכשים ותיהיה לכם הנחה עבור הקונטרולר שלכם.`}
              </Typography> */}
            </div>
          </LazyLoad>
        </div>
      </div>
    </div>
    </>
  )
}))
