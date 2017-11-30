// Export Constants

// Export Actions
import callApi from '../../util/apiCaller';





export function handleBook(bookData) {
    return dispatch => {
    
    return callApi('billing', 'post' {
        post: {
        billing: bookData,
        
      },
    })
      .then(response => response.status)
      .then(status => {
            if (status === 201) { 
            	
                console.log("in billing success");
                 
            }
        })
  }
}
