import { makeStyles, div, Typography, useTheme, useMediaQuery, Avatar } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import instructorBackground from '../assets/instructor-background.jpg'
import instructorPic from '../assets/instructor-pic.JPG'
import { Image } from "./Image";

const useStyles = makeStyles(theme => ({
  instructor: {
    // background: 'linear-gradient(147deg, #03071e 0%, #faa307 100%);',
    // background: `linear-gradient(rgba(255, 109, 0, 0.60), rgba(255, 109, 0, 0.60)), url(${instructorBackground})`,
    width: '100%',
    // height: '90vh',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: theme.spacing(2),
    '& > *': {
      margin: theme.spacing(2)
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      
    },
    color: 'white',
    
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

    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    width: '100%',
    '& > *': {
      margin: theme.spacing(2)
    },
    [theme.breakpoints.down('sm')]: {
      width: '90vw'
    }
    // color: '#faa307'
  },
  image: {
    flex: 'none'
  },
  text: {
    width: '100%',
    '& *': {
      margin: theme.spacing(2)
    },
  },
  instructorDetails: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    '& > *': {
      margin: theme.spacing(2)
    },
  },
  datesAndPrice: {

  },
  datesTitle: {
    alignSelf: 'flex-start',
    marginRight: theme.spacing(10)
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
        {/* <Image classes={classes.image} height={desktop ? 400 : '60vw'} width={desktop ? 300 : '60vw'} src={instructorPic} /> */}
        <div className={classes.instructorDetails}>
          <Avatar alt="Ron Ramball" src={instructorPic} style={{width: desktop ? '20vw' : '60vw', height: desktop ? '20vw' : '60vw'}} />
          <div className={classes.text}>
            <Typography variant="h3">
              {`על היוצר`}
            </Typography>
            <div style={{textAlign: 'right'}}>
              <Typography variant="h4">
                {`שמח שהגעתם הנה,`}
              </Typography>
              <Typography style={{lineHeight: '150%'}} variant="h6">
                {`אני סתיו המנחה והיוצר של הקורס קצת על חיי האישיים שתכירו אותי.`}
                <br />
                {`גדלתי בתל אביב כיום מתגורר ביפו עוד אין לי בנים ולא בנות, הקורס הזה זה ועוד הרבה פרוייקטים אלו הילדים שלי.`}
                <br />
                {`שנים שאני מפיק אירועים מסיבות ופסטיבלים וחלק מההפקה DAG.`}
                <br />
                {`אני כבר אחרי הרבה שנים של ניגון באירועים ויצירת אירועים.`}
                <br />
                {`מכיר את סצנת המסיבות היטב גם מבחוץ כבליין וגם מבפנים כמפיק ודיג'יי.`}
                <br />
                {`היום מעבר להיותי דייגי ומפיק אירועים אני גם לומד מיינדפולנס ובתהליך יצירת סרט.`}
                <br />
                {`את הרעיון לקורס קיבלתי אחרי זמן מה שהבנתי שהרבה אנשים מהסביבה שלי אוהבים מוזיקה ורוצים לדעת לתקלט ולבטא את האהבה שלהם לסאונד ומעוניינים העביר אנשים חוויה דרך העולם המוזיקלי שלהם.`}
                <br />
                {`זיהיתי שלרובם המסגרות שכרגע מוצעות לא מתאימות להם.`}
                <br />
                {`חסר להם הליווי, היחס האישי והתכלס שבדבר!`}
                <br />
                {`הבנתי שלי יש את הידע והמון מה לתת וגם את הרצון ללוות אנשים בתחילת דרכם בעולם התקלוט.`}
                <br />
                {`אני יודע הצעדים הראשונים הם הצעדים שבהם עושים הכי הרבה טעויות ואני פה כדי שכולם יתחילו ברגל ימין את הדרך שלהם.`}
                <br />
              </Typography>
              
            </div>
          </div>
        </div>
        {/* <Typography className={classes.datesTitle} variant="h4">
          {`בקיצור,`}
        </Typography>
        <div className={classes.datesAndPrice}>

        </div> */}
      </div>
    </div>
  )
}))
