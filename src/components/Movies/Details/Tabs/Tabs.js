import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavTabs from '../../../UI/NavTabs/NavTabs';
import Details from './Details/Details';
import Videos from './Videos/Videos';
import Actors from './Actors/Actors';

import classes from './Tabs.module.css';

const Tabs = (props) => {
    const tabs = [
        {tabName: 'Details', path: 'details'},
        {tabName: 'Videos', path: 'videos'},
        {tabName: 'Actors', path: 'actors'}
    ]

    return (
        <div className={`col-8 ${classes.Tabs}`}>
            <NavTabs tabs={tabs} />
            <div className="tab-content">
                <Switch>
                    <Route path="/movie/:id/details" component={Details} />
                    <Route path="/movie/:id/videos" component={Videos} />
                    <Route path="/movie/:id/actors" component={Actors} />
                </Switch>
            </div>
        </div>
    )
}

export default Tabs;
