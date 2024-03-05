import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useNavigate } from 'react-router-dom';
import 'react-day-picker/dist/style.css';
import './index.css';

const css = `
.my-today {
    color: #ed6523
}
`

function Calendar({ onDateSelect }) {
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

    const handleDateChange = (selectedDate) => {
        setSelected(selectedDate);
        // Pass the selected date to the parent component
        onDateSelect(selectedDate);
        // Console log the selected date
        console.log('Selected Date:', selectedDate);
    };

    const handleGoToJournal = () => {
        navigate('/journal');
    }

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
            <button onClick={handleGoToJournal} className='calendar-btn'>Go to Journal</button>
        </div>
    );
}

export default Calendar;
