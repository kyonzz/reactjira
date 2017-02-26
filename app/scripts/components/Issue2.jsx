import React, { Component } from 'react'

const arrows = {
  Hightest: <p style={{ 'color': 'red' }}><span><b>↑</b></span></p>,
  Hight: <p style={{ 'color': 'orange' }}><span><b>↗</b></span></p>,
  Low: <p style={{ 'color': 'blue' }}><span><b>→</b></span></p>,
  Lowest: <p style={{ 'color': 'black' }}><span><b>↓</b></span></p>
}
const statuses = {
  new: <span style={{ color: 'blue', border: '1px solid blue' }}>New</span >,
  inProgress: <span style={{ color: 'brown', border: '1px solid brown' }}>In progress</span>,
  done: <span style={{ color: 'green', border: '1px solid green' }}>Done</span>
}
class Issue2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="issuecard2" key={this.props.id} classID={this.props.id}>
        <tbody>
          <tr>
            <td>
              <div>

                <div className="idstatusavatar">

                  <div className="idstatus inline">
                    <p>TASK-{this.props.id} {statuses[this.props.status]} </p>
                  </div>

                  <div className="avatar inline right">
                    <img className="avatarImage" src={this.props.assignee ? this.props.assignee.avatarURL : 'http://1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png'} alt={this.props.assignee.name} />
                  </div>

                </div>

                <div>
                  <div className="issueTitle">
                    <p style={{ fontSize: '120%' }}>{this.props.title}</p>
                  </div>
                </div>

              </div>
            </td>
          </tr>
        </tbody>
      </table >
    )
  }
}

export default Issue2