import React, {useState} from "react";
import { styled } from '@mui/material/styles';
import {Slider} from '@mui/material';
import {Categories} from "./Categories.css";
import MuiInput from "@mui/material/Input";
import { StyledEngineProvider } from '@mui/material/styles';
function InputSlider() {
    const [value, setValue] = useState([100])
    const updateRange=()=>{
        setValue(value + 100)
    }
    return(
        <div style={{width:'180px'}}>
            <Slider 
                defaultValue={1600000} 
                sx={{width: 190,
                marginLeft:3,
                }}/>
        </div>
    )
}
export default InputSlider;
