import "./App.css";
import createRandomUser from "./faker.ts";
import React, { useState } from "react";
import BarChart from "./barChart";
import Virtualizedlist from "./virtualizedList.js";
import Paginatedlist from "./paginatedList.js";
import CarModelComponent from "./carModelChart.js";
function App() {
  // Generating fake data

  const usersList = [];
  Array.from({ length: 100000 }).forEach(() => {
    usersList.push(createRandomUser());
  });

  //Question-1

  const countriesList = [];
  usersList.map((item) => countriesList.push(item.userLocation));
  function countFreq(arr, n, obj) {
    let visited = Array.from({ length: n }, (_, i) => false);
    // Traverse through array elements and
    // count frequencies
    const listArr = [];
    for (let i = 0; i < n; i++) {
      // Skip this element if already processed
      if (visited[i] == true) continue;
      // Count frequency
      let count = 1;
      for (let j = i + 1; j < n; j++) {
        if (arr[i] === arr[j]) {
          visited[j] = true;
          count++;
        }
      }
      obj
        ? listArr.push({ country: arr[i], count: count })
        : listArr.push(count);
    }
    return listArr;
  }
  let n = countriesList.length;
  let obj = true;
  const countriesListWithCount = countFreq(countriesList, n, obj);


  return (
    <div className="App">
      <div>
        <BarChart data={countriesListWithCount} />
        <br></br>

        <CarModelComponent usersList={usersList} countFreq={countFreq} />

        <Virtualizedlist data={usersList} />

        <Paginatedlist data={usersList} />
      </div>
    </div>
  );
}

export default App;
