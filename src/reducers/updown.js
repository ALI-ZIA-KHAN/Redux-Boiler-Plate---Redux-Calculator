//Second step : Reducer

//After action How to do is defined in Reducer


const initialState = 10 ;   //defining initial state
const changeTheNumber = (state=initialState,action)=>{     //state takes the initialstate, action=what to do
  switch(action.type){    //type is by def used to chk what type of action has to be done
                          //on your choice either to use switch or if else
      case "INCREMENT": return state+action.payload;
      case "DECREMENT": return state-1;
      default : return state;
  }

}

export default changeTheNumber;