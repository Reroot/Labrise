import { connect } from 'react-redux'
import RModal from './RModal'
import { rModalVis,RModalVisSt } from '../../_actions/modalActions'


const mapStateToProps = (state,ownProps) => ({
  active: state.rModalReducer,
  data: state.data
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(rModalVis(RModalVisSt.NONE))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RModal)