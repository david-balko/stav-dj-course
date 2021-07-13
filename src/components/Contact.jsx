import { makeStyles, Typography, Button, InputBase, Paper, useTheme, useMediaQuery, Snackbar, IconButton } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { useState } from "react";
import contactBackground from '../assets/contact-background.jpg'
import CloseIcon from '@material-ui/icons/Close';

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
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    // alignItems: 'center',
  },
  cycleRow: {
    display: 'flex',
    '& > *:first-child': {
      marginLeft: theme.spacing(2)
    }
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
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  contactMe: {
    width: '35%',
    textAlign: 'right',
    '& > *': {
      margin: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
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
      flexDirection: 'column',
      width: '100%'
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
  },
  price: {
    alignSelf: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      alignSelf: 'center',
      textAlign: 'center'
    },
  },
  snackbar: {
    direction: 'rtl',
    
  }

}))

export const Contact = inject()(observer((props) =>  {

  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('sm'))

  const [snackbar, setSnackbar] = useState(false)

  const sendUserInfo = () => {
    setSnackbar(true)
  }

  const handleClose = () => {
    setSnackbar(false)
  }

  const classes = useStyles()

  return (
    <div id="contact" className={classes.contact}>
      <Typography variant="h3">{`בקיצור,`}</Typography>
      <div className={classes.text}>
        <div className={classes.cyclesAndPrice}>
          <div className={classes.cycles}>
            <div>
              <Typography variant="h4">{`מחזור #1`}</Typography>
              <div className={classes.cycleRow}>
                <Typography variant="h6">{`ג' 03.08`}</Typography>
                <Typography variant="h6">{`ג' 10.08`}</Typography>
              </div>
              <div className={classes.cycleRow}>
                <Typography variant="h6">{`ג' 17.08`}</Typography>
                <Typography variant="h6">{`ג' 24.08`}</Typography>
              </div>
              <div className={classes.cycleRow}>
                <Typography variant="h6">{`ג' 31.08`}</Typography>
                <Typography variant="h6">{`ג' 14.09`}</Typography>
              </div>
              <div className={classes.cycleRow}>
                <Typography variant="h6">{`ג' 05.10`}</Typography>
                <Typography variant="h6">{`ג' 12.10`}</Typography>
              </div>
              <div className={classes.cycleRow}>
                <Typography variant="h6">{`ג׳ 19.10`}</Typography>
                <Typography variant="h6">{`ג' 26.10`}</Typography>
              </div>
            </div>
            {/* <div>
              <Typography variant="h4">{`מחזור #2`}</Typography>
              <Typography variant="h6">{`ג' 5.5`}</Typography>
              <Typography variant="h6">{`ג' 5.5`}</Typography>
              <Typography variant="h6">{`ג' 5.5`}</Typography>
              <Typography variant="h6">{`ג' 5.5`}</Typography>
              <Typography variant="h6">{`ג' 5.5`}</Typography>
              <Typography variant="h6">{`ג' 5.5`}</Typography>
              <Typography variant="h6">{`ג' 5.5`}</Typography>
              <Typography variant="h6">{`ג' 5.5`}</Typography>
            </div> */}
          </div>
          <div className={classes.price}>
            <Typography variant={desktop ? "h4" : "h5"}>{`באופן חד פעמי בזמן הפיילוט עלות הקורס 2000 שקלים.`}</Typography>
          </div>
        </div>
        
        <div className={classes.form}>
          <Typography variant={desktop ? "h4" : "h5"}>
            {`כבר מההתלבטויות הראשונות שלך אני איתך פשוט דברו איתי.`}
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
            <Button onClick={sendUserInfo} color="primary" size="large" className={classes.button} variant="contained">שלח</Button>
          </div>
        </div>
        <div className={classes.contactMe}>
          <Typography variant={desktop ? "h4" : "h5"}>
            {`גם כאן אפשר:`}
          </Typography>
          <Typography variant={desktop ? "h4" : "h5"}>
            {`RonRambell@gmail.com`}
          </Typography>
          <Typography variant={desktop ? "h4" : "h5"}>
            {`0502277684`}
          </Typography>
        </div>

        
      </div>
      <Snackbar
        className={classes.snackbar}
        open={snackbar}
        autoHideDuration={4000}
        onClose={handleClose}
        message="הפרטים נשלחו, תודה! :)"
        // action={
        //   <>
        //     <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        //       <CloseIcon fontSize="small" />
        //     </IconButton>
        //   </>
        // }
      />
    </div>
  )
}))
