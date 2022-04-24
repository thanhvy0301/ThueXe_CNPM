import React, { useState } from 'react';
import { css } from 'styled-components';
import { type } from '@testing-library/user-event/dist/type';
import { hover } from '@testing-library/user-event/dist/hover';
import { Link } from 'react-router-dom';
import KM from "../../Img/KiaMorning.png";
import VF from "../../Img/VinfastFadil.png";
import "./DetailCar.css";
const NameCars = ['Kia Morning', 'Hyundai Grand i10', 'VinFast Fadil']
const SeatCars = ['4']
const SuitCase = ['2']
function ListCars() {
    return(
        <div style={{display:'flex', height:'fit-content'}}>
            <div className='block-item'>
                <img src={KM}/>  
                <div className='content-car'>
                    <p className='name-car'>{NameCars[0]}</p>
                <ul  className='ul-label'>
                    <li>{SeatCars[0]}</li>
                    <li>{SuitCase[0]}</li>
                </ul>   
            </div>
            </div>
            <div className='block-item' style={{marginLeft:10}}>
                <img src={VF} />  
                <div className='content-car'>
                    <p className='name-car'>{NameCars[1]}</p>
                <ul  className='ul-label'>
                    <li>{SeatCars[0]}</li>
                    <li>{SuitCase[0]}</li>
                </ul>   
            </div>
            </div>
            <div className='block-item' style={{marginLeft:10}}>
                <img src={KM} />  
                <div className='content-car'>
                    <p className='name-car'>{NameCars[2]}</p>
                <ul  className='ul-label'>
                    <li>{SeatCars[0]}</li>
                    <li>{SuitCase[0]}</li>
                </ul>   
            </div>
            </div>
        </div>
    )
}
export default ListCars;