import React, { Component } from 'react'
import Affix from 'react-overlays/lib/Affix'
import { Scrollbars } from 'react-custom-scrollbars';
import Collapsible from 'react-collapsible';

const renameStatus = (status) => {
    switch (status) {
        case 'new':
            return 'New';
        case 'inProgress':
            return 'In progress';
        case 'done':
            return 'Done';
        default:
            return status;
    }
}

class ParentIssueInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        const formatDate = (date) => {
            return (new Date(date)).toLocaleString()
        }

        return (
            <div>
                {this.props.issues.map(issue =>
                    <div key={issue.id} className="issueinfo">
                        <div>
                            <Affix container={this}>
                                <div className="issueinfo-header">
                                    <h5>Projectname / <a href="#">TASK-{issue.id}</a></h5>
                                    <p>Item creation</p>
                                </div>
                            </Affix>
                            <Scrollbars style={{ height: 300 }}>
                                <Collapsible trigger={'Details'}>
                                    <div className="detail"></div>
                                </Collapsible>
                                <Collapsible trigger={'Details'}>
                                    <div className="people"></div>
                                </Collapsible>
                                <Collapsible trigger={'Dates'}>
                                    <div className="dates"></div>
                                </Collapsible>
                                <Collapsible trigger={'Sub-Tasks'}>
                                    <div className="subtasks"></div>
                                </Collapsible>
                            </Scrollbars>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default ParentIssueInfo