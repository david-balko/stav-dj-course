import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import { CourseDetails } from './components/CourseDetails';
import { Welcome } from './components/Welcome';
import { Syllabus } from './components/Syllabus';
import { Contact } from './components/Contact';
import { Instructor } from './components/Instructor';

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     // main: purple[500],
  //   },
  //   secondary: {
  //     // main: green[500],
  //   },
  // },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1280,
      xl: 1920,
      phone: 0,
      tablet: 600,
      desktop: 768,

    },
  },
  typography: {
    h2: {
      // fontFamily: `'Inter', sans-serif;`
      fontFamily: 'Inter',
      fontWeight: 800
    },
    h4: {
      fontFamily: 'Inter',
    },
    h3: {
      fontSize: 30,
      fontWeight: 700
    },
    body2: {
      fontSize: 17,
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Welcome />
        <CourseDetails />
        <Syllabus />
        <Contact />
        <Instructor />
      </div>
    </ThemeProvider>
  );
}

export default App;
