import React, { useState, useEffect } from "react";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { add, format, parse } from "date-fns";
import { TextField } from "@mui/material";

function SettingPage() {
  const [scheduleSetData, setScheduleSetData] = useState({
    defaultDate: "20230102",
    checkDate: format(new Date(), "yyyyMMdd"),
  });
  const [scheduleName, setScheduleName] = useState("");

  const sceduleCheck = () => {
    const parseDefaultDate = parse(
      scheduleSetData?.defaultDate,
      "yyyyMMdd",
      new Date()
    );
    const parseCheckDate = parse(
      scheduleSetData?.checkDate,
      "yyyyMMdd",
      new Date()
    );

    console.log("parseCheckDate ::", parseCheckDate);

    const diffDate = parseDefaultDate.getTime() - parseCheckDate.getTime();

    const dataList = ["주간", "야간", "비번", "휴무"];

    const diffDay = Math.abs(diffDate / (1000 * 60 * 60 * 24));

    const isVal = Math.abs(parseDefaultDate.getDay() + 1 - 4);

    const result =
      parseCheckDate < parseDefaultDate ? (diffDay + 2) % 4 : diffDay % 4;

    setScheduleName(dataList[result]);
  };

  const onChange = (e: any, type: string) => {
    const value = format(e, "yyyyMMdd");
    setScheduleSetData({ ...scheduleSetData, [type]: value });
  };

  useEffect(() => {
    sceduleCheck();
  }, [scheduleSetData]);

  return (
    <div>
      <div style={{ marginTop: "100px" }}>
        <div>
          <MobileDatePicker
            label="지정일"
            inputFormat="yyyy-MM-dd"
            value={parse(scheduleSetData?.defaultDate, "yyyyMMdd", new Date())}
            mask="____-__-__"
            onChange={(day) => onChange(day, "defaultDate")}
            renderInput={(params) => (
              <TextField className="datePickerText" size="small" {...params} />
            )}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <MobileDatePicker
            label="확인 날짜"
            inputFormat="yyyy-MM-dd"
            value={parse(scheduleSetData?.checkDate, "yyyyMMdd", new Date())}
            mask="____-__-__"
            onChange={(day) => onChange(day, "checkDate")}
            renderInput={(params) => (
              <TextField className="datePickerText" size="small" {...params} />
            )}
          />
        </div>
      </div>
      {/* <div>
        확인 날짜 <input type="date" onChange={onChangeDate}></input>
      </div> */}
      <h1>{scheduleName}</h1>
      {/* <button onClick={sceduleCheck}>확인</button> */}
    </div>
  );
}

export default SettingPage;
