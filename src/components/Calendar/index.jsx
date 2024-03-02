import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './index.css';

function Calendar({ onDateSelect }) {
    const [selected, setSelected] = useState(null);

    const handleDateChange = (selectedDate) => {
        setSelected(selectedDate);
        // Pass the selected date to the parent component
        onDateSelect(selectedDate);
        // Console log the selected date
        console.log('Selected Date:', selectedDate);
    };

    return (
        <div className="calendarContainer">
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={handleDateChange}
                showOutsideDays
            />
        </div>
    );
}

export default Calendar;
