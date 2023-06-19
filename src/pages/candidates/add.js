import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/Button";
import Card from "../../components/Card";

const AddCandidates  = () => {
    const [state, setState] = useState({
        candidateName: "",
        telephone: "",
        profile: "",
        positions: "",
    });
    const handleClick = () => {
        console.log(state);
    };
    return (
        <div>
            <form onSubmit ={() => {
                handleClick();
            }} >
                <Card title="Add Candidtes">
                    <Input name="candidateName" id="candidateName" type="text" title="Candidate Name" onChange={(e) => {
                        setState((prevState) =>{
                            return {...prevState, cadidateName: e.target.value };
                        });
                    }}
                    />
                    <Input name="telephone" id="telephone" type="tel" title="Telephone" onChange={(e) => {setState((prevState) => {
                             return {...prevState, cadidateName: e.target.value };
                    })

                    }}
                    />
                    <Input name="profile" id="profile" type="file" title="Profile" onChange={(e) => {setState((prevState) => {
                             return {...prevState, cadidateName: e.target.value };
                    });
                    }}
                    />
                    <Input name="position" id="positionId" type="text" title="Position" onChange={(e) => {setState((prevState) => {
                             return {...prevState, positions: e.target.value };
                    });
                    }}
                    />
                    <Button type="submit" title="Submit" onclick={(e) => {
                        handleClick(e);
                    }} 
                    />
                 </Card>
              </form>
            </div>
          );
        };
        
    export default AddCandidates;