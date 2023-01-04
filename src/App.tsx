import React, { useState } from "react";
import { Route, Routes } from "react-router";
import SettingPage from "./components/SettingPage";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [defaultDate, setDefaultDate] = useState(new Date("2023-01-02"));
  const [schedule, setSchedule] = useState("");

  const sceduleCheck = (checkDate: Date) => {
    const diffDate = defaultDate.getTime() - checkDate.getTime();

    const dataList = ["주간", "야간", "비번", "휴무"];

    const diffDay = Math.abs(diffDate / (1000 * 60 * 60 * 24));

    const isVal = Math.abs(defaultDate.getDay() + 1 - 4);

    const result = checkDate < defaultDate ? (diffDay + 2) % 4 : diffDay % 4;

    setSchedule(dataList[result]);
  };

  const onChangeDefaultDate = (e: any) => {
    const { value } = e.target;

    setDefaultDate(new Date(value));
  };
  const onChangeDate = (e: any) => {
    const { value } = e.target;

    sceduleCheck(new Date(value));
  };

  const dateFormat = (date: Date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const monthFormat = month >= 10 ? month : "0" + month;
    const dayFormat = day >= 10 ? day : "0" + day;

    return date.getFullYear() + "-" + monthFormat + "-" + dayFormat;
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<SettingPage />} />
      </Routes>
      <div>
        주간 날짜{" "}
        <input
          type="date"
          onChange={onChangeDefaultDate}
          value={dateFormat(defaultDate)}
        ></input>
      </div>
      <div>
        확인 날짜 <input type="date" onChange={onChangeDate}></input>
      </div>
      {/* <button onClick={onResultClick}>확인</button> */}
      <h1>{schedule}</h1>
    </div>
  );
}

export default App;
