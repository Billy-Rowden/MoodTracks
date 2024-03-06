import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './index.css';


function Calendar({ onSelect }) {
    const handleDateChange = (selectedDate) => {
        onSelect(selectedDate);
        localStorage.setItem('selectedDate', selectedDate);
    }

    return (
        <div className="calendarContainer">
            <DayPicker className="mainCalendar"
                mode="single"
                onSelect={handleDateChange}
                showOutsideDays
                modifiersClassNames={{
                    today: 'my-today',
                }}
            />
        </div>
    );
}

export default Calendar;
