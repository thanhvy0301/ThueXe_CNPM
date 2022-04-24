import React, { useState } from "react";
import {Link} from "react-router-dom";
import { css } from 'styled-components';
import { type } from '@testing-library/user-event/dist/type';
import { StyledEngineProvider } from '@mui/material/styles';
import { withTheme } from "styled-components";
import { Dropdown } from "bootstrap";
function ReSearchForm() {
    const StyleResearch = {
        border: 0,
        height: 40,
        borderRadius: 10,
        width: 160,
        fontSize: '1em' ,
        fontWeight: 'bold',
        color: 'rgb(1, 148, 243)',   
        backgroundColor: 'rgb(247, 249, 250)',    
        marginLeft: 100}
    
    // #change-search-btn:hover{
    //     background-color: rgb(238, 238, 238);
    //     cursor: pointer;
    // }
    return( 
        <div >
        <div id="nav-head">
            <div className="dropdown">
                <p style={{paddingLeft: '10px', fontSize: '0.8em', color: 'rgb(133, 133, 133)', marginTop:'10px', marginBottom:20}}>Thuê xe / Thuê xe tự lái</p>
                <div style={{display: 'flex', width: '1000px', flexDirection: 'column'}}>
                <h3 style={{width: '800px', marginBottom: '0px', paddingLeft: '10px', marginTop:'10px'}}>Thuê xe tự lái</h3>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <p style={{margin: '0px', color: 'rgb(133, 133, 133)', width: '700px', paddingLeft: '10px'}}>NHA TRANG - T3, 19 Thg 04 2022 09:00 - T6, 22 Thg 04 2022 09:00</p>  
                    <button style={StyleResearch} className="menu-btn" onclick="clickDropdown()">Thay đổi tìm kiếm</button>   
                </div>  
        </div>
            
            <div style={{width: '1000px'}}>                   
                <div className="menu-content" style={{borderRadius: '0px'}}>
                <div className="div-search-child" style={{paddingTop: '10px'}}><label style={{marginTop: '10px'}}>Địa điểm thuê xe của bạn</label><br />
                    <input type="text" placeholder="Điền thành phố, sân bay, hoặc khách sạn" id="address" required style={{width: '400px', marginTop: '10px'}} />
                    <br /></div>
                <div id="labels-time">
                    <label id="label-time">Ngày bắt đầu </label>
                    <label id="label-time" style={{width: 'fit-content'}}>Giờ bắt đầu</label>
                    <label id="label-time" style={{width:'fit-content', paddingLeft:'35px'}}>Ngày kết thúc</label>
                    <label id="label-time" style={{width:'fit-content', paddingLeft:'40px'}}>Giờ kết thúc</label>
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <div className="div-search-child">
                        <input type="date" className="input-date-time" id="dateStart" style={{width: '200px'}} />
                        <input type="time" className="input-time" style={{marginLeft: '10px'}} id="timeStart" /><br />
                    </div>
                    <div className="div-search-child">
                        <input type="date" className="input-date-time" id="dateEnd" />
                        <input type="time" className="input-time" id="timeEnd" style={{marginLeft:'10px'}} />
                        <button type="submit" id="btn-search"><a href="../public/ThueXeTL.html" style={{textDecoration: 'none', color: 'white', marginTop:0}}>Tìm xe</a></button>    
                    </div>          
                </div>                         
                </div>
            </div>                       
            </div>
        </div>
        </div>
    )
}
export default ReSearchForm;