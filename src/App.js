import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import './css/App.css';
import './css/reset.css';

import MainPage from './page/MainPage';
function App() {
  return (
    <RecoilRoot>
      <Router>
        <div>
          <MainPage />
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;




