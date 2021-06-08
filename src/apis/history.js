// stores past searches in localstorage
export const addPastSearch = (city) => {
    // check localstorage first, if not there then create
    if (!localStorage.getItem("pastSearches")) {
        // push newScore object into array, then
        let pastSearches = [];    
     
        pastSearches.push(city);
        // write it to local storage
        localStorage.setItem("pastSearches",JSON.stringify(pastSearches));
    }
    else {
        // extract data from localstorage
        let pastSearches = JSON.parse(localStorage.getItem("pastSearches"));
        //only add if it's not already there
        if (!alreadySaved(city,pastSearches)) {
             // add new city to list
             pastSearches.push(city);
             // re-insert data into local storage
             localStorage.setItem("pastSearches",JSON.stringify(pastSearches));
        }
    }
 }
 
 // retrives past searches, uses displayData to write to page
 export const getPastSearches = () => {
     return localStorage.getItem("pastSearches") ? localStorage.getItem("pastSearches") : null;
 }
 
 // clears search history
 export const clearPastSearches = () => {
     localStorage.removeItem("pastSearches");
 }
 
 // takes city and compares it to each item in array, if present returns true
 function alreadySaved(city,data) {
     var present = false;
     city = city.toUpperCase();
 
     for (let i = 0; i < data.length; i++) {
         if (data[i].toUpperCase() === city) {
             present = true;
         }
     }
 
     return present;
 }