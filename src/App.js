import {Routes, Route} from "react-router-dom";
import './App.css';
import './static/css/common.css';
import './static/css/main.css';
import './static/css/sub.css';
import Main from './component/Main';
import BexcoPage from './view/about/BexcoPage';
import VisionPage from './view/about/VisionPage';
import CiPage from './view/about/CiPage';
import HistoryPage from './view/about/HistoryPage';
import PerformancePage from './view/about/PerformancePage';
import BexcoEsgPage from './view/esg/BexcoEsgPage';
import EthicalPage from './view/esg/EthicalPage';
import HumanRightsPage from './view/esg/HumanRightsPage';
import SafetyHealthPage from './view/esg/SafetyHealthPage';
import LocationPage from './view/LocationPage';
import FacilityPage from "./view/FacilityPage";
import EventPage from "./view/EventPage";
import InfoPage from "./view/InfoPage";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/about/bexco' element={<BexcoPage />}></Route>
          <Route path='/about/vision' element={<VisionPage />}></Route>
          <Route path='/about/ci' element={<CiPage />}></Route>
          <Route path='/about/history' element={<HistoryPage />}></Route>
          <Route path='/about/performance' element={<PerformancePage />}></Route>
          <Route path='/esg/esg' element={<BexcoEsgPage />}></Route>
          <Route path='/esg/ethical' element={<EthicalPage />}></Route>
          <Route path='/esg/humanRights' element={<HumanRightsPage />}></Route>
          <Route path='/esg/safetyHealth' element={<SafetyHealthPage />}></Route>
          <Route path='/location' element={<LocationPage />}></Route>
          <Route path='/facility' element={<FacilityPage />}></Route>
          <Route path='/event' element={<EventPage />}></Route>
          <Route path='/info' element={<InfoPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
