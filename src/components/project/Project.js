import React, { Fragment } from 'react';
import Header from '../common/header/Header';
import Card from '../common/card/Card';
function Project (){
    return (
        <Fragment>
            <Header/>
            <div className="heading-container">
                <div className="project-heading-container"><h2 className="project-heading">ALL PROJECTS</h2></div>
                <Card/>
            </div>
            
        </Fragment>
    )
}

export default Project;