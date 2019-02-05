import React, { Component } from 'react';
import ChirpConnect from "chirp-js-sdk";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import RollTable from '../components/Table';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Navbar from '../components/Navbar';
import Divider from '@material-ui/core/Divider';

import { loadFirebase } from '../lib/firebase_client';
import firebase from "firebase/app";
import "firebase/auth";
import Router from 'next/router';

import Loader from '../components/Loading';

const styles = theme => ({
    head: {
        textAlign: 'center'
    },
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    mainHeader: {
        textTransform: 'uppercase',
        textAlign: 'center',
        transform: 'translateY(5vh)'
    },
    sub1Header: {
        marginTop: '5rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '2px'
    },
    sub2Header: {
        color: 'grey',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '2px'
    },
    divider: {
        width: '80%',
        transform: 'translateX(12%)'
    },
    grid: {
        flexGrow: 1,
        marginTop: '5vh',
        minHeight: '60vh'
    }
});

class Attendance extends Component {
  constructor() {
    super();
    this.state = {
        user: ''
    }
  }

  static async getInitialProps({ req,res,query }) {
        return {
            query
        }
    }

<<<<<<< HEAD
    componentDidMount() {
        const chirp = new ChirpConnect("FA3baAfbDBc9E2E9a8A352536");
        const payload = new Uint8Array([1, 2, 3, 4])
        chirp.send(payload, err => err ?
            console.error("An error occured") :
            true
        )
    }
=======
  componentDidMount() {
      loadFirebase().auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    ...this.state,
                    user: user 
                })
                return user
                    .getIdToken()
                    .then(token => {
                        return fetch('/api/login', {
                            method: 'POST',
                            headers: new Headers({ 'Content-Type': 'application/json' }),
                            credentials: 'same-origin',
                            body: JSON.stringify({ token })
                        })
                    })
            } else {
                Router.push('/');
            }
        })
        const chirp = new ChirpConnect(YOUR_API_KEY);
        const payload = new Uint8Array([1,2,7,8,0])
        chirp.send(payload, err => {
            err ? console.error("An error occured") : true
        })
  }
>>>>>>> auth

  handleLogout() {
    loadFirebase()
      .auth()
      .signOut();
  }

<<<<<<< HEAD
        const dateObjParam = new Date();

        const dayIndex = Math.floor(((new Date(dateObjParam.getFullYear(), dateObjParam.getMonth(), dateObjParam.getDate()).getTime() - new Date(2019, 0, 29).getTime()) / (24 * 60 * 60 * 1000)));
=======
  render() {
    const { classes } = this.props;
    const courseDetails = {
      ...this.props.query
    };
    const dateObjParam = new Date();
    const numberOfDays = Math.floor(
      (new Date(
        dateObjParam.getFullYear(),
        dateObjParam.getMonth(),
        dateObjParam.getDate()
      ).getTime() -
        new Date(2019, 0, 29).getTime()) /
        (24 * 60 * 60 * 1000)
    );
>>>>>>> auth

    return (
        <React.Fragment>
<<<<<<< HEAD
            <Navbar page="Attendance" />
            <Typography
                component="h3"
                variant="h3"
                gutterBottom
                className={classes.mainHeader}
            >
            {courseDetails.name}
            </Typography>
            <Typography
                component="h5"
                variant="h5"
                gutterBottom
                className={classes.sub1Header}
            >
            {`${courseDetails.code.substr(0,6)} | section - ${courseDetails.code.substr(7,)}`}
            </Typography>
            <Typography
                component="h6"
                variant="h6"
                gutterBottom
                className={classes.sub2Header}
            >
            {`Semester ${courseDetails.sem} | Year ${courseDetails.year}`}
            </Typography>
            <Divider className={classes.divider} />
            <Grid
                className={classes.grid}
                container
                spacing={0}
                justify="space-around"
            >
            <Grid item>
                <RollTable dayIndex={dayIndex} courseCode={courseDetails.code} tdata={this.props.courses} />
            </Grid>
            </Grid>
=======
            {
                this.state.user === '' ? <Loader /> : 
                    (
                    <React.Fragment>
                    <Navbar page="Attendance" handleLogout={this.handleLogout.bind(this)} />
                    <Typography
                    component="h3"
                    variant="h3"
                    gutterBottom
                    className={classes.mainHeader}
                    >
                    {decodeURIComponent(courseDetails.name)}
                    </Typography>
                    <Typography
                    component="h5"
                    variant="h5"
                    gutterBottom
                    className={classes.sub1Header}
                    >
                    {`${courseDetails.code.substr(0,6)} | section - ${courseDetails.code.substr(7)}`}
                    </Typography>
                    <Typography
                    component="h6"
                    variant="h6"
                    gutterBottom
                    className={classes.sub2Header}
                    >
                    {`Semester ${courseDetails.sem} | Year ${courseDetails.year}`}
                    </Typography>
                    <Divider className={classes.divider} />
                    <Grid
                    className={classes.grid}
                    container
                    spacing={0}
                    justify="space-around"
                    >
                        <Grid item>
                            <RollTable
                            dayIndex={numberOfDays}
                            courseCode={courseDetails.code}
                            tdata={this.props.courses}
                            />
                        </Grid>
                    </Grid>
                </React.Fragment>) 
            } 
>>>>>>> auth
        </React.Fragment>
    );
  }
}

Attendance.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Attendance);