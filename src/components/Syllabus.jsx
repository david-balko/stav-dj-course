import { makeStyles, div, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import LazyLoad from "react-lazyload";
import { ReactComponent as RomanticVinylSvg } from '../assets/romantic-vinyl.svg'

const lessons = [
  {
    smallTitle: "מפגש ראשון",
    bigTitle: "מה בוער בי?",
    points: [
      "המנוע הפנימי שלי לעולם התקלוט",
      "לומדים את ה-תוכנה Rekordbox",
      "למה כל הציוד הזה?",
      "מיקס ראשון Crossfader"
    ]
  },
  {
    smallTitle: "מפגש שני",
    bigTitle: "איך הכל התחיל",
    points: [
      "היסטוריית המוזיקה האלקטרונית",
      "איך קונים ומשיגים מוזיקה חדשה",
      "מה זה Bpm? לומדים לספור פעימות"
    ]
  },
  {
    smallTitle: "מפגש שלישי",
    bigTitle: "במה דיג'יי דומה לטבח?",
    points: [
      "מבנה של שיר",
      "סדר וארגון בתוכנה ובמחשב",
      "למה צריכים אוזניות."
    ]
  },
  {
    smallTitle: "מפגש רביעי",
    bigTitle: "מה עושה מוזיקה כל כך נעימה?",
    points: [
      "סולם מוזיקלי טיפונת על הרמוניה",
      "קאט מיקס Cut mix",
      "מתחילים ללמוד אפקטים הראשון Echo"
    ]
  },
  {
    smallTitle: "מפגש חמישי",
    bigTitle: "למה נשים הן דיג'יות טובות יותר?",
    points: [
      "אקולייזר EQ",
      "ביט מיקס Beat mix",
      "אפקט חדש, הפעם Reverb"
    ]
  },
  {
    smallTitle: "מפגש שישי",
    bigTitle: "חוקרים איקולייזר לעומק",
    points: [
      "פילטרים",
      "איקיו מתקדם",
      "הופכים אותו לחבר."
    ]
  },
  {
    smallTitle: "מפגש שביעי",
    bigTitle: "למה לופים הם בעצם המושיעים שלנו?",
    points: [
      "לופים, חוזר ואומר לופים!",
      "הוט קיוז Hot cues",
      "אפקט חדש לאוסף Transformer"
    ]
  },
  {
    smallTitle: "מפגש שמיני",
    bigTitle: "פילוסופיה מעשית.",
    points: [
      "השילוש הקדוש דיג'יי קהל אווירה",
      "עמידה מול קהל",
      "תקשורת מול ההפקה",
      "מה עושים כשמגיעים לעמדה??",
      "יצירת עלייה עם לופ."
    ]
  },
  {
    smallTitle: "מפגש תשיעי",
    bigTitle: "שיווק כדרך חיים (אמן אורח רועי זינגר DJ Oatmilk)",
    points: [
      "שיווק דיגיטלי לדיג'ייז",
      "מה הקשיים בעולם השיווק העצמי ואיך מתגברים עליהם",
      "סושיאל מדיה"
    ]
  },
  {
    smallTitle: "מפגש עשירי",
    bigTitle: "איך הופכים למיוחדים בנוף",
    points: [
      "נעבור על כל סוגי הסטים השונים",
      "איך בונים סט בצורה מרתקת?",
      "דאבל דרופינג Double Dropping"
    ]
  },
  {
    smallTitle: "מפגש אחת עשרה",
    bigTitle: "חוששים? גם אני",
    points: [
      "מפגש פאלטות מדברים על הטעויות והחששות שלנו בקטע בונה, אל תדאגו גם על החוזקות.",
      "סיכום שיתוף חוויות, מה עושים מפה?",
      "מנגנים יחד, B2B"
    ]
  },
  {
    smallTitle: "מפגש שתיים עשרה",
    bigTitle: "תחשבו טוב! מה הקשר בין רדבול להצלחה?",
    points: [
      "התקלוט הראשון שלכם, מתרגשים ביחד!",
      "אירוע לכל החברים בבר תל אביב מקסים שכל אחד ינגן סט במשך חצי שעה."
    ]
  },
]

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
    top: '-5vh',
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

  const numLines = 6

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
                          {lessons[0].smallTitle}
                        </Typography>
                        <Typography variant={desktop ? 'h4' : 'h5'}>
                          {lessons[0].bigTitle}
                        </Typography>
                        <ul className={classes.list}>
                          {
                            lessons[0].points.map(l => 
                            <li key={`lesson1${l}`}>
                              <Typography variant={desktop ? 'h5' : 'h6'}>
                                {l}
                              </Typography>
                            </li>)
                          }
                        </ul>
                      </div>
                      <div className={classes.lesson}>
                        <Typography className={classes.subHeader} >
                          {lessons[0 + numLines].smallTitle}
                        </Typography>
                        <Typography variant={desktop ? 'h4' : 'h5'}>
                          {lessons[0 + numLines].bigTitle}
                        </Typography>
                        <ul className={classes.list}>
                          {
                            lessons[0 + numLines].points.map(l => 
                            <li key={`lesson2${l}`}>
                              <Typography variant={desktop ? 'h5' : 'h6'}>
                                {l}
                              </Typography>
                            </li>)
                          }
                        </ul>
                      </div>

                    </div>
                    <div className={classes.lessonsRow}>
                    <div className={classes.lesson}>
                        <Typography className={classes.subHeader} >
                          {lessons[1].smallTitle}
                        </Typography>
                        <Typography variant={desktop ? 'h4' : 'h5'}>
                          {lessons[1].bigTitle}
                        </Typography>
                        <ul className={classes.list}>
                          {
                            lessons[1].points.map(l => 
                            <li key={`lesson3${l}`}>
                              <Typography variant={desktop ? 'h5' : 'h6'}>
                                {l}
                              </Typography>
                            </li>)
                          }
                        </ul>
                      </div>
                      <div className={classes.lesson}>
                        <Typography className={classes.subHeader} >
                          {lessons[1 + numLines].smallTitle}
                        </Typography>
                        <Typography variant={desktop ? 'h4' : 'h5'}>
                          {lessons[1 + numLines].bigTitle}
                        </Typography>
                        <ul className={classes.list}>
                          {
                            lessons[1 + numLines].points.map(l => 
                            <li key={`lesson4${l}`}>
                              <Typography variant={desktop ? 'h5' : 'h6'}>
                                {l}
                              </Typography>
                            </li>)
                          }
                        </ul>
                      </div>

                    </div>

                    <div className={classes.lessonsRow}>
                    <div className={classes.lesson}>
                        <Typography className={classes.subHeader} >
                          {lessons[2].smallTitle}
                        </Typography>
                        <Typography variant={desktop ? 'h4' : 'h5'}>
                          {lessons[2].bigTitle}
                        </Typography>
                        <ul className={classes.list}>
                          {
                            lessons[2].points.map(l => 
                            <li  key={`lesson5${l}`}>
                              <Typography variant={desktop ? 'h5' : 'h6'}>
                                {l}
                              </Typography>
                            </li>)
                          }
                        </ul>
                      </div>
                      <div className={classes.lesson}>
                        <Typography className={classes.subHeader} >
                          {lessons[2 + numLines].smallTitle}
                        </Typography>
                        <Typography variant={desktop ? 'h4' : 'h5'}>
                          {lessons[2 + numLines].bigTitle}
                        </Typography>
                        <ul className={classes.list}>
                          {
                            lessons[2 + numLines].points.map(l => 
                            <li  key={`lesson6${l}`}>
                              <Typography variant={desktop ? 'h5' : 'h6'}>
                                {l}
                              </Typography>
                            </li>)
                          }
                        </ul>
                      </div>

                    </div>

                    <div className={classes.lessonsRow}>
                    <div className={classes.lesson}>
                        <Typography className={classes.subHeader} >
                          {lessons[3].smallTitle}
                        </Typography>
                        <Typography variant={desktop ? 'h4' : 'h5'}>
                          {lessons[3].bigTitle}
                        </Typography>
                        <ul className={classes.list}>
                          {
                            lessons[3].points.map(l => 
                            <li key={`lesson7${l}`}>
                              <Typography variant={desktop ? 'h5' : 'h6'}>
                                {l}
                              </Typography>
                            </li>)
                          }
                        </ul>
                      </div>
                      <div className={classes.lesson}>
                        <Typography className={classes.subHeader} >
                          {lessons[3 + numLines].smallTitle}
                        </Typography>
                        <Typography variant={desktop ? 'h4' : 'h5'}>
                          {lessons[3 + numLines].bigTitle}
                        </Typography>
                        <ul className={classes.list}>
                          {
                            lessons[3 + numLines].points.map(l => 
                            <li key={`lesson8${l}`}>
                              <Typography variant={desktop ? 'h5' : 'h6'}>
                                {l}
                              </Typography>
                            </li>)
                          }
                        </ul>
                      </div>
                    </div>
                    <div className={classes.lessonsRow}>
                    <div className={classes.lesson}>
                        <Typography className={classes.subHeader} >
                          {lessons[4].smallTitle}
                        </Typography>
                        <Typography variant={desktop ? 'h4' : 'h5'}>
                          {lessons[4].bigTitle}
                        </Typography>
                        <ul className={classes.list}>
                          {
                            lessons[4].points.map(l => 
                            <li key={`lesson9${l}`}>
                              <Typography variant={desktop ? 'h5' : 'h6'}>
                                {l}
                              </Typography>
                            </li>)
                          }
                        </ul>
                      </div>
                      <div className={classes.lesson}>
                        <Typography className={classes.subHeader} >
                          {lessons[4 + numLines].smallTitle}
                        </Typography>
                        <Typography variant={desktop ? 'h4' : 'h5'}>
                          {lessons[4 + numLines].bigTitle}
                        </Typography>
                        <ul className={classes.list}>
                          {
                            lessons[4 + numLines].points.map(l => 
                            <li key={`lesson10${l}`}>
                              <Typography variant={desktop ? 'h5' : 'h6'}>
                                {l}
                              </Typography>
                            </li>)
                          }
                        </ul>
                      </div>
                    </div>
                    <div className={classes.lessonsRow}>
                      <div className={classes.lesson}>
                        <Typography className={classes.subHeader} >
                          {lessons[5].smallTitle}
                        </Typography>
                        <Typography variant={desktop ? 'h4' : 'h5'}>
                          {lessons[5].bigTitle}
                        </Typography>
                        <ul className={classes.list}>
                          {
                            lessons[5].points.map(l => 
                            <li key={`lesson11${l}`}>
                              <Typography variant={desktop ? 'h5' : 'h6'}>
                                {l}
                              </Typography>
                            </li>)
                          }
                        </ul>
                      </div>
                      <div className={classes.lesson}>
                        <Typography className={classes.subHeader} >
                          {lessons[5 + numLines].smallTitle}
                        </Typography>
                        <Typography variant={desktop ? 'h4' : 'h5'}>
                          {lessons[5 + numLines].bigTitle}
                        </Typography>
                        <ul className={classes.list}>
                          {
                            lessons[5 + numLines].points.map(l => 
                            <li key={`lesson12${l}`}>
                              <Typography variant={desktop ? 'h5' : 'h6'}>
                                {l}
                              </Typography>
                            </li>)
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                  :
                  <div className={classes.lessons}>
                    {lessons.map(l =>
                      <div key={`lessons${l}`} className={classes.lesson}>
                        <Typography className={classes.subHeader} >
                          {l.smallTitle}
                        </Typography>
                        <Typography variant={desktop ? 'h4' : 'h5'}>
                          {l.bigTitle}
                        </Typography>
                        <ul className={classes.list}>
                          {
                            l.points.map(l => 
                            <li key={`lesson13${l}`}>
                              <Typography variant={desktop ? 'h5' : 'h6'}>
                                {l}
                              </Typography>
                            </li>)
                          }
                        </ul>
                      </div>
                    )}
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
