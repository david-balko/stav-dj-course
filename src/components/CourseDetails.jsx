import { makeStyles, div, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import LazyLoad from "react-lazyload";
import courseDetailsBackground from '../assets/course-details-background.jpg'
import courseDetailsPic from '../assets/course-details-pic.jpg'
import { Image } from "./Image";

const useStyles = makeStyles(theme => ({
  courseDetails: {
    // background: 'linear-gradient(147deg, #03071e 0%, #faa307 100%);',
    background: `linear-gradient(rgba(157, 78, 221, 0.60), rgba(157, 78, 221, 0.60)), url(${courseDetailsBackground})`,
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
      flexDirection: 'column-reverse',
      height: 800,
      
    }

  },
  details: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(5px)',
    // border: '1px solid #6A040F',
    borderRadius: 4,
    boxShadow: '0 0 2rem 0 rgba(0, 0, 0, 0.2)',
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '50vw',
    height: '50vh',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      width: '80vw'
    },
    animation: `$textEnter 750ms ${theme.transitions.easing.easeInOut}`,
  },
  imageContainer: {
    animation: `$imageEnter 1500ms ${theme.transitions.easing.easeInOut}`,
    // animationDelay: '-0.75s',
    [theme.breakpoints.down('sm')]: {
      animation: `$textEnter 750ms ${theme.transitions.easing.easeInOut}`,
    },
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
      transform: "translateY(-15%)"
    },
    "50%": {
      opacity: 0,
      transform: "translateY(-15%)"
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)"
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
  }
}))

export const CourseDetails = inject()(observer((props) =>  {

  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('md'))

  const classes = useStyles()

  return (
    <div className={classes.courseDetails}>
      <LazyLoad height={200} offset={desktop ? 0 : 300} once>
        <div className={classes.imageContainer}>
          <Image classes={classes.image} height={desktop ? '30vw' : '70vw'} width={desktop ? '30vw' : '70vw'} src={courseDetailsPic} />
        </div>
      </LazyLoad>
      <LazyLoad height={200} once >
        <div className={classes.details} style={{direction: 'rtl'}}>
          <Typography paragraph variant="h3">
            {`פרטים על הקורס וכאלה`}
          </Typography>
          <Typography variant="h5">
            {`למי הוא מיועד?`}
          </Typography>
          <Typography paragraph variant="h6">
            {`יכול להיות מיועד לכל מיני אנשים`}
          </Typography>
          <Typography variant="h5">
            {`מה להכין?`}
          </Typography>
          <Typography paragraph variant="h6">
            {`שירים יפים מהאימיול`}
          </Typography>
          <Typography variant="h5">
            {`אז מה נשאר?`}
          </Typography>
          <Typography paragraph variant="h6">
            {`יאללה תביאו קונטרולר ובואו`}
          </Typography>
        </div>
      </LazyLoad>
    </div>
  )
}))
