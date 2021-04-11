import { makeStyles, Typography, Button, InputBase, Paper } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import contactBackground from '../assets/contact-background.jpg'

const useStyles = makeStyles(theme => ({
  contact: {
    // background: 'linear-gradient(147deg, #03071e 0%, #faa307 100%);',
    background: `linear-gradient(rgba(157, 78, 221, 0.60), rgba(157, 78, 221, 0.60)), url(${contactBackground})`,
    width: '100%',
    height: 'auto',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'space-around',
    '& > *': {
      margin: theme.spacing(2)
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      height: 'auto'
    }
  },
  details: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(5px)',
    // border: '1px solid #6A040F',
    borderRadius: 4,
    boxShadow: '0 0 2rem 0 rgba(0, 0, 0, 0.2)',
    padding: 15,
    
    // color: '#faa307'
  },
  text: {
    direction: 'rtl',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    '& > *': {
      margin: theme.spacing(2)
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  }
}))

export const Contact = inject()(observer((props) =>  {

  const classes = useStyles()

  return (
    <div className={classes.contact}>
      <Typography paragraph variant="h3">צרו קשר</Typography>
      <div className={classes.text}>
        <div className={classes.details}>
          <Typography paragraph variant="h6">0545555555 | email-tov@gmail.com</Typography>
          <Typography paragraph variant="h6">או שפשוט תשאירו פרטים:</Typography>
        </div>
        <div className={classes.form}>
          <Paper style={{padding: 5}}>
            <InputBase variant="outlined" placeholder="שם" />
          </Paper>
          <Paper style={{padding: 5}}>
            <InputBase variant="outlined" placeholder="אימייל" />
          </Paper>
          <Paper style={{padding: 5}}>
            <InputBase variant="outlined" placeholder="טלפון" />
          </Paper>
          <Button variant="contained">שלח</Button>
        </div>
      </div>
    </div>
  )
}))
