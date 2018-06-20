const Request = require('./src/services/Request.js');
const bucketListView = require("./src/views/BucketListView.js");

const bucketList = new BucketList();
const request = new Request("http://localhost:3000/api/bucketlist");

const appStart = function(){
  request.get(addCountryRequestComplete);
}

const addCountryRequestComplete = function(countryToAdd){
  bucketList.addCountryToList(countryToAdd);
}

const displayCountriesRequestComplete = function(allCountries){
  allCountries.forEach(function(quote){
    bucketList.addCountryToList(countryToAdd);
  });
}



window.listen("load", appStart);
