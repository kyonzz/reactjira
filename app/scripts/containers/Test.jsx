import { connect } from 'react-redux'
import Test from '../components/Test'

const mapStateToProps = (state) => {
    return {
        selected: state.issue.selected
    }
}

export default connect(mapStateToProps)(Test)