// Export Constants
export const UPDATE_FORMTYPEHEADER = 'UPDATE_FORMTYPEHEADER';
// Export Actions
export function changeFormDisplay(displayForm) {
  console.log("this is changeform display" );    
  return {
   type : UPDATE_FORMTYPEHEADER,
   displayForm                                // this is same as newItem : newItem in ES6
  }        
}


export function changeType(name) {
  
  return dispatch => {
    dispatch(changeFormDisplay(name));
  
   }
}