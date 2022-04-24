import React from 'react';
import { css } from 'styled-components';
import { type } from '@testing-library/user-event/dist/type';
import { hover } from '@testing-library/user-event/dist/hover';
import { Link } from 'react-router-dom';
import ListCars from './ListCars';
import "./DetailCar.css";
import KM from "../../Img/KiaMorning.png"
const NameCars = ['Kia Morning', 'Hyundai Grand i10', 'VinFast Fadil']
const Address = ['Nha Trang']
 function SummaryCarRen() {
    return(
        <div id='div-SummaryCarRen'>
            <h4 style={{paddingLeft:10, marginBottom:0}}>Tóm tắt xe thuê</h4>
            <div className='img-nameCar'>
                <div style={{width:50,height:50, border:'1px solid black', borderRadius:5, marginLeft:10}} >
                <img src={KM} style={{width:50, paddingTop:10}}></img>
                </div>
                
                <div style={{width:120, paddingRight:10}}>
                    <p style={{marginBottom:10}}>{NameCars[0]}</p>
                    <p id='cate-engine'>Tự động</p>
                </div>
            </div>
            <ul style={{fontSize:14, paddingLeft:30}}>
                <li>{Address}</li>
                <li>T2, 25 Thg 04 2022 09:00 - T4, 27 Thg 04 2022 09:00</li>
            </ul>
        </div>
    )
 }
 export default SummaryCarRen;