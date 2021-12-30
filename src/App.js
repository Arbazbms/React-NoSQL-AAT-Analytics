import "./App.css";
import {
  Switch,
  Route
} from "react-router-dom";
import CreateDoc from "./components/CreateDoc";
import UpdateDoc from "./components/UpdateDoc";
import ListData from "./components/listData";
import Analytics from "./components/analytics";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navb from './components/navbar';
// import ListData from './components/listData';

function App() {
  return (
      < > 
          <Switch>
              <Route path='/crud' exact component={ListData} />  
              <Route path='/createDoc' exact component={CreateDoc} />  
              <Route path='/updateDoc/:docId' exact component={UpdateDoc} />  
              <Route path='/analytics' exact component={Analytics} />  
          </Switch>      
      </>
  );
}

export default App;