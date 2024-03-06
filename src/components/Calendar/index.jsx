import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './index.css';

function Calendar({ onSelect }) {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (selectedDate) => {
        onSelect(selectedDate);
        setSelectedDate(selectedDate);
        localStorage.setItem('selectedDate', selectedDate);
    }

    return (
        <div className="calendarContainer">
            <DayPicker
                className="mainCalendar"
                mode="single"
                selected={selectedDate}
                onSelect={handleDateChange}
                showOutsideDays
                modifiers={{
                    selected: selectedDate, // Mark the selected date as selected
                }}
            />
        </div>
    );
}

export default Calendar;
