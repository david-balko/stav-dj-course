import { makeStyles, Typography, Button, InputBase, Paper, useTheme, useMediaQuery, Snackbar, IconButton } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { useState } from "react";
import emailjs from 'emailjs-com';
import validator from "validator";
import contactBackground from '../assets/contact-background.jpg'
import CloseIcon from '@material-ui/icons/Close';
import{ init } from 'emailjs-com';

init("user_Yot4vNSw7IyITx5P1TaGG");

const lessonDates = [
  `ד' 20.10`,
  `ד' 27.10`,
  `ד' 03.11`,
  `ד' 10.11`,
  `ד' 17.11`,
  `ד' 24.11`,
  `ד' 01.12`,
  `ד' 08.12`,
  `ד' 15.12`,
  `ד' 22.12`,
  `ד' 29.12`
]

const useStyles = makeStyles(theme => ({
  contact: {
    // background: 'linear-gradient(147deg, #03071e 0%, #faa307 100%);',
    // background: `linear-gradient(rgba(157, 78, 221, 0.60), rgba(157, 78, 221, 0.60)), url(${contactBackground})`,
    // backgroundColor: '#EAE0CC',
    backgroundColor: '#ffbd9c',
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
    },
    color: 'white'
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
    justifyContent: 'space-around',
    '& > *:first-child': {
      marginLeft: theme.spacing(2)
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  cycles: {
    display: 'flex',
    flexDirection: 'row',
    '& > *': {
      margin: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      '& > *': {
        marginBottom: theme.spacing(2),
      },
    },
    marginRight: theme.spacing(6),
  },
  cyclesAndPrice: {
    width: '30%',
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
  contactMe: {
    marginRight: theme.spacing(2),
    width: '35%',
    textAlign: 'right',
    '& > *': {
      margin: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'center',
      marginRight: 0,
      '& > *': {
        marginLeft: 0,
        marginRight: 0
      },
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
      width: '100%',
      '& > :first-child': {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(2)
      },
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
    boxShadow: `0 0 10px #9e85cc`,
    color: 'white'
  },
  price: {
    width: "90%",
    alignSelf: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      alignSelf: 'center',
      textAlign: 'center'
    },
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center'
  },
  cycleHeader: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2)
    },
    marginBottom: theme.spacing(3.5),
    alignSelf: 'center'
  },
  snackbar: {
    direction: 'rtl',
    
  }

}))

export const Contact = inject()(observer((props) =>  {

  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('sm'))

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [content, setContent] = useState('')

  const [snackbar, setSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')


  const sendUserInfo = () => {
    try {
      if (email === '' || name === '' || phone === '') {
        setSnackbarMessage('אנא הכניסו את האימייל, השם והטלפון שלכם')
        setSnackbar(true)
        return
      }
      if (!validator.isEmail(email)) {
        setSnackbarMessage('אנא וודאו שכתובת המייל תקינה')
        setSnackbar(true)
        return
      }
      emailjs.send("service_yid1b4o","template_d003zyi",{
        email,
        name,
        phone,
        content,
        });
      setSnackbarMessage('הפרטים נשלחו בהצלחה!')
      setSnackbar(true)
    }
    catch {
      setSnackbarMessage('משהו השתבש, אנא נסו שנית מאוחר יותר')
      setSnackbar(true)
    }
  }

  const handleClose = () => {
    setSnackbar(false)
  }

  const classes = useStyles()
  const numRows = 6

  return (
    <div id="contact" className={classes.contact}>
      <Typography variant={desktop ? "h3" : "h4"}>{`בקיצור,`}</Typography>
      <div className={classes.text}>
        <div className={classes.cyclesAndPrice}>
          <div className={classes.cycles}>
            <div style={{display: 'flex', flexDirection: 'column', }}>
              <Typography className={classes.cycleHeader} paragraph variant={desktop ? "h4" : "h5"}>{`מחזור #2`}</Typography>
              <div className={classes.cycleRow}>
                <Typography variant="h6">{lessonDates[0]}</Typography>
                <Typography variant="h6">{lessonDates[0 + numRows]}</Typography>
              </div>
              <div className={classes.cycleRow}>
              <Typography variant="h6">{lessonDates[1]}</Typography>
                <Typography variant="h6">{lessonDates[1 + numRows]}</Typography>
              </div>
              <div className={classes.cycleRow}>
              <Typography variant="h6">{lessonDates[2]}</Typography>
                <Typography variant="h6">{lessonDates[2 + numRows]}</Typography>
              </div>
              <div className={classes.cycleRow}>
                <Typography variant="h6">{lessonDates[3]}</Typography>
                <Typography variant="h6">{lessonDates[3 + numRows]}</Typography>
              </div>
              <div className={classes.cycleRow}>
              <Typography variant="h6">{lessonDates[4]}</Typography>
                <Typography variant="h6">{lessonDates[4 + numRows]}</Typography>
              </div>
              <div className={classes.cycleRow}>
                <Typography variant="h6">{lessonDates[5]}</Typography>
                  <div>
                    <Typography variant="h6">{`מסיבת סיום`}</Typography>
                  </div>
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
            <Typography variant={desktop ? "h5" : "h6"}>{`עלות הקורס 2600 ש״ח.`}</Typography>
            <Typography variant={desktop ? "h5" : "h6"}>{`11 מפגשים ומסיבת סיום ביג!`}</Typography>
          </div>
        </div>
        
        <div className={classes.form}>
          <Typography variant={desktop ? "h4" : "h5"}>
            {`לקביעת מפגש התאמה`}
          </Typography>
          <div className={classes.inputs}>
            <Paper style={{padding: 5}}>
              <InputBase value={name} onChange={({ target }) => setName(target.value)} variant="outlined" placeholder="שם" />
            </Paper>
            <Paper style={{padding: 5}}>
              <InputBase value={email} onChange={({ target }) => setEmail(target.value)} variant="outlined" placeholder="אימייל" />
            </Paper>
            <Paper style={{padding: 5}}>
              <InputBase value={phone} onChange={({ target }) => setPhone(target.value)} variant="outlined" placeholder="טלפון" />
            </Paper>
            <Paper style={{padding: 5}}>
              <InputBase value={content} onChange={({ target }) => setContent(target.value)} multiline={true} rows={3} variant="outlined" placeholder="קצת על עצמכם" />
            </Paper>
            <Button onClick={sendUserInfo} color="secondary" size="large" className={classes.button} variant="contained">שלח</Button>
          </div>
        </div>
        <div className={classes.contactMe}>
          <Typography variant={desktop ? "h4" : "h5"}>
            {`אפשר גם כאן:`}
          </Typography>
          <Typography variant={desktop ? "h4" : "h5"}>
            {`RonRambell@gmail.com`}
          </Typography>
          <Typography variant={desktop ? "h4" : "h5"}>
            {`050-2277684`}
          </Typography>
        </div>

        
      </div>
      <Snackbar
        className={classes.snackbar}
        open={snackbar}
        autoHideDuration={4000}
        onClose={handleClose}
        message={snackbarMessage}
      />
    </div>
  )
}))
