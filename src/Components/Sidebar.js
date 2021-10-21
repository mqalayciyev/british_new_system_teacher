import React, { useState, useEffect } from 'react';
import img from '../img/profile.jpg';
import axios from 'axios';
import { Link, useLocation  } from "react-router-dom";

function Sidebar(params) {

    const [count, setCount] = useState();

    // useEffect(() => {
    //     setInterval(async function () {

    //         console.log(new Date());
    //         let teacher = JSON.parse(localStorage.getItem('teacher'))
    //         axios.interceptors.request.use(
    //             config => {
    //                 config.headers.authorization = `Bearer ${teacher.user.token}`;
    //                 return config;
    //             },
    //             error => {
    //                 return Promise.reject(error)
    //             }
    //         )
    //         let response = await axios.get(`http://127.0.0.1:8000/api/teachers/count-messages`)

    //         if (response.data.status === 'success') {
    //             setCount(response.data.count)
    //         }
    //     }, 60000);
    // });
    
    const location = useLocation();

    const { pathname } = location;

    let teacher = JSON.parse(localStorage.getItem('teacher'))

    const splitLocation = pathname.split("/");
    return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">

                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={teacher.user.user_info.image ? teacher.user.user_info.image : img} className="img-circle elevation-2" alt="user" />
                            {/* <img src="{user2}" className="img-circle elevation-2" alt="user" /> */}
                        </div>
                        <div className="info">
                            <Link to="/Profile" className="d-block">{`${teacher.user.user_info.first_name} ${teacher.user.user_info.last_name}`}</Link>
                        </div>
                    </div>

                    <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                        <Link to="/" className={splitLocation[1] === "" || splitLocation[1] === 'TasksCompleted' || splitLocation[1] === 'TasksActual' ? "nav-link active" : "nav-link"}>
                            <i className="nav-icon fa fa-list-alt"></i>
                                <p> My tasks </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Lead" className={splitLocation[1] === "Lead" ? "nav-link active" : "nav-link"}> 
                                <i className="nav-icon far fa-user"></i>
                                <p>
                                 Leads
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Messages" className={splitLocation[1] === "Messages" ? "nav-link active" : "nav-link"}> 
                                <i className="nav-icon far fa-envelope"></i>
                                <p>
                                 Messages {count ? <span className="badge badge-danger">{count}</span> : ''}
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">
                                <i className="nav-icon fas fa-home"></i>
                                <p>
                                Company
                                <i className="right fas fa-angle-left"></i>
                                </p>
                            </Link>
                            
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to="/AdministrativeStaff" className={splitLocation[1] === "AdministrativeStaff" ? "nav-link active" : "nav-link"}>
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Administrative Staff</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/CompanyTeachersAvailable" className={splitLocation[1] === "CompanyTeachersAvailable" ? "nav-link active" : "nav-link"}>
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Teachers available</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/CompanyCompanyAnnouncements" className={splitLocation[1] === "CompanyCompanyAnnouncements" ? "nav-link active" : "nav-link"}>
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Company announcements</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">
                                <i className="nav-icon fa fa-graduation-cap"></i>
                                <p>
                                Schooling
                                <i className="right fas fa-angle-left"></i>
                                </p>
                            </Link>
                            
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to="/SchoolingGroupLessons" className={splitLocation[1] === "SchoolingGroupLessons" ? "nav-link active" : "nav-link"}>
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>GroupLessons</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/SchoolingPrivateLessons" className={splitLocation[1] === "SchoolingPrivateLessons" ? "nav-link active" : "nav-link"}>
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Private lessons</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/SchoolingDemoLessons" className={splitLocation[1] === "SchoolingDemoLessons" ? "nav-link active" : "nav-link"}>
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Demo lessons</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/SchoolingExams" className={splitLocation[1] === "SchoolingExams" ? "nav-link active" : "nav-link"}>
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Exams</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/SchoolingAttendanceMap" className={splitLocation[1] === "SchoolingAttendanceMap" ? "nav-link active" : "nav-link"}>
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Attendance map</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">
                                <i className="nav-icon fa fa-tv"></i>
                                <p>
                                Online tutoring
                                <i className="right fas fa-angle-left"></i>
                                </p>
                            </Link>
                            
                            <ul className="nav nav-treeview open">
                                <li className="nav-item">
                                    <Link to="/OnlineTutoringMedia" className={splitLocation[1] === "OnlineTutoringMedia" ? "nav-link active" : "nav-link"}>
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Media</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/OnlineTutoringTests" className={splitLocation[1] === "OnlineTutoringTests" ? "nav-link active" : "nav-link"}>
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Tests</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link">
                                <i className="nav-icon far fa-calendar-alt"></i>
                                <p>
                                Scheduling
                                <i className="right fas fa-angle-left"></i>
                                </p>
                            </Link>
                            
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to="/SchedulingCalendar" className={splitLocation[1] === "SchedulingCalendar" ? "nav-link active" : "nav-link"}>
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Calendar</p>
                                    </Link>
                                </li>
                            </ul>
                        </li> */}
                        
                        <li className="nav-item">
                            <Link to="/Evaluation" className={splitLocation[1] === "Evaluation" ? "nav-link active" : "nav-link"}>
                                <i className="nav-icon fas fa-star-half-alt"></i>
                                <p>
                                Evaluation
                                </p>
                            </Link>
                        </li>
                    </ul>
                    </nav>
                </div>
            </aside>
    )
}

export default Sidebar;