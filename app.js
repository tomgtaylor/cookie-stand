'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let resultsDiv = document.getElementById('results');

//-------------------Object 1----------------------------------

let seattle = { 
    shopName: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgSales: 6.3,
    hrSales: [],
    totalSales: 0,
    hourlyCust: [],
      //object method (function as a property of an object)
    generateRandom: function(){
      let randomNumber = Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
      //console.log(randomNumber);
      return randomNumber;
    },
    generateHourlyCustomers: function(){
      for (let i = 0; i < hours.length; i++){
        //console.log(hours[i]);
        //this.generateRandom();
        let randomNumber = this.generateRandom();
        this.hourlyCust.push(randomNumber);
      }
      console.log(this.hourlyCust);
    },
    generateCookieSales: function(){
      this.generateHourlyCustomers();
      for (let i = 0; i < hours.length; i++){
        this.hrSales.push(Math.ceil(this.hourlyCust[i] * this.avgSales));  //calc the  sales per hour and pushing it into the empty array in hrSales: []
        //console.log(this.hourlyCust[i]);
      }
    },
};


//-----------------------------------------------------
let tokyo = {
    shopName: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgSales: 1.2,
    hrSales: [],
    totalSales: 0,
    hourlyCust: [],
      //object method (function as a property of an object)
    generateRandom: function(){
      let randomNumber = Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
      //console.log(randomNumber);
      return randomNumber;
    },
    generateHourlyCustomers: function(){
      for (let i = 0; i < hours.length; i++){
        //console.log(hours[i]);
        //this.generateRandom();
        let randomNumber = this.generateRandom();
        this.hourlyCust.push(randomNumber);
      }
      console.log(this.hourlyCust);
    },
    generateCookieSales: function(){
      this.generateHourlyCustomers();
      for (let i = 0; i < hours.length; i++){
        this.hrSales.push(Math.ceil(this.hourlyCust[i] * this.avgSales));  //calc the  sales per hour and pushing it into the empty array in hrSales: []
        //console.log(this.hourlyCust[i]);
      }
    },
};
//-----------------------------------------------------
let dubai = {
    shopName: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgSales: 3.7,
    hrSales: [],
    totalSales: 0,
    hourlyCust: [],
      //object method (function as a property of an object)
    generateRandom: function(){
      let randomNumber = Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
      //console.log(randomNumber);
      return randomNumber;
    },
    generateHourlyCustomers: function(){
      for (let i = 0; i < hours.length; i++){
        //console.log(hours[i]);
        //this.generateRandom();
        let randomNumber = this.generateRandom();
        this.hourlyCust.push(randomNumber);
      }
      console.log(this.hourlyCust);
    },
    generateCookieSales: function(){
      this.generateHourlyCustomers();
      for (let i = 0; i < hours.length; i++){
        this.hrSales.push(Math.ceil(this.hourlyCust[i] * this.avgSales));  //calc the  sales per hour and pushing it into the empty array in hrSales: []
        //console.log(this.hourlyCust[i]);
      }
    },
};
//-----------------------------------------------------
let paris = {
    shopName: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgSales: 2.3,
    hrSales: [],
    totalSales: 0,
    hourlyCust: [],
      //object method (function as a property of an object)
    generateRandom: function(){
      let randomNumber = Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
      //console.log(randomNumber);
      return randomNumber;
    },
    generateHourlyCustomers: function(){
      for (let i = 0; i < hours.length; i++){
        //console.log(hours[i]);
        //this.generateRandom();
        let randomNumber = this.generateRandom();
        this.hourlyCust.push(randomNumber);
      }
      console.log(this.hourlyCust);
    },
    generateCookieSales: function(){
      this.generateHourlyCustomers();
      for (let i = 0; i < hours.length; i++){
        this.hrSales.push(Math.ceil(this.hourlyCust[i] * this.avgSales));  //calc the  sales per hour and pushing it into the empty array in hrSales: []
        //console.log(this.hourlyCust[i]);
      }
    },
};

//-----------------------------------------------------

let lima = {
    shopName: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgSales: 4.6,
    hrSales: [],
    totalSales: 0,
    hourlyCust: [],
      //object method (function as a property of an object)
    generateRandom: function(){
      let randomNumber = Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
      //console.log(randomNumber);
      return randomNumber;
    },
    generateHourlyCustomers: function(){
      for (let i = 0; i < hours.length; i++){
        //console.log(hours[i]);
        //this.generateRandom();
        let randomNumber = this.generateRandom();
        this.hourlyCust.push(randomNumber);
      }
      console.log(this.hourlyCust);
    },
    generateCookieSales: function(){
      this.generateHourlyCustomers();
      for (let i = 0; i < hours.length; i++){
        this.hrSales.push(Math.ceil(this.hourlyCust[i] * this.avgSales));  //calc the  sales per hour and pushing it into the empty array in hrSales: []
        //console.log(this.hourlyCust[i]);
      }
  },
};


//-------------------------------------------------------------
function renderCityData(city) {
  let div = document.createElement('div');
  let h2 = document.createElement('h2');
  h2.textContent = city.shopName;
  div.appendChild(h2);
  let ul = document.createElement('ul');
  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    li.textContent = hours[i] + ': ' + Math.floor(city.hrSales[i] * city.avgSales) + ' cookies';
    // li.appendChild(document.createTextNode(Hours[i] + ': ' + Math.floor(city.hrSales[i] * city.avgSales) + ' cookies'));
    ul.appendChild(li);
  }
  let li = document.createElement('li');
  li.textContent = 'Total: ' + city.totalSales + ' cookies';
  
  // li.appendChild(document.createTextNode('Total: ' + shopName.totalSales + ' cookies'));
  ul.appendChild(li);
  div.appendChild(ul); //
  resultsDiv.appendChild(div);
};

seattle.generateCookieSales();
lima.generateCookieSales();
console.log(seattle);
renderCityData(seattle);
renderCityData(lima);

// function list(shop) {
  //   let ul = document.getElementById(shop.shopName);
  //   for (let i = 0; i < hours.length; i++) {
    //     let li = document.createElement('li');
//     li.appendChild(document.createTextNode(dayHours[i] + ': ' + Math.floor(shop.hrSales[i] * city.avgSales) + ' cookies'));
//     ul.appendChild(li);
//   }
//   let li = document.createElement('li');
//   li.appendChild(document.createTextNode('Total: ' + city.total + ' cookies'));
//   ul.appendChild(li);
// }

// list(seattle);



// list(tokyo);
// list(dubai);
// list(paris);
// list(lima);

// let stores = 
// function render (stores) {
//   let tableEl = document.getElementById('stores');
//   let tableRowEl = document.createElement('tr');
//   let nameEl = document.createElement('td');
//   let 
// }