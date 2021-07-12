const globalReducer = (state, action ) => {
	
	switch(action.type){
		case "SET DATA": 
			return {...state, fetchedData: action.payload}	
      case "SET DAILY DATA": 
         return {...state, fetchedDailyData: action.payload}	

		default: 
			return state;
	}
}

export default globalReducer;