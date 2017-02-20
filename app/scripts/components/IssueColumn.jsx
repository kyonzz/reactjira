import React, { Component } from 'react'
import Issue from './Issue'
import connect from 'react-redux'
import Sortable from 'sortablejs';
import { create } from 'apisauce'
import { selectIssue, selectGroupId, unselectGroupId } from '../actions'

const api = create({
    baseURL: 'http://localhost:1337',
    headers: { 'Accept': 'application/vnd.github.v3+json' }
})

const changestatus = (id, tostatus) => {
    api.put(`/issues/${id}`, { status: `${tostatus}` }).then(rs => console.log(rs))
}

class IssueColumn extends Component {
    constructor(props) {
        super(props);
    }

    sortableContainersDecorator(componentBackingInstance) {
        if (componentBackingInstance) {
            let options = {
                handle: ".group-title"
            };
            Sortable.create(componentBackingInstance, options);
        }
    };

    sortableGroupDecorator(componentBackingInstance) {
        if (componentBackingInstance) {
            let options = {
                handle: ".my-handle",
                draggable: "div",  // Specifies which items inside the element should be sortable
                group: "problem",
                filter:".what",
                onAdd: function (/**Event*/evt) {
                    let status = evt.to.parentElement.parentElement.className;
                    changestatus(evt.item.childNodes[0].getAttribute('classid'), status.split('column')[0]);
                },
                ghostClass: "ghost",
                animation: 150
            };
            Sortable.create(componentBackingInstance, options);
        }
    };

    render() {
        return (
            <div className="container1" ref={this.sortableContainersDecorator}>
                <div className="group-list" ref={this.sortableGroupDecorator}>
                    {this.props.issues.map(issue =>
                        <div className="group-list-item my-handle" key={issue.id} classID={issue.id} onDragStart={() => this.props.dispatch(selectGroupId(this.props.parent))} onDragEnd={() => this.props.dispatch(unselectGroupId())} >
                            <Issue key={issue.id} {...issue} onClick={() => this.props.dispatch(selectIssue(issue.id))} />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default IssueColumn