import React, { useState } from "react";
export function FOrmHandling() {
    const [name, setname] = useState('');
    const [password, setpassword] = useState('');
    const [batch, setbatch] = useState('');
    const [stdclass, setstdclass] = useState('');

    const eventcChange = (e) => setname(e.target.value);
    const eventpChange = (e) => setpassword(e.target.value);
    const eventbChange = (e) => setbatch(e.target.value);
    const eventscChange = (e) => setstdclass(e.target.value);

//submit handeler
const submitHandler=()=>{
    let students={
        name:name,
        password,
        batch,
        Class:stdclass
    }
    console.log(students);
}


    return (
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="name" onChange={eventcChange} />
            <p>name is:{name}</p>
            <hr/>
            <label htmlFor="Password">password</label>
            <input type="password" name="password" id="Password" placeholder="password" onChange={eventpChange} />
            <p>password is:{password}</p>
            <hr/>
            <label htmlFor="batch">batch</label>
            <input type="text" name="text" id="text" placeholder="batch" onChange={eventbChange} />
            <p>password is:{batch}</p>
            <hr/>
            <label htmlFor="class">class</label>
            <input type="text" name="text" id="class" placeholder="class" onChange={eventscChange} />
            <p>password is:{stdclass}</p>
            <button onClick={submitHandler}>submit</button>
        </div>
    );
}
