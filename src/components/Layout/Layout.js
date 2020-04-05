import React, { Component } from "react"
// import Aux from "../../hoc/Aux"
import Support from "../../Support/Support"
import Toolbar from "../Navigation/Toolbar/Toolbar"
// import "./Layout.css"
import classes from "./Layout.module.css"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"


class Layout extends Component{

    state = {
        showSideDrawer: false
    } 

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render() {
        return(
            <Support>
                {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer}  
                    closed={this.sideDrawerClosedHandler} 
                    />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Support>

        )
    }
} 

export default Layout