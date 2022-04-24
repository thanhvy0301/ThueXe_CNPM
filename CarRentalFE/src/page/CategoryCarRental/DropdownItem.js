import React, { useState } from "react";
import {Link} from "react-router-dom";
import { css } from 'styled-components';
import { type } from '@testing-library/user-event/dist/type';
import { StyledEngineProvider } from '@mui/material/styles';
// import {ThueXeTL} from "ThueXeTL.css";
import {Categories} from "./Categories.css";
function DropdownItem() {
    <div style={{width: '1000px'}} >                   
        <div className="menu-content" style={{borderRadius: '0px'}}>
          <div className="div-search-child" style={{paddingTop: '10px'}}><label style={{marginTop: '10px'}}>Địa điểm thuê xe của bạn</label><br />
            <input type="text" placeholder="Điền thành phố, sân bay, hoặc khách sạn" id="address" required style={{width: '400px', marginTop: '10px'}} />
            <br /></div>
        <div id="labels-time">
            <label className="label-time" style={{width: '200px'}}>Ngày bắt đầu </label>
            <label className="label-time">Giờ bắt đầu</label>
            <label className="label-time" style={{width: '150px'}}>Ngày kết thúc</label>
            <label className="label-time">Giờ kết thúc</label>
        </div>
          <div style={{display: 'flex', justifyContent: 'flex-start'}}>
            <div className="div-search-child">
              <input type="date" className="input-date-time" id="dateStart"  />
              <input type="time" className="input-time" id="timeStart" /><br />
            <div className="div-search-child">
              <input type="date" className="input-date-time"id="dateEnd" />
              <input type="time" className="input-time" id="timeEnd"/>
              <button type="submit" id="btn-search"><a href="../public/ThueXeTL.html" style={{textDecoration: 'none', color: 'white'}}>Tìm xe</a></button>    
            </div>     
        </div>
             
        </div>                         
        </div>
    </div>
}
export default DropdownItem;