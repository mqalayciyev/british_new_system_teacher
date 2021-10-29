import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './CSS/style.css'
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import BreadCrumb from './Components/BreadCrumb';
import MyTasks from './Components/MyTasks/MyTasks';
import Completed from './Components/MyTasks/Completed';
import Profile from './Components/Profile/Profile';
import Leads from './Components/Leads/Leads';
import Messages from './Components/Messages/Messages';
import Chat from './Components/Messages/Chat';

import TeachersAvailable from './Components/Company/TeachersAvailable';
import CompanyAnnouncements from './Components/Company/CompanyAnnouncements';
import AdministrativeStaff from './Components/Company/AdministrativeStaff';
import AttendanceMap from './Components/Schooling/AttendanceMap';
import GroupLessons from './Components/Schooling/GroupLessons';
import DemoLessons from './Components/Schooling/DemoLessons';
import Exams from './Components/Schooling/Exams';
import PrivateLessons from './Components/Schooling/PrivateLessons';
import Students from './Components/Schooling/Students';
import Media from './Components/OnlineTutoring/Media';
import TestsOnlineTutoring from './Components/OnlineTutoring/Tests';

import TeachersEvaluation from './Components/Evaluation/Teachers';

import NotFound from './NotFound';
import Notifications from './Components/Notifications'; 

import Footer from './Components/Footer';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';


class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        
        
        <Router>
        <Header />
          <Sidebar />
            <div className="content-wrapper">
                <BreadCrumb />
                <section className="content">
                    <div className="container-fluid">
                            <Switch>
                                <Route path={`/`} exact>
                                  <MyTasks page="actual" />
                                </Route>
                                <Route path={`/TasksActual`}>
                                  <MyTasks page="actual" />
                                </Route>
                                <Route path={`/TasksCompleted`}>
                                  <Completed page="completed" />
                                </Route>
                                <Route path={`/Profile`} component={Profile} />
                                <Route path={`/Lead`} component={Leads} />
                                <Route path={`/Messages`} component={Messages} exact />
                                <Route path={`/Messages/Chat/:id`} component={Chat} />
                                <Route path={`/AdministrativeStaff`} component={AdministrativeStaff} />
                                <Route path={`/CompanyTeachersAvailable`} component={TeachersAvailable} />
                                <Route path={`/CompanyCompanyAnnouncements`} component={CompanyAnnouncements} />

                                <Route path={`/SchoolingGroupLessons`} component={GroupLessons} />
                                <Route path={`/SchoolingPrivateLessons`} component={PrivateLessons} />
                                <Route path={`/SchoolingDemoLessons`} component={DemoLessons} />
                                <Route path={`/SchoolingExams`} component={Exams} />
                                <Route path={`/SchoolingAttendanceMap`} component={AttendanceMap} />
                                <Route path={`/Students`} component={Students} />

                                <Route path={`/OnlineTutoringTests`} component={TestsOnlineTutoring} />
                                <Route path={`/OnlineTutoringMedia`} component={Media} />



                                <Route path={`/Evaluation`} component={TeachersEvaluation} />
								                <Route path={`/Notifications`} component={Notifications} />
                                <Route component={NotFound} />
                            </Switch>
                    </div>
                </section>
            </div>
        </Router>
        <Footer />
      </div>
    );
    
  }
}

export default App;

