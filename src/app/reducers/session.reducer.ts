/*
* RxJS: SessionReducer
*
* In RxJS, the state is stored in a single object. A Reducer is used to 'reduce' the state object
* and return only the data we wish to use. 
* 
* This Reducer stores the user object. It is used my any component which needs to access, store or
* edit the users data.
* 
* This Reducer also uses the localStorage to store/retrieve the data so it is not lost when the page
* is refreshed.
*/

export function session(state, action) {
  switch (action.type) {
    case 'SET_SESSION':
      localStorage.removeItem('socialis-session');
      localStorage.setItem('socialis-session', JSON.stringify(action.payload));
      return action.payload;
    case 'REMOVE_SESSION':
      localStorage.removeItem('socialis-session');
      return action.payload;
    default:
      return JSON.parse(localStorage.getItem('socialis-session'));
  }
};
