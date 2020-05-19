import React from 'react';
import { NavLink } from 'react-router-dom';

const NavTabs = (props) => {
    const { tabs } = props

    return (
        <ul className="nav nav-tabs">
            {tabs.map(tab =>
                <li key={tab.path} className="nav-item">
                    <NavLink to={tab.path} className="nav-link">
                        {tab.tabName}
                    </NavLink>
                </li>
            )}
        </ul>
    )
}

export default NavTabs;
