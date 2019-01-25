import React from 'react';
import PropTypes from 'prop-types';
import { withStyles,withTheme } from '@material-ui/core/styles';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
        textTransform:'uppercase'
    },
};

function NavBar(props) {
    const { classes } = props;
    const page = props.page === "Login" ? "Register" : (props.page !== "Register" ? "Logout" : "Login"); 
    const link = (page === "Login" || page === "Logout" ? '' : page.toLowerCase());
    return <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              Sound Shinobi
            </Typography>
                <Link href={`/${link}`}>
                    <Button aria-label={page} color="inherit">
                        {page}
                    </Button>
                </Link>
          </Toolbar>
        </AppBar>
      </div>;
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withTheme()(withStyles(styles)(NavBar));
