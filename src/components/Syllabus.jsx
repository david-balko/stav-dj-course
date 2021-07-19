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
    marginBottom: theme.spacing(15),
    // backgroundSize: 'cover',
    // backgroundAttachment: 'fixed',
    // backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 30,
    padding: theme.spacing(2),
    // padding: theme.spacing(2),
    flexDirection: 'column-reverse',
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
    marginRight: 'auto',
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
    // marginLeft: -21,
    
    // [theme.breakpoints.down('sm')]: {
    //   width: '80vw'
    // },
    // color: 'white',
    // paddingRight: 17
  },
  details: {
    // backgroundColor: 'rgb(137,136,223)',
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
    padding: theme.spacing(4),
    // paddingLeft: 30,
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
    '& > *': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
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
    // zIndex: -1.5
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
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(2)
    }

  },
  lessonsRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  lesson: {
    width: '45%',
    display: 'flex',
    flexDirection: 'column',
    // '& > *:nth-child(2)': {
    // },
    textAlign: 'right',
    '& > *': {
      margin: theme.spacing(1)
    },
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      '& > :first-child': {
        textAlign: 'center'
      },
      '& > :nth-child(2)': {
        textAlign: 'center'
      },
    },
  },
  list: {
    margin: 0,
    marginRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    padding: 0,
    fontWeight: 400,
    fontSize: "1.5rem",
    lineHeight: 1.334,
    letterSpacing: "0em",
    [theme.breakpoints.down('sm')]: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em"
    },
  },
  subHeader: {
    lineHeight: 0,
    fontSize: '1.2rem',
    color: '#EAE0CC',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
    }
  }
}))

export const Syllabus = inject()(observer((props) => {

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
              <div className={classes.details} style={{ direction: 'rtl' }}>
                <Typography variant={desktop ? "h3" : "h4"}>
                  {`סילבוס`}
                </Typography>
                <Typography variant={desktop ? "h5" : "h6"}>
                  {`בכל מפגש תמיד יהיה זמן להתנסות מעשית כי זה בתכלס הכי טוב.`}
                </Typography>

                {desktop ?
                  <div className={classes.lessons}>



                    <div className={classes.lessonsRow}>

                    <div className={classes.lesson}>
                      <Typography className={classes.subHeader} >
                        {`מפגש ראשון`}
                      </Typography>
                      <Typography variant={desktop ? 'h4' : 'h5'}>
                        {`מה בוער בי?`}
                      </Typography>
                      <ul className={classes.list}>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`המנוע הפנימי שלי לעולם התקלוט`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`לומדים את ה-תוכנה Rekordbox`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`למה כל הציוד הזה?`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`מיקס ראשון Crossfader`}
                          </Typography>
                        </li>
                      </ul>
                    </div>

                    <div className={classes.lesson}>
                        <Typography className={classes.subHeader} >
                          {`מפגש שישי`}
                        </Typography>
                        <Typography variant={desktop ? 'h4' : 'h5'}>
                          {`איך משמרים את האנרגיה ברחבה?`}
                        </Typography>
                        <ul className={classes.list}>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`נעבור על כל סוגי הסטים השונים`}
                            </Typography>
                          </li>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`איך בונים סט בצורה מרתקת?`}
                            </Typography>
                          </li>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`דאבל דרופינג Double Dropping`}
                            </Typography>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className={classes.lessonsRow}>
                      <div className={classes.lesson}>
                        <Typography className={classes.subHeader} >
                          {`מפגש שני`}
                        </Typography>
                        <Typography variant={desktop ? 'h4' : 'h5'}>
                          {`במה דיג'יי דומה לטבח?`}
                        </Typography>
                        <ul className={classes.list}>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`מה זה BPM? לומדים לספור פעימות.`}
                            </Typography>
                          </li>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`סדר וארגון בתוכנה ובמחשב`}
                            </Typography>
                          </li>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`איך קונים ומשיגים מוזיקה חדשה`}
                            </Typography>
                          </li>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`למה צריכים אוזניות.`}
                            </Typography>
                          </li>
                        </ul>
                      </div>

                      <div className={classes.lesson}>
                        <Typography className={classes.subHeader} >
                          {`מפגש שביעי`}
                        </Typography>
                        <Typography variant={desktop ? 'h4' : 'h5'}>
                          {`שיעור ראשון בגלישת גלים.`}
                        </Typography>
                        <ul className={classes.list}>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`השילוש הקדוש די'גיי קהל אווירה`}
                            </Typography>
                          </li>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`עמידה מול קהל`}
                            </Typography>
                          </li>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`תקשורת מול ההפקה`}
                            </Typography>
                          </li>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`מה עושים כשמגיעים לעמדה??`}
                            </Typography>
                          </li>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`יצירת עלייה עם לופ.`}
                            </Typography>
                          </li>
                        </ul>
                      </div>

                    </div>

                    <div className={classes.lessonsRow}>
                      <div className={classes.lesson}>
                        <Typography className={classes.subHeader} >
                          {`מפגש שלישי`}
                        </Typography>
                        <Typography variant={desktop ? 'h4' : 'h5'}>
                          {`מה עושה מוזיקה כל כך נעימה?`}
                        </Typography>
                        <ul className={classes.list}>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`מבנה של שיר`}
                            </Typography>
                          </li>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`סולם מוזיקלי טיפונת על הרמוניה`}
                            </Typography>
                          </li>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`קאט מיקס Cut mix`}
                            </Typography>
                          </li>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`מתחילים ללמוד אפקטים הראשון Echo`}
                            </Typography>
                          </li>
                        </ul>
                      </div>

                      <div className={classes.lesson}>
                        <Typography className={classes.subHeader} >
                          {`מפגש שמיני`}
                        </Typography>
                        <Typography variant={desktop ? 'h4' : 'h5'}>
                          {`אמן אורח רועי זינגר DJ Oatmilk`}
                        </Typography>
                        <ul className={classes.list}>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`שיווק דיגיטלי לדיג'ייז`}
                            </Typography>
                          </li>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`כל מה שצריך לדעת על פייסבוק היום.`}
                            </Typography>
                          </li>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`מתחילים שיווק כבר במפגש.`}
                            </Typography>
                          </li>
                        </ul>
                      </div>

                    </div>

                    <div className={classes.lessonsRow}>
                      <div className={classes.lesson}>
                        <Typography className={classes.subHeader} >
                          {`מפגש רביעי`}
                        </Typography>
                        <Typography variant={desktop ? 'h4' : 'h5'}>
                          {`למה נשים הן דיג'יות טובות יותר?`}
                        </Typography>
                        <ul className={classes.list}>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`אקולייזר EQ`}
                            </Typography>
                          </li>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`ביט מיקס Beat mix`}
                            </Typography>
                          </li>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`אפקט חדש - הפעם Reverb`}
                            </Typography>
                          </li>
                        </ul>
                      </div>

                      <div className={classes.lesson}>
                        <Typography className={classes.subHeader} >
                          {`מפגש תשיעי`}
                        </Typography>
                        <Typography variant={desktop ? 'h4' : 'h5'}>
                          {`חוששים? גם אני`}
                        </Typography>
                        <ul className={classes.list}>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`מפגש פאלטות מדברים על הטעויות והחששות שלנו בקטע בונה, אל תדאגו גם על החוזקות.`}
                            </Typography>
                          </li>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`סיכום שיתוף חוויות, מה עושים מפה?`}
                            </Typography>
                          </li>
                          <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`מנגנים יחד, B2B`}
                            </Typography>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className={classes.lessonsRow}>
                    <div className={classes.lesson}>
                      <Typography className={classes.subHeader} >
                        {`מפגש חמישי`}
                      </Typography>
                      <Typography variant={desktop ? 'h4' : 'h5'}>
                        {`למה לופים הם בעצם המושיעים שלנו?`}
                      </Typography>
                      <ul className={classes.list}>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`לופים, חוזר ואומר לופים!`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`הוט קיוז Hot cues`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`אפקט חדש לאוסף Transformer`}
                          </Typography>
                        </li>
                      </ul>
                    </div>
                    <div className={classes.lesson}>
                      <Typography className={classes.subHeader} >
                        {`מפגש עשירי`}
                      </Typography>
                      <Typography variant={desktop ? 'h4' : 'h5'}>
                        {`תחשבו טוב! מה הקשר בין רדבול להצלחה?`}
                      </Typography>
                      <ul className={classes.list}>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`התקלוט הראשון שלכם, מתרגשים ביחד!`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`אירוע לכל החברים בבר תל אביב מקסים שכל אחד ינגן סט במשך חצי שעה.`}
                          </Typography>
                        </li>
                      </ul>
                    </div>
                    </div>
                  </div>
                  :
                  <div className={classes.lessons}>
                    <div className={classes.lesson}>
                      <Typography className={classes.subHeader} >
                        {`מפגש ראשון`}
                      </Typography>
                      <Typography variant={desktop ? 'h4' : 'h5'}>
                        {`מה בוער בי?`}
                      </Typography>
                      <ul className={classes.list}>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`המנוע הפנימי שלי לעולם התקלוט`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`לומדים את ה-תוכנה Rekordbox`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`למה כל הציוד הזה?`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`מיקס ראשון Crossfader`}
                          </Typography>
                        </li>
                      </ul>
                    </div>
                    <div className={classes.lesson}>
                      <Typography className={classes.subHeader} >
                        {`מפגש שני`}
                      </Typography>
                      <Typography variant={desktop ? 'h4' : 'h5'}>
                        {`במה דיג'יי דומה לטבח?`}
                      </Typography>
                      <ul className={classes.list}>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`מה זה BPM? לומדים לספור פעימות.`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`סדר וארגון בתוכנה ובמחשב`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`איך קונים ומשיגים מוזיקה חדשה`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`למה צריכים אוזניות.`}
                          </Typography>
                        </li>
                      </ul>
                    </div>
                    <div className={classes.lesson}>
                      <Typography className={classes.subHeader} >
                        {`מפגש שלישי`}
                      </Typography>
                      <Typography variant={desktop ? 'h4' : 'h5'}>
                        {`מה עושה מוזיקה כל כך נעימה?`}
                      </Typography>
                      <ul className={classes.list}>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`מבנה של שיר`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`סולם מוזיקלי טיפונת על הרמוניה`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`קאט מיקס Cut mix`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`מתחילים ללמוד אפקטים הראשון Echo`}
                          </Typography>
                        </li>
                      </ul>
                    </div>
                    <div className={classes.lesson}>
                      <Typography className={classes.subHeader} >
                        {`מפגש רביעי`}
                      </Typography>
                      <Typography variant={desktop ? 'h4' : 'h5'}>
                        {`למה נשים הן דיג'יות טובות יותר?`}
                      </Typography>
                      <ul className={classes.list}>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`אקולייזר EQ`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`ביט מיקס Beat mix`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`אפקט חדש - הפעם Reverb`}
                          </Typography>
                        </li>
                      </ul>
                    </div>
                    <div className={classes.lesson}>
                      <Typography className={classes.subHeader} >
                        {`מפגש חמישי`}
                      </Typography>
                      <Typography variant={desktop ? 'h4' : 'h5'}>
                        {`למה לופים הם בעצם המושיעים שלנו?`}
                      </Typography>
                      <ul className={classes.list}>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`לופים, חוזר ואומר לופים!`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`הוט קיוז Hot cues`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`אפקט חדש לאוסף Transformer`}
                          </Typography>
                        </li>
                      </ul>
                    </div>
                    <div className={classes.lesson}>
                      <Typography className={classes.subHeader} >
                        {`מפגש שישי`}
                      </Typography>
                      <Typography variant={desktop ? 'h4' : 'h5'}>
                        {`איך משמרים את האנרגיה ברחבה?`}
                      </Typography>
                      <ul className={classes.list}>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`נעבור על כל סוגי הסטים השונים`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`איך בונים סט בצורה מרתקת?`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`דאבל דרופינג Double Dropping`}
                          </Typography>
                        </li>
                      </ul>
                    </div>
                    <div className={classes.lesson}>
                      <Typography className={classes.subHeader} >
                        {`מפגש שביעי`}
                      </Typography>
                      <Typography variant={desktop ? 'h4' : 'h5'}>
                        {`שיעור ראשון בגלישת גלים.`}
                      </Typography>
                      <ul className={classes.list}>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`השילוש הקדוש די'גיי קהל אווירה`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`עמידה מול קהל`}
                          </Typography>
                        </li>
                        <li>
                            <Typography variant={desktop ? 'h5' : 'h6'}>
                              {`תקשורת מול ההפקה`}
                            </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`מה עושים כשמגיעים לעמדה??`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`יצירת עלייה עם לופ.`}
                          </Typography>
                        </li>
                      </ul>
                    </div>
                    <div className={classes.lesson}>
                      <Typography className={classes.subHeader} >
                        {`מפגש שמיני`}
                      </Typography>
                      <Typography variant={desktop ? 'h4' : 'h5'}>
                        {`אמן אורח רועי זינגר DJ Oatmilk`}
                      </Typography>
                      <ul className={classes.list}>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`שיווק דיגיטלי לדיג'ייז`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`כל מה שצריך לדעת על פייסבוק היום.`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`מתחילים שיווק כבר במפגש.`}
                          </Typography>
                        </li>
                      </ul>
                    </div>
                    <div className={classes.lesson}>
                      <Typography className={classes.subHeader} >
                        {`מפגש תשיעי`}
                      </Typography>
                      <Typography variant={desktop ? 'h4' : 'h5'}>
                        {`חוששים? גם אני`}
                      </Typography>
                      <ul className={classes.list}>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`מפגש פאלטות מדברים על הטעויות והחששות שלנו בקטע בונה, אל תדאגו גם על החוזקות.`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`סיכום שיתוף חוויות, מה עושים מפה?`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`מנגנים יחד, B2B`}
                          </Typography>
                        </li>
                      </ul>
                    </div>
                    <div className={classes.lesson}>
                      <Typography className={classes.subHeader} >
                        {`מפגש עשירי`}
                      </Typography>
                      <Typography variant={desktop ? 'h4' : 'h5'}>
                        {`תחשבו טוב! מה הקשר בין רדבול להצלחה?`}
                      </Typography>
                      <ul className={classes.list}>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`התקלוט הראשון שלכם, מתרגשים ביחד!`}
                          </Typography>
                        </li>
                        <li>
                          <Typography variant={desktop ? 'h5' : 'h6'}>
                            {`אירוע לכל החברים בבר תל אביב מקסים שכל אחד ינגן סט במשך חצי שעה.`}
                          </Typography>
                        </li>
                      </ul>
                    </div>

                  </div>
                }
              </div>
            </LazyLoad>
          </div>
        </div>


      </div>
    </>
  )
}))
