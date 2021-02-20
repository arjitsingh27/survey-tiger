import logo from './logo.svg';
import './App.css';
import Image from './component/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import SurveyBtn from './component/SurveyBtn';
import Takesurvey from './component/Takesurvey'
import Creatsurvey from './component/CreatSurvey'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Multiselect from './component/Multiselect';
import Singleselect from './component/Singleselect';


function App() {
  return (
    <BrowserRouter >
            <div className="app">
                <img src="surveyTiger.png" />
                <Switch>
                    <Route path="/" exact component={SurveyBtn} />
                    <Route path="/createsurvey" component={Creatsurvey} />
                    <Route path="/takesurvey" component={Takesurvey} />
                    <Route path="/multiselect" exact component={Multiselect} />
                    <Route path="/singleselect" exact component={Singleselect} />

                </Switch>
            </div>
        </BrowserRouter>
  );
}

export default App;
