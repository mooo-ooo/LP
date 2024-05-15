import {BrowserView, MobileView} from 'react-device-detect';
import Web from './Web'
import Mobile from './Mobile'

function App() {
  return <>
    <BrowserView>
        <Web/>
    </BrowserView>
    <MobileView>
        <Mobile/>
    </MobileView>
  </>
}

export default App;
