'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6am', '7am', '8am'];


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
let tokyo = {
    shopName: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgSales: 1.2,
    hrSales: [],
    totalSales: 0,
}
//-----------------------------------------------------
let dubai = {
    shopName: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgSales: 3.7,
    hrSales: [],
    totalSales: 0,
}
//-----------------------------------------------------
let paris = {
    shopName: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgSales: 2.3,
    hrSales: [],
    totalSales: 0,
}

//-----------------------------------------------------

let lima = {
    shopName: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgSales: 4.6,
    custHourSales: [],
    totalSales: 0,
}

//-----------------Function 1: Generate a Random Number------------------------------------

function generateRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

//-------------------Function 2: Calculate the Total Hourly Sales for any specified location-------------------

function calculateTotalSales(shop) {
    let totalSales = 0;
    for (let i = 0; i < shop.custHourSales.length; i++) {
        totalSales = Math.round(shop.custHourSales[i] * shop.avgSales);   /// multiply b avg gives us an average, according to David Souther.
    }
    return shop.totalSales = totalSales;
  }

//-----------------------------------------------------------------------

function hourlySalesInDay () {
    for (let i = 0; i < hours.length; i++) {         
        
        //"seattle" specifies the above object; "custHourSales[]" specifies the property in the object;
        // [i] fills it in with the above "calculateTotalSales()"" function, 

      seattle.custHourSales[i] = generateRandom(seattle.minCust, seattle.maxCust); 
      calculateTotalSales(seattle);

      tokyo.custHourSales[i] = generateRandom(tokyo.minCust, tokyo.maxCust);
      calculateTotalSales(tokyo);

      dubai.custHourSales[i] = generateRandom(dubai.minCust, dubai.maxCust);
      calculateTotalSales(dubai);

      paris.custHourSales[i] = generateRandom(paris.minCust, paris.maxCust);
      calculateTotalSales(paris);

      lima.custHourSales[i] = generateRandom(lima.minCust, lima.maxCust);
      calculateTotalSales(lima);
    }
  }

//-----------------------------------------------------------------------

  function showDataLists(shop) {

    let ul = document.getElementById(shop.shopName);
    for (let i = 0; i < Hours.length; i++) {
    let li = document.createElement('li');   //id to connect JS with HTML
    li.appendChild(document.createTextNode('At ${hours[i]}, the total will be ${Math.custHourSales[i]} * shop.avgSales) cookies.');
    ul.appendChild(li);   

    }
    let li = document.createElement('li');
    li.appendChild(document.createTextNode('Total: ' + shop.total + ' cookies')); 
    ul.appendChild(li);     //append will fill in a <li> at the end of the ul/ol?
  }

hourlySalesInDay();
showDataLists(seattle);
showDataLists(tokyo);
showDataLists(dubai);
showDataLists(paris);
showDataLists(lima);

    //-----------------------------------------------------

    ('Total: ' + shop.total + ' cookies')

    (`Total: ${shop.total} cookies.`)

    //-----------------------------------------------------

//       genCustPerHour: function (){                          //Generates Random number of customers per hour
//     for (let i = 0; i < hours.length; i++) {
//         console.log(number);
//         this.custAtEachHour.push(number);
//       }       

//       return this.custAtEachHour;
//     }
//     //-----------------------------------------------------
//     genCookiesPerHour: function (custAtEachHour) {          //Generates Random number of cookies per hour

//         let result = []
//         for (let i = 0; i< custAtEachHour.length; i++) {


//         custAtEachHour[1] * this.avgCookiePerCustomer;
//         }

//         return []
//     }
//     //-----------------------------------------------------
// }
// //-----------------------------------------------------

// seattle.genCustPerHour();
// seatte.genCookiesPerHour(seattle.genCustPerHour);
// console.log(seattle);

// funtion displayHours(sales) {
//     let seattleResults = document.getElementById('seattle-results');

//     let listElement = document.createElement('ul');
//     for (let i = 0; i < sales.length; i++) {
//         let listItemElement = document.createElement('li');
//         listItemElement.textContent = sales;
//         listElement.appendChild(listItemElement);
//     }
// }

// displayHours(seattleCookiesPerHour);
