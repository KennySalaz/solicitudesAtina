import React, { useState, useEffect } from 'react'
import DatePicker, { CalendarContainer, } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";




const DataPicker = ({ startDate, setStartDate }) => {


    const years = range(1990, getYear(new Date()) + 1, 1);

    const months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];

    useEffect(() => {

        console.log('aqui esta la FECHA', startDate)

    }, [startDate])

    return (
        <DatePicker
            className={`appearance-none block w-2/4 mr-4 text-xl bg-gray-200 text-gray-700  "border-2 border-red-500"   rounded py-5 pl-6 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
            /*   withPortal */
            renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,

            }) => (
                <div

                    style={{
                        margin: 10,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                        {"<"}
                    </button>
                    <select
                        value={getYear(date)}
                        onChange={({ target: { value } }) => changeYear(value)}
                    >
                        {years.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <select
                        value={months[getMonth(date)]}
                        onChange={({ target: { value } }) =>
                            changeMonth(months.indexOf(value))
                        }
                    >
                        {months.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                        {">"}
                    </button>
                </div>
            )}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
        />
    );
}

export default DataPicker