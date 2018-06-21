const assert = require('assert');
const BucketList = require('../../views/bucketListView.js')
const ListItem = require('../country.js')

describe("BucketList", function(){
  var bucketList;
  var listItem;

  beforeEach(function(){
    country1 = new ListItem({name: "France", population: "100", capitalCity: "Paris"});
    bucketList = new BucketList;
  })

it('bucketlist should be an empty array', function(){
  assert.strictEqual(bucketList.bucketList.length, 0);
})

})
