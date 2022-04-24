import React from "react";
import ReSearchForm from "./ReSearchForm";
import DropdownItem from "./DropdownItem";
import FilterCategory from "./FilterCategory";
import PriceRangeSlide from "./PriceRangeSlide";
import { css } from 'styled-components';
import { type } from '@testing-library/user-event/dist/type';
import {Categories} from "./Categories.css"
function ThueXe() { 
    
    return(  
        <div style={{margin:'0px'}}>
            <div style={{ marginLeft: 150,height:'1000px'}}>
                <ReSearchForm/>
                <DropdownItem/> 
                <FilterCategory/>
        </div> 
               
        </div>
    )
}
export default ThueXe;

