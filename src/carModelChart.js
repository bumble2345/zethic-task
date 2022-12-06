import React,{useState} from "react";
import PieChart from "./pieChart.js";

export default function CarModelComponent({ usersList, countFreq }) {
    const [ageList, setAgeList] = useState("21-25");
  const listAge = [
    "21-25",
    "26-30",
    "31-35",
    "36-40",
    "41-45",
    "46-50",
    "51-55",
    "56-60",
    "61-65",
    "66-70",
  ];
  const carMakerList = [];
  usersList.map((item) => {
    if (
      item.userAge >= ageList.slice(0, 2) &&
      item.userAge <= ageList.slice(3, 5)
    )
      carMakerList.push(item.carManufacturer);
    return carMakerList;
  });
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  let arr = false;
  let l = carMakerList.length;
  const carMakerlistWithCount = countFreq(carMakerList, l, arr);
  const carMakerlist = removeDuplicates(carMakerList); //1
  const backgroundColor = [];
  function random_rgba() {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return (
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      r().toFixed(1) +
      ")"
    );
  }
  for (let i = 0; i < l; i++) {
    backgroundColor.push(random_rgba());
  }
  const carAgelist = [];
  usersList.map((item) => {
    if (
      item.userAge >= ageList.slice(0, 2) &&
      item.userAge <= ageList.slice(3, 5)
    )
    carAgelist.push(item.carAge);
    return carAgelist;
  });
  const carAgeList = removeDuplicates(carAgelist); //1
  let n = carAgeList.length;
  const carAgelistWithCount = countFreq(carMakerList, n, arr);
  const backgroundColorCarAge = []
  for (let i = 0; i < n; i++) {
    backgroundColorCarAge.push(random_rgba());
  }
  return (
    <>
      <div>
        <select value={ageList} onChange={(e) => setAgeList(e.target.value)}>
          {listAge.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <PieChart
        labels={carMakerlist}
        label="Pie chart for their car models on the basis of their Car Maker"
        dataArr={carMakerlistWithCount}
        backgroundColor={backgroundColor}
      />
      <PieChart
        labels={carAgeList}
        label=""
        dataArr={carAgelistWithCount}
        backgroundColor={backgroundColorCarAge}
      />
    </>
  );
}
