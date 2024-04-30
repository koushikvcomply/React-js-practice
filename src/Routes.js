import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
export default function Routes() {
    return(
        <div>
            <Route path="/home"><Home /></Route>
            <Route path="/about"><About /></Route>
        </div>
    )
}