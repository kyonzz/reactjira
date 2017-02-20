import React, { Component } from 'react'

const arrows = {
    Hightest: <p style={{ 'color': 'red' }}><span><b>↑</b></span></p>,
    Hight: <p style={{ 'color': 'orange' }}><span><b>↗</b></span></p>,
    Low: <p style={{ 'color': 'blue' }}><span><b>→</b></span></p>,
    Lowest: <p style={{ 'color': 'black' }}><span><b>↓</b></span></p>
}

class Issue extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="issuecard" key={this.props.id} classID={this.props.id} onClick={this.props.onClick}>
                <tbody>
                    <tr>
                        <td className="priority">
                            <div>
                                {arrows[this.props.priority]}
                            </div>
                        </td>
                        <td className="task">
                            <div className="taskinfo">
                                <h3 className="taskname">{this.props.name}</h3>
                                <p className="issuetitle">{this.props.title}</p>
                            </div>
                        </td>
                        <td className="avatar">
                            <div>
                                <img className="avatarImage" src={this.props.assignee ? this.props.assignee.avatarURL : 'http://1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png'} alt={this.props.assignee.name} />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Issue