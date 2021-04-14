import React, { Component } from 'react';
import Home from '../../Components/Home/Home';
import Introduce from '../../Components/Introduce/Introduce';
import Project from '../../Components/Project/Project';

class Page extends Component {
    displayPage = (no)=>{
        switch(no) {
            case 0:
                return <Home/>;
            case 1:
                return <Introduce/>;
            case 2:
                return <Project/>;
        }
    }

    render() {
        return <div>{this.displayPage(this.props.page)}</div>;
    }
}

export default Page;