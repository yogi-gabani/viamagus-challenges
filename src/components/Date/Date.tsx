import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { addMinutes, addHours, addDays, addMonths, addYears, format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './date.module.css';

const DateComponent = () => {
  const [fromDate, setFromDate] = useState<null | Date>(null);
  const [duration, setDuration] = useState<number>(0);
  const [toDate, setToDate] = useState<null | Date>(null);
  const [timeline, setTimeline] = useState<string>('minutes');

  const handleFromDateChange = (date: Date) => {
    setFromDate(date);
    calculateToDate(date, duration);
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDuration = e.target.value ? parseInt(e.target.value, 10) : 0;
    setDuration(newDuration);
    calculateToDate(fromDate as Date, newDuration);
  };

  const calculateToDate = (date: Date, duration: number) => {
    if (date) {
      let toDate: Date = new Date();
      if (timeline === 'minutes')
        toDate = addMinutes(date, duration);
      else if (timeline === 'hours')
        toDate = addHours(date, duration);
      else if (timeline === 'days')
        toDate = addDays(date, duration);
      else if (timeline === 'months')
        toDate = addMonths(date, duration);
      else if (timeline === 'years')
        toDate = addYears(date, duration);
      
      setToDate(toDate);
    }
  };

  return (
    <div className={styles.form}>
      <h1>Date Page</h1>
      <div className={styles.formGroup}>
        <label>From Date:</label>
        <DatePicker selected={fromDate} onChange={handleFromDateChange} showTimeSelect dateFormat="Pp" />
      </div>
      <div className={styles.formGroup}>
        <label>Duration:</label>
        <div className={styles.duration}>
          <select name="timeline" onChange={(e) => { setTimeline(e.target.value); setDuration(0) }} id="" className={styles.timeline}>
            <option value="minutes">Minutes</option>
            <option value="hours">Hours</option>
            <option value="days">Days</option>
            <option value="months">Months</option>
            <option value="years">Years</option>
          </select>
          <input type="text" value={duration} onChange={handleDurationChange} />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label>To Date:</label>
        <input type="text" value={toDate ? format(toDate, 'Pp') : ''} readOnly />
      </div>
    </div>
  );
};

export default DateComponent;