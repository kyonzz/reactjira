import React, { Component } from 'react'

class CuteLoading extends Component {
    render() {
        return (
            <div className="loading" style={{ display: this.props.isLoading ? 'block' : 'none' }}>
                <img src={require(`assets/media/images/smallanimal.gif`)} alt={'cute'} />
                <h3 style={{ display: 'inline', color: 'lightblue' }}>Loading . . .</h3>
            </div>
        )
    }
}

export default CuteLoading