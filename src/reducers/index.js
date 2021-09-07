//step three : rootreducer
//there can be as many reducesrs as you like
//but we have to make rootreducer the rule of redux


//combining all reducers into one rootreducer (here we had to only make one )
//which will be passed to store finally then


import changeTheNumber from "./updown";
import multDivTheNumber from "./multdiv";
import { combineReducers } from "redux";






const rootReducer =combineReducers({

    changeTheNumber,
    multDivTheNumber
});

export default rootReducer;