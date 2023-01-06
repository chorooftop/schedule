import React, { useState } from "react";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { add, format, parse } from "date-fns";
import { TextField } from "@mui/material";

function SettingPage() {
  const [scheduleSetData, setScheduleSetData] = useState({
    defaultfDate: "",
    scheduleName: "",
  });

  const onChange = (e: any, type: string) => {
    if (type === "defaultfDate") {
      const value = format(e, "yyyyMMdd");
      setScheduleSetData({ ...scheduleSetData, [type]: value });
    }
    // const { value } = e.target;
  };

  return (
    <div>
      <div>
        <MobileDatePicker
          label="지정일"
          inputFormat="yyyy-MM-dd"
          value={parse(scheduleSetData?.defaultfDate, "yyyyMMdd", new Date())}
          mask="____-__-__"
          onChange={(day) => onChange(day, "defaultfDate")}
          renderInput={(params) => (
            <TextField className="datePickerText" size="small" {...params} />
          )}
        />
        <input
          type="date"
          onChange={(e) => onChange(e, "scheduleName")}
          value={scheduleSetData?.scheduleName}
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
