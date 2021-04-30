import { makeStyles, Typography, Button, InputBase, Paper } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import contactBackground from '../assets/contact-background.jpg'

const useStyles = makeStyles(theme => ({
  contact: {
    // background: 'linear-gradient(147deg, #03071e 0%, #faa307 100%);',
    // background: `linear-gradient(rgba(157, 78, 221, 0.60), rgba(157, 78, 221, 0.60)), url(${contactBackground})`,
    backgroundColor: 'rgb(137,136,223)',
    width: '100%',
    // height: '80vh',
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(2),
      flexGrow: 0,
      
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  }
}))

export const Contact = inject()(observer((props) =>  {

  const classes = useStyles()

  return (
    <div id="contact" className={classes.contact}>
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
        <Typography paragraph variant="h6">מוזמנים ליצור איתי קשר לגבי כל התייעצות גם אם מרגישה לכם קטנה, אני זמין עבורכם ופה בשבילכם כבר מהשלבים של ההתלבטויות הראשונות.</Typography>
      </div>
    </div>
  )
}))
