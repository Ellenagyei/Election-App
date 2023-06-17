import React, { useState } from 'react'
import Input from '../../components/input'
import Button from '../../components/Button';

const AddVoter = () => {
    const [state, setState] = useState({
        studentName:"",
        email:"",
        telephone:"",
        password:"",

    });
    return (
        <div>
            <form>
                <Input name="studentid" id="stuentid" type="text" title="Student ID" onChange={(e) =>{
        setState(prevState => {
            return
            {...prevState,studentId:e.target}
        } )
                }

                } />
                <Input name="studentName" id="studentName" type="text" title="Student Name" />
                <Input name="email" id="email" type="email" title="Email" />
                <Input name="telephone" id="telephone" type="tell" title="Telephone" />
                <Input name="password" id="password" type="password" title="Student Password" />
                <Button title="Submit" type="Submit" />
            </form>
        </div>
    )
}

export default AddVoter