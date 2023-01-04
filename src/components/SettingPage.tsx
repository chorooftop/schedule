import React, { useState } from "react";

function SettingPage() {
  const [scheduleName, setScheduleName] = useState();

  const sceduleCheck = (checkDate: Date) => {
    // const diffDate = defaultDate.getTime() - checkDate.getTime();
    // const dataList = ["주간", "야간", "비번", "휴무"];
    // const diffDay = Math.abs(diffDate / (1000 * 60 * 60 * 24));
    // const isVal = Math.abs(defaultDate.getDay() + 1 - 4);
    // // 차이일수 % 4 (기준 일자가 이후의 날짜면 +2를 해준다.)
    // const result = checkDate < defaultDate ? (diffDay + 2) % 4 : diffDay % 4;
    // setSchedule(dataList[result]);
  };

  const onChangeScheduleName = (e: any) => {
    const { value } = e.target;

    setScheduleName(value);
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
    <div>
      <div>
        <input
          type="date"
          onChange={onChangeScheduleName}
          value={scheduleName}
        />
      </div>
      {/* <div>
        확인 날짜 <input type="date" onChange={onChangeDate}></input>
      </div> */}
      {/* <h1>{schedule}</h1> */}
      <button>확인</button>
    </div>
  );
}

export default SettingPage;
