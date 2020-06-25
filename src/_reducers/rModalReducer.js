import { RModalVisSt, R_MODAL_VIS,rModalVis } from '../_actions/modalActions'

const rModalReducer= (state= RModalVisSt.NONE, action={rModalVis})=>{
 console.log("reducer called" );
  switch (action.type){
    case 'R_MODAL_VIS':
        console.log("action.vis"+action.vis);
      return action.vis;
    case'UPDATE_MODAL_DATA':
      return action.data;
    default:
      return state;
  }
}

export default rModalReducer