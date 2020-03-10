import react from "react";
import Sessions from './Components/Sessions/Sessions';
import Sessiondetails from './Components/Sessiondetails/Sessiondetails'
import { Switch, Route } from "react-router-dom";


export default (
    <Switch>
        <Route exact path="/" component={Sessions}/>
        <Route path='/sessiondetails' component={Sessiondetails}/>
    </Switch>
)