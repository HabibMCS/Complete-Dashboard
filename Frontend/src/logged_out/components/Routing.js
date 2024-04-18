import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import Login from "./Login/Login";
import AboutPage from "./About/about";
import useLocationBlocker from "../../shared/functions/useLocationBlocker";
import Dashboard from "./Dashboard/Dashboard";
import AppLayout from "../../layout/AppLayout";
import WeeklyReports from "../../Pages/WeeklyReport";

function Routing(props) {
  const { selectHome, selectLogin, selectAbout } = props;
  useLocationBlocker();
  return (
    <Switch>
      
        <PropsRoute path="/login" component={Login} selectLogin={selectLogin} />
        <PropsRoute
          path="/about"
          component={AboutPage}
          selectLogin={selectAbout}
        />
         <PropsRoute path="/WeeklyReport" component={WeeklyReports}  />
        <PropsRoute path="/dashboard" component={Dashboard} />
        <PropsRoute path="/" component={Home} selectHome={selectHome} />
        
  


    </Switch>
  );
}

Routing.propTypes = {
  selectHome: PropTypes.func.isRequired,
  selectLogin: PropTypes.func.isRequired,
  selectAbout: PropTypes.func.isRequired,
};

export default memo(Routing);
