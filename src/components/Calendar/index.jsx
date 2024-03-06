import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useNavigate } from 'react-router-dom';
import 'react-day-picker/dist/style.css';
import './index.css';

const css = `
.my-today {
    color: #ed6523
}
.my-selected {
    background-color: #ed6523
}
`

function Calendar() {
    const [selected, setSelected] = useState(null);
    // const navigate = useNavigate();

    const handleDateChange = (selectedDate) => {
        setSelected(selectedDate);
        // Pass the selected date to the parent component
        // onDateSelect(selectedDate);
        // Console log the selected date
        console.log('Selected Date:', selectedDate);
    };

    return (
        <div className="calendarContainer">
            <style>{css}</style>
            <DayPicker className="mainCalendar"
                mode="single"
                selected={selected}
                onSelect={handleDateChange}
                showOutsideDays
                modifiersClassNames={{
                    today: 'my-today',
                    selected: 'my-selected'
                }}
            />

        </div>
    );
}

export default Calendar;
