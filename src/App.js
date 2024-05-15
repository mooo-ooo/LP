import {BrowserView, MobileView} from 'react-device-detect';
import Web from './Web'
import Mobile from './Mobile'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return <>
    <BrowserView>
      <CssBaseline />
        <Web/>
    </BrowserView>
    <MobileView>
        <Mobile/>
    </MobileView>
  </>
}

export default App;
