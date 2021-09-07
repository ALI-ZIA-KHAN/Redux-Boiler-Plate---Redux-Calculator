 //first step = Action 

//ACTION = WHAT TO DO IT THEN GOES TO REDUCER

//JTNE ACTION PERFORM KRNE HAIN WO SB YAHAN JESE PLUS AND MINUS

// export const incNumber = ()=>{
//     return{
//         type:"INCREMENT"     //WHEN incNnmber is called INCREMENT action has to be don
//     }
    
// }


export const incNumber = (num)=>{
    return{
        type:"INCREMENT",     //WHEN incNnmber is called INCREMENT action has to be don
        payload: num    //to get 5 in state 
        //now this payload or any other variable will call reducer
    }
    
}


export const decNumber = ()=>{
    return{
        type:"DECREMENT"
    }
    
}



export const multNumber = (num)=>{
    return{
        type:"MULTIPLICATION",     //WHEN incNnmber is called INCREMENT action has to be don
        payload: num     
        //now this payload or any other variable will call reducer
    }
    
}


export const divNumber = ()=>{
    return{
        type:"DIVISION"
    }
    
}