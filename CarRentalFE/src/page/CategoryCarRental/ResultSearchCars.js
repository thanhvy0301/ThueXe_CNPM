import React, { useState } from "react";
import {Link} from "react-router-dom";
import { Slide } from "@mui/material";
import { css } from 'styled-components';
import { type } from '@testing-library/user-event/dist/type';
import { StyledEngineProvider } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import KM from "../../Img/KiaMorning.png";
import VF from "../../Img/VinfastFadil.png";
function Price (props){
  // const total = 
  const changePrice = parseFloat(props.price);
  const total = Math.floor((changePrice * 3));
  return (
      <span style={{fontSize:12, color: 'rgb(104, 113, 118)'}}>{total}</span>
  )
}

function ResultSearchCars() {
    return(
    <div style={{display: 'flex', backgroundColor: '#e6e6e6c4!important', flexDirection: 'column'}}>
            <p style={{paddingLeft: '10px', fontWeight: 'bold', paddingBottom:0, marginTop:0}}>Tìm thấy  
            <span id="result-cars" style={{color: 'black'}}> 10</span> loại xe</p>
            <div id="content-right">
              <div style={{display: 'flex'}}>
                <img src={KM} style={{objectFit: 'contain', width: '160px', height: '120px', marginTop: '25px'}} />
                <div className="div-detail">
                  <span className="name-car-detail" style={{color: 'black'}}>Kia Morning</span>
                  <p style={{marginBottom: '0px', backgroundColor: 'gainsboro', fontSize: '13px', borderRadius: '20px', width: '65px', height: '20px',
                            textAlign: 'center', paddingTop: '5px', color: 'rgb(104, 113, 118)', marginTop:10}}>Tự động</p>
                  <div style={{display: 'flex', marginTop:5}}>
                    <p style={{width: '50px'}}><i className="fa-solid fa-suitcase" style={{paddingRight: '5px'}} />2</p>
                    <p><FontAwesomeIcon icon="fa-solid fa-suitcase" />2</p>
                  </div><p style={{marginTop:10}}>Tự lái</p>
                </div>
                <div style={{width: '250px', marginLeft: '10px'}}>
                  <p style={{marginBottom: '0px', paddingLeft: '115px', color: 'rgb(104, 113, 118)', paddingTop:20}}>Giá thuê cơ bản từ</p>
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <span style={{color: 'rgb(255, 94, 31)', fontWeight: 'bold', fontSize: '1.7em'}}>609.600 VND</span>
                    <p style={{margin: '0px', padding: '6px 0px 0px 5px', color: 'rgb(104, 113, 118)'}}> / ngày</p></div>
                  <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '4px'}}>
                  <Price  price='609.600'/>
                    <p style={{margin: '0px', paddingLeft: '5px', color: 'rgb(104, 113, 118)', fontSize:12}}>VND Tổng</p></div>
                <Link to="/DetailCar">
                <button type="submit" id="btn-search" style={{width: '220px', margin: '30px 0px 0px 30px'}}>Tiếp tục
                    {/* <a style={{textDecoration: 'none', color: 'white'}}>Tiếp tục</a> */}
                  </button>
                </Link>
                  
            </div>
          </div>
        </div>
    </div>
    )
}
export default ResultSearchCars;
