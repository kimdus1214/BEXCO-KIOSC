import './App.css';
import {Routes, Route} from "react-router-dom";
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
      </Routes>
    </div>
  );
}

export default App;
