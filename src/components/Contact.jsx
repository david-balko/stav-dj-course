import { makeStyles, Typography, Button, InputBase, Paper, useTheme, useMediaQuery } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import contactBackground from '../assets/contact-background.jpg'

const useStyles = makeStyles(theme => ({
  contact: {
    // background: 'linear-gradient(147deg, #03071e 0%, #faa307 100%);',
    // background: `linear-gradient(rgba(157, 78, 221, 0.60), rgba(157, 78, 221, 0.60)), url(${contactBackground})`,
    backgroundColor: '#EAE0CC',
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
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      height: 'auto'
    },
    direction: 'rtl',
    '& > :first-child': {
      alignSelf: 'flex-start'
    }
  },
  details: {
  },
  text: {
    direction: 'rtl',
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
  },
  cycles: {
    display: 'flex',
    flexDirection: 'row',
    '& > *': {
      margin: theme.spacing(4),
    },
  },
  cyclesAndPrice: {
    width: '30%',
    textAlign: 'right'
  },
  contactMe: {
    width: '35%',
    textAlign: 'right',
    '& > *': {
      margin: theme.spacing(4),
    },
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    width: '35%'
  },
  inputs: {
    marginTop: -theme.spacing(2),
    '& > *': {
      margin: theme.spacing(2),
      '& > *': {
        width: '100%'
      }
    },
    width: '100%'
  },
  button: {
    fontSize: 25,
    direction: 'rtl',
    boxShadow: `0 0 20px #e55812`
  }

}))

export const Contact = inject()(observer((props) =>  {

  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('sm'))

  const classes = useStyles()

  return (
    <div id="contact" className={classes.contact}>
      <Typography variant="h3">{`בקיצור,`}</Typography>
      <div className={classes.text}>
        <div className={classes.cyclesAndPrice}>
          <div className={classes.cycles}>
            <div>
              <Typography variant="h4">{`מחזור #1`}</Typography>
              <Typography variant="h6">{`ד' 5.5`}</Typography>
              <Typography variant="h6">{`ד' 5.5`}</Typography>
              <Typography variant="h6">{`ד' 5.5`}</Typography>
              <Typography variant="h6">{`ד' 5.5`}</Typography>
              <Typography variant="h6">{`ד' 5.5`}</Typography>
              <Typography variant="h6">{`ד' 5.5`}</Typography>
              <Typography variant="h6">{`ד' 5.5`}</Typography>
              <Typography variant="h6">{`ד' 5.5`}</Typography>
            </div>
            <div>
              <Typography variant="h4">{`מחזור #2`}</Typography>
              <Typography variant="h6">{`ד' 5.5`}</Typography>
              <Typography variant="h6">{`ד' 5.5`}</Typography>
              <Typography variant="h6">{`ד' 5.5`}</Typography>
              <Typography variant="h6">{`ד' 5.5`}</Typography>
              <Typography variant="h6">{`ד' 5.5`}</Typography>
              <Typography variant="h6">{`ד' 5.5`}</Typography>
              <Typography variant="h6">{`ד' 5.5`}</Typography>
              <Typography variant="h6">{`ד' 5.5`}</Typography>
            </div>
          </div>
          <div style={{alignSelf: 'flex-start'}}>
            <Typography paragrapgh variant="h4">{`עלות הקורס: 2000 ש"ח`}</Typography>
          </div>
        </div>
        
        <div className={classes.contactMe}>
          <Typography variant="h4">
            {`מוזמנים ליצור איתי קשר לגבי כל התייעצות גם אם מרגישה לכם קטנה, אני זמין עבורכם ופה בשבילכם כבר מהשלבים של ההתלבטויות הראשונות.`}
          </Typography>
          <Typography variant="h4">
            {`באימייל: RonRambell@gmail.com`}
          </Typography>
          <Typography variant="h4">
            {`או בטלפון: 0502277684`}
          </Typography>
        </div>
        <div className={classes.form}>
        <Typography variant="h4">
            {`או שתשאירו פרטים ואני אחזור אליכם`}
          </Typography>
          <div className={classes.inputs}>
            <Paper style={{padding: 5}}>
              <InputBase variant="outlined" placeholder="שם" />
            </Paper>
            <Paper style={{padding: 5}}>
              <InputBase variant="outlined" placeholder="אימייל" />
            </Paper>
            <Paper style={{padding: 5}}>
              <InputBase variant="outlined" placeholder="טלפון" />
            </Paper>
            <Button color="primary" size="large" className={classes.button} variant="contained">שלח</Button>
          </div>
        </div>

        
      </div>
    </div>
  )
}))
