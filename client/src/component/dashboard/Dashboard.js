import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import Navbar from "../layout/Navbar2";
import Header from "../layout/header";
import SideDrawer from "../layout/SideDrawer2";
import Backdrop from "../layout/Backdrop";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  const [sideDrawerOpen, backdropClickHandler] = useState(false);
  let sidedrawer;
  let backdrop;
  if (sideDrawerOpen) {
    sidedrawer = <SideDrawer />;
    backdrop = <Backdrop click={() => backdropClickHandler(!sideDrawerOpen)} />;
  }
  return (
    <div style = {{backgroundColor: 'aliceblue', minHeight: '100vh'}}>
    <Fragment>
      <Header
          drawerClickHandler={() => backdropClickHandler(!sideDrawerOpen)}
        />
      {sidedrawer}
      {backdrop}
      <Navbar />
      <br />
      <br />
      <br />
      <h1 className="large text-primary" style = {{color: 'rgb(87, 86, 42)'}}>Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
    </Fragment>
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
