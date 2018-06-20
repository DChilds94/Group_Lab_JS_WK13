const BucketList = function(){
  this.bucketList = [];
};

BucketList.prototype.addCountryToList = function(country) {
  this.bucketList.push(country);
  this.render(country);
}

BuckList.prototype.render = function (country) {
  const table = document.querySeletcor("#bucket-list")
  const tableRow = document.createElement("tr");
  const name = document.createElement('th');
  const population = document.createElement('th');
  const capitalCity = document.createElement('th');
  name.innerText = country.name;
  population.innerText = country.population;
  capitalCity.innerText = country.capital;
  tableRow.appendChild(name);
  tableRow.appendChild(population);
  tableRow.appendChild(capitalCity);
  table.appendChild(tableRow);
  };

modules.export = BuckList;
