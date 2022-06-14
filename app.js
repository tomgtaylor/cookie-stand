'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6am', '7am', '8am'];

function generateNumberBetween(min, max){
    return Math.round(Math.random() * (max-min) + min);
}

//-----------------------------------------------------

let seattle = { 
    shopName: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgSales: 6.3,
    hrSales: [],
    totalSales: 0,
// }
//-----------------------------------------------------
let Tokyo = {
    shopName: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgSales: 1.2,
    hrSales: [],
    totalSales: 0,
}
//-----------------------------------------------------
let Dubai = {
    shopName: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgSales: 3.7,
    hrSales: [],
    totalSales: 0,
}
//-----------------------------------------------------
let Paris = {
    shopName: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgSales: 2.3,
    hrSales: [],
    totalSales: 0,
}
//-----------------------------------------------------
let Lima = {
    shopName: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgSales: 4.6,
    custAtEachHour: [],
    totalSales: 0,
    //-----------------------------------------------------
      genCustPerHour: function (){                          //Generates Random number of customers per hour
    for (let i = 0; i < hours.length; i++) {
        console.log(number);
        this.custAtEachHour.push(number);
      }       

      return this.custAtEachHour;
    }
    //-----------------------------------------------------
    genCookiesPerHour: function (custAtEachHour) {          //Generates Random number of cookies per hour

        let result = []
        for (let i = 0; i< custAtEachHour.length; i++) {


        custAtEachHour[1] * this.avgCookiePerCustomer;
        }

        return []
    }
    //-----------------------------------------------------
}
//-----------------------------------------------------

seattle.genCustPerHour();
seatte.genCookiesPerHour(seattle.genCustPerHour);
console.log(seattle);

funtion displayHours(sales) {
    let seattleResults = document.getElementById('seattle-results');

    let listElement = document.createElement('ul');
    for (let i = 0; i < sales.length; i++) {
        let listItemElement = document.createElement('li');
        listItemElement.textContent = sales;
        listElement.appendChild(listItemElement);
    }
}

displayHours(seattleCookiesPerHour);
