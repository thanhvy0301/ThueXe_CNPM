import React from 'react';
import { css } from 'styled-components';
import { type } from '@testing-library/user-event/dist/type';
import { hover } from '@testing-library/user-event/dist/hover';
import { Link } from 'react-router-dom';
import "./DetailCar.css";
import SortResult from "./SortResult";
import ListCars from './ListCars';
import InfoPartner from './InforPartner';
import SummaryCarRen from './SummaryCarRen';
function DetailCar() {    
    return(
        <div>
            <div style={{display:'flex', width:'auto', flexWrap:'wrap'}}>
                <SortResult/>
                <ListCars/>                      
                <InfoPartner/>
                <SummaryCarRen/>
            </div>
        </div>
    )
}
export default DetailCar;