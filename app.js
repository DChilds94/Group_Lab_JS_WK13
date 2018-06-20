const Request = require('/client/services/Request.js');
const bucketListView = require('/client/views/BucketListView.js');

const bucketList = new BucketList();
const request = new Request("http://localhost:3000/api/bucketlist");

const appStart = function(){
  request.get(addCountryRequestComplete);
}

const addCountryRequestComplete = function(countryToAdd){
  bucketList.addCountryToList(countryToAdd);
}

const 

// get all lists
// delete bucketlist
// mark item on list is complete

window.listen("load", appStart);
