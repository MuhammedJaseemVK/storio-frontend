import React, { useState } from 'react';
import DatePicker from "react-datindex.jsepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function GfgDatePicker() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <h4>GeeksforGeeks - DatePicker</h4>
            <DatePicker selected={startDate} onChange=
                {(date) => setStartDate(date)} />
        </div>
    );
}