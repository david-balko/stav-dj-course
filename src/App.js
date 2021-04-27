import { createMuiTheme, CssBaseline, ThemeProvider, Typography } from '@material-ui/core';
import './App.css';
import { CourseDetails } from './components/CourseDetails';
import { Welcome } from './components/Welcome';
import { Syllabus } from './components/Syllabus';
import { Contact } from './components/Contact';
import { Instructor } from './components/Instructor';
import SecularOne from './fonts/SecularOne-Regular.ttf';
import { Background2 } from './components/Background2';

const secularOne = {
  fontFamily: 'SecularOne',
  fontStyle: 'normal',
  // fontDisplay: 'swap',
  // fontWeight: '600',
  src: `
    local('SecularOne'),
    local('SecularOne-Regular'),
    url(${SecularOne}) format('truetype')
  `,
  unicodeRange:
    'U+0590-05FF, U+FB1D-FB4F',
 };

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
    fontFamily: `SecularOne, Roboto`,
    // h6: {
    //   fontSize: 
    // }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          outline: 'none',
        },
        '@font-face': [secularOne],
      },
    },
  },
})

function App() {


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Background2 />
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
