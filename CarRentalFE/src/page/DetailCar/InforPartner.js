import React from 'react';
import { css } from 'styled-components';
import { type } from '@testing-library/user-event/dist/type';
import { hover } from '@testing-library/user-event/dist/hover';
import { Link } from 'react-router-dom';
import AlertDialog from './AlertDialog';
import "./DetailCar.css";
import Logo from "../../Img/logoChungXe.png";
import SortResult from "./SortResult";
import ListCars from './ListCars';
const NamePartner = ['Chung Xe NHA TRANG']
const Address = ['Nha Trang']
const Tags = ['Áp dụng hoàn tiền', 'Đổi lịch lại khả dụng']

function Price (props){
    // const total = 
    const changePrice = parseFloat(props.price);
    const total = Math.floor((changePrice * 3));
    return (
        <span style={{fontSize:12, color: 'rgb(104, 113, 118)'}}>{total}</span>
    )
}

function InfoPartner() {
    const UlTags = Tags.map((item)=>
        <li id='li-tags'>{item}</li>)
    return(
        <div className='detail-info-partner' style={{width:475}}>
            <div className='detail-info-partner-left'>
                <h3>{NamePartner}</h3>
                <p style={{color:'rgb(3, 18, 26)', fontWeight:'bold'}}>{Address}</p>
                <span className='spans-rate'>Chưa có Xếp hạng &amp; Đánh giá</span>
                <ul id='Ul-Tags'>{UlTags}</ul>
            </div>
            <div className='detail-info-partner-right'>
                <img src={Logo} style={{paddingLeft:180, paddingBottom:30}}/>
                  <p style={{width:'fit-content',paddingLeft:140, fontSize:12, color:'rgb(104, 113, 118)', fontWeight:600, marginRight:0, marginTop:0}}>Giá thuê cơ bản từ</p>
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                  <span style={{color: 'rgb(255, 94, 31)', fontWeight: 'bold', fontSize: '18px'}}>809.000</span>
                    <p style={{margin: '0px', padding: '6px 0px 0px 5px', color: 'rgb(104, 113, 118)'}}> / ngày</p></div>
                <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '4px'}}>
                    {/* <span style={{fontSize:12, color: 'rgb(104, 113, 118)'}} id='total-price'>1.219.200</span> */}
                    <Price  price='609.600'/>
                    <p style={{margin: '0px', paddingLeft: '5px', color: 'rgb(104, 113, 118)', fontSize:12}}>VND Tổng</p>
                    <AlertDialog/></div>
                <Link to="/DetailCar" style={{width:'fit-content'}}>
                    <button type="submit" id="btn-search" style={{width: '150px', margin:'20px 0px 0px 100px '}}>Tiếp tục</button>
                </Link>
            </div>
            
        </div>
    )
}
export default InfoPartner;