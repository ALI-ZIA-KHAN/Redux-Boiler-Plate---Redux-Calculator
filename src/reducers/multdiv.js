




const initialState = 15 ;   //defining initial state
const multDivTheNumber = (state=initialState,action)=>{     //state takes the initialstate, action=what to do
  switch(action.type){    //type is by def used to chk what type of action has to be done
                          //on your choice either to use switch or if else
      case "MULTIPLICATION": return state * action.payload;
      case "DIVISION": return state / 5 ;
      default : return state;
  }

}

export default multDivTheNumber ;