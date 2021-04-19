import React, { useState } from "react";
export function COUnT2() {
    let count = 0;
    const [Count2, setCount] = useState(5);
    const decrementCount = () => {
        count = count--;
        setCount(Count2 - 1);
    };
    const incrementCount = () => {
        count = count++;
        setCount(Count2 + 1);
    };
    console.log("count", count);
    console.log("count2==>", Count2);

    //mapping
    const [students, setstudents] = useState([
        {
            name: "sami shoukat",
            rollno: 18,
            class: "web and app development",
            batch: "3"
        },
        {
            name: "adnan",
            rollno: 19,
            class: "web and app development",
            batch: "3"
        },
        {
            name: "manan",
            rollno: 19,
            class: "web and app development",
            batch: "3"
        },
        {
            name: "shoukat",
            rollno: 13,
            class: "web and app development",
            batch: "3"
        },
        {
            name: "sami shoukat",
            rollno: 18,
            class: "web and app development",
            batch: "3"
        },
        {
            name: "sami shoukat",
            rollno: 18,
            class: "web and app development",
            batch: "3"
        },
        {
            name: "sami shoukat",
            rollno: 18,
            class: "web and app development",
            batch: "3"
        },
        {
            name: "sami shoukat",
            rollno: 18,
            class: "web and app development",
            batch: "3"
        },
        {
            name: "sami shoukat",
            rollno: 18,
            class: "web and app development",
            batch: "3"
        }
    ])
    console.log(students);

    return (
        <div style={{ marginTop: 30 }} style={{ paddingLeft: 40 }}>
            <p>use simple state variable</p>
            <button onClick={() => decrementCount()}>-</button>
            <span style={{ padding: 20 }}>{count}</span>
            <button onClick={() => incrementCount()}>+</button>
            <hr />
            {/* React using simple variable */}
            <p>use React state variable</p>

            <button onClick={() => decrementCount()}>-</button>
            <span style={{ padding: 20 }}>{Count2}</span>
            <button onClick={() => incrementCount()}>+</button>

            <hr />
            <h3>list of students</h3>
            <table>
                <tr>
                    <th>Index</th>
                    <th>Student name:</th>
                    <th>Roll No:</th>
                    <th>Batch:</th>
                    <th>Class:</th>
                </tr>
                {
                    students.map((students, index) => {
                        return (
                            <tr>
                                <td>{index}</td>
                                <td>{students.name}</td>
                                <td>{students.rollno}</td>
                                <td>{students.batch}</td>
                                <td>{students.class}</td>
                            </tr>

                        )
                    })
                }
            </table>
        </div>
    );
}
