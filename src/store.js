//fourth step after defining what and how we have to store it somewhere that is store 

import { createStore } from "redux";

import rootReducer from "./reducers";


//createStore= creating a store and storing whole app data in it by rootReducer
//second argument is of github which was taken for just help using redux devtools extensions
const store = createStore(rootReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;