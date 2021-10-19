import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import './App.css';
import { CourseDetails } from './components/CourseDetails';
import { Welcome } from './components/Welcome';
import { Syllabus } from './components/Syllabus';
import { Contact } from './components/Contact';
import { Instructor } from './components/Instructor';
import SecularOne from './fonts/SecularOne-Regular.ttf';
import Aran400 from './fonts/os_aran_400ffc-webfont.woff2';
import Aran500 from './fonts/os_aran_w_500ffc-webfont.woff2';
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

const aran400 = {
  fontFamily: 'Aran',
  fontStyle: 'normal',
  // fontDisplay: 'swap',
  // fontWeight: '600',
  src: `
    local('Aran'),
    local('Aran-Regular'),
    url(${Aran400}) format('truetype')
  `,
  unicodeRange:
    'U+0590-05FF, U+FB1D-FB4F',
};

const aran500 = {
  fontFamily: 'Aran',
  fontStyle: 'bold',
  // fontDisplay: 'swap',
  // fontWeight: '600',
  src: `
    local('Aran'),
    local('Aran-Bold'),
    url(${Aran500}) format('truetype')
  `,
  unicodeRange:
    'U+0590-05FF, U+FB1D-FB4F',
 };

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E55812',
    },
    secondary: {
      main: '#AB96D2'
    }
    
  },
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
    fontFamily: `Aran, Heebo, SecularOne, Roboto`,
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
        '@font-face': [secularOne, aran400, aran500],
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
        <Contact isFirst={true} />
        <Syllabus />
        <Instructor />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
