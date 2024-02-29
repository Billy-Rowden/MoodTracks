import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import './index.css';

function JournalEntryForm({ onSubmit }) {
    const [date, setDate] = useState();
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [content, setContent] = useState('');
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
        setShowDatePicker(false);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleDateInputClick = () => {
        setShowDatePicker(true);
    };

    const handleDayPickerBlur = () => {
    };

    const handleMonthChange = (newMonth) => {
        setCurrentMonth(newMonth);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ date, content });
        setDate(undefined);
        setContent('');
    };

    let datePicker = null;
    if (showDatePicker) {
        datePicker = (
            <DayPicker
                mode="single"
                selected={date}
                onSelect={handleDateChange}
                onBlur={handleDayPickerBlur}
                showOutsideDays
                month={currentMonth}
                onMonthChange={handleMonthChange} // Handle month changes
            />
        );
    }

    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p>You picked {format(date, 'PP')}.</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="journalForm">
                <label>Date:</label>
                <input
                    className="dateInput"
                    type="text"
                    value={date ? format(date, 'dd/MM/yyyy') : ''}
                    onClick={handleDateInputClick}
                    readOnly
                />
                {datePicker}
            </div>
            <div>
                <textarea value={content} onChange={handleContentChange} className="journalEntry" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default JournalEntryForm;
