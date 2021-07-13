const globalReducer = (state, action ) => {
	
	switch(action.type){
		case "SET DATA": 
			return {...state, fetchedData: action.payload}	
      case "SET DAILY DATA": 
         return {...state, fetchedDailyData: action.payload}	
      case "SET COUNTRIES LIST": 
         return {...state, fetchedCountriesList: action.payload}
      case "SET SELECTED COUNTRY": 
         return {...state, selectedCountry: action.payload}
		default: 
			return state;
	}
}

export default globalReducer;