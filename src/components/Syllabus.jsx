import { makeStyles, div, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import syllabusBackground from '../assets/syllabus-background.jpg'

const useStyles = makeStyles(theme => ({
  syllabus: {
    // background: 'linear-gradient(147deg, #03071e 0%, #faa307 100%);',
    background: `linear-gradient(rgba(255, 133, 0, 0.60), rgba(255, 133, 0, 0.60)), url(${syllabusBackground})`,
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
    width: '80vw',
    // color: '#faa307'
  }
}))

export const Syllabus = inject()(observer((props) =>  {

  const classes = useStyles()

  return (
    <div className={classes.syllabus}>
      <div className={classes.details} style={{direction: 'rtl'}}>
        <Typography style={{alignSelf: 'center'}} paragraph variant="h3">
          {`סילבוס`}
        </Typography>
        <Typography variant="h5">
          {`שיעור ראשון`}
        </Typography>
        <Typography variant="body2">
          {`- נעשה ככה`}
        </Typography>
        <Typography variant="body2">
          {`- נעשה גם ככה`}
        </Typography>
        <Typography paragraph variant="body2">
          {`- הכי טוב נעשה גם את זה`}
        </Typography>
        <Typography variant="h5">
          {`שיעור שני`}
        </Typography>
        <Typography variant="body2">
          {`- נתחיל מזה`}
        </Typography>
        <Typography variant="body2">
          {`- נמשיך בזה`}
        </Typography>
        <Typography paragraph variant="body2">
          {`- ואם נספיק נעשה גם ככה`}
        </Typography>

      </div>
    </div>
  )
}))
