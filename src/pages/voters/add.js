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

const handleSubmit=()=>{
    console.log(state)
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input name="studentid" id="stuentid" type="text" title="Student ID" onChange={(e) =>{setState((prevState) => {
                    return {...prevState, studentId: e.target.value}
                })}

                } />
                <Input name="studentName" id="studentName" type="text" title="Student Name" onChange={(e) =>{setState((prevState) => {
                    return {...prevState, studentId: e.target.value}
                })}

                }  />
                <Input name="email" id="email" type="email" title="Email" onChange={(e) =>{setState((prevState) => {
                    return {...prevState, studentId: e.target.value}
                })}

                } /> 
                <Input name="telephone" id="telephone" type="tell" title="Telephone" onChange={(e) =>{setState((prevState) => {
                    return {...prevState, studentId: e.target.value}
                })}

                } />
                <Input name="password" id="password" type="password" title="Student Password" onChange={(e) =>{setState((prevState) => {
                    return {...prevState, studentId: e.target.value}
                })}

                } />
                <Button title="Submit" type="Submit" />
            </form>
            
            
            {

            }
        </div>
    )
}

export default AddVoter