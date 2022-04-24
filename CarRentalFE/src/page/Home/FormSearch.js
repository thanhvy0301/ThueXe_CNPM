import React from 'react';
import Home from './Home';
import { css } from 'styled-components';
import { type } from '@testing-library/user-event/dist/type';
import { hover } from '@testing-library/user-event/dist/hover';
import Categories from "../CategoryCarRental/CatagoriesCarRen";
import DateTimePicker from 'react-datetime-picker';
import { Dropdown } from 'bootstrap';
import { Link } from 'react-router-dom';
const labelStyle = {
    marginTop:'0px',
    paddingTop:'20px'
}
const btnStyle={
    textDecoration: 'none',
    color: 'white',
    cursor: 'pointer',
    
}
function App() {
    const laBel = ['Cho thuê xe', 'Địa điểm thuê xe của bạn', 'Ngày bắt đầu ', 'Giờ bắt đầu',
    'Ngày kết thúc', 'Giờ kết thúc']
    const dateCurrent = new Date();
  return (
      <div id="form-search" >
        <div class="div-search-child">
          <label style={labelStyle}>{laBel[0]}</label><br/>   
          <select id="option">
            <option>Tự lái</option>
            <option>Có tài xế</option>
          </select>
        </div>
      <div>
      <div className='div-search-child'>
            <label>{laBel[1]}</label><br/>
          <input type="text" placeholder="Điền thành phố, sân bay, hoặc khách sạn" id="address" required/><br />
        </div>
        <div style={{display:'flex', alignItems:'center'}}>
            <div class="div-search-child" style={{width:'fit-content'}}>
                <label style={labelStyle}>{laBel[2]}</label><br/>
                <input type={"date"} className="input-date-time" id='dateStart' value={dateCurrent}/>
                {/* <DateTimePicker placeholder='Choose time' value={dateCurrent}></DateTimePicker> */}
            </div>
            <div className='div-search-child' style={{width:'fit-content'}}>
                <label style={{paddingLeft:'10px'}}>{laBel[3]}</label><br/>
                <input className="input-time" type={"time"}></input>
            </div>
            <div class="div-search-child" style={{width:'fit-content', marginLeft:'10px'}}>
                <label style={labelStyle}>{laBel[2]}</label><br/>
                <input type={"date"} className="input-date-time" id='dateEnd'/>
            </div>
            <div className='div-search-child' style={{width:'fit-content'}}>
                <label style={{paddingLeft:'10px'}}>{laBel[5]}</label><br/>
                <input className="input-time" type={"time"} ></input>
            </div>
            <Link to="/Categories">
            <button type="submit" id="btn-search" style={btnStyle}> Tìm xe</button>    
            </Link>
        </div>
      </div>
      </div>
  )
}
 
export default App;