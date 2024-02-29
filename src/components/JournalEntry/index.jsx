import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import './index.css';

function JournalEntryForm({ onSubmit }) {
    const [date, setDate] = useState();
    const [content, setContent] = useState('');
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
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

    return (
        <div className="journalFormContainer">
            <div className="journalForm">
                <div className="datePickerCard">
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={handleDateChange}
                        onBlur={handleDayPickerBlur}
                        showOutsideDays
                        month={currentMonth}
                        onMonthChange={handleMonthChange} // Handle month changes
                    />
                </div>
                <div className="journalEntryWrapper">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <textarea
                                value={content}
                                onChange={handleContentChange}
                                className="journalEntry"
                                placeholder="Write your journal entry..."
                            />
                        </div>
                        <button className="submitButton" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default JournalEntryForm;
