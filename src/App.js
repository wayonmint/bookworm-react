import React from "react";
import {Route} from "react-router-dom";
import Homepage from "./component/pages/Homepage";
import Loginpage from "./component/pages/Loginpage";

const App = () => (
 <div> 
    <Route path="/" exact component={Homepage} />
    <Route path="/login" exact component={Loginpage} />
 </div>

);

export default App; 