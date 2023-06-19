import React, { useState } from "react";
import Card from "../../components/Card";
import Input from "../../components/input";
import Button from "../../components/Button";

const AddPositions = () => {
    const [state, setState] = useState({
        positionName: "",
        description: "",
    });
    const handleClick = (e) => {
        e.preventDefault();
        console.log(state);
    };

    return (
        <form>
            <Card title="Add Positions">
            <Input name="PositionName" id="positionId" type="text" placeholder="Position you are aspiring for." title="Position Name" onChange={(e) =>{setState((prevState) => {
                    return {...prevState, positionName: e.target.value}
                })
             }}
          />
          <Input name="description" id="description" type="textArea" title="Description" onChange={(e) =>{setState((prevState) => {
                    return {...prevState, description: e.target.value}
                })
             }}
          />
          <Button type="submit" title="Submit" onclick={(e) => {
                        handleClick(e);
                    }} 
                    />

            </Card>
        </form>
    );
};

export default AddPositio ;