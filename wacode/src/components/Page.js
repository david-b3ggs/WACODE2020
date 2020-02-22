import React, { Component } from 'react';
import Dashboard from './Dashboard';

export class Page extends Component {
    render() {
        return (
            <div style={{backgroundColor: "gray"}}>
                <Dashboard />
            </div>
        )
    }
}

export default Page
