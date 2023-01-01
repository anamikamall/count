import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
// import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
// npm install @mui/icons-material

const IncDcr = () => {
    const [value,setValue] = useState(0);
     
    const IncVal = () => {
        setValue(value+1);
    } ;

    const DcrVal = () => {
        if (value === 0) {
            alert("Sorry, Zero Limit Reached");
            setValue(0);
        }
        else {
        setValue(value-1);
        }
    };
return (
    <>
    <div className="indc">
        <h1> {value} </h1>
        <div className="btns">
            <Tooltip title="Add">
            <Button onClick={IncVal} className="btn_green">
            < AddIcon />
            </Button>
            </Tooltip>
            <Tooltip title="Delete">
            <button onClick={DcrVal} className="btn_red">
                <DeleteIcon />
                {/* <DeleteForeverTwoToneIcon /> */}
            </button>
            </Tooltip>
        </div>
    </div>
    </>
);
}

export default IncDcr;