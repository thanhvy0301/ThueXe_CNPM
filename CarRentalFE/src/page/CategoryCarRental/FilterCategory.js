import React, { useState } from "react";
import {Link} from "react-router-dom";
import { Slide } from "@mui/material";
import { css } from 'styled-components';
import { type } from '@testing-library/user-event/dist/type';
import { StyledEngineProvider } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Categories} from "./Categories.css";
import PriceRangeSlide from "./PriceRangeSlide";
import ResultSearchCars from "./ResultSearchCars";
function FilterCategory() {
  const divContent = {
    marginTop:250,
    display: 'flex',
    marginLeft:100
  }

    return(
        <div>
      <form>
        <div style={divContent}>
          <div id="filter-left" style={{height:800}}>
            <div id="label-filter" style={{display: 'flex', alignItems: 'center', marginLeft: '15px', paddingTop:20, marginBottom:15}}>
              <p style={{width: '70%', fontWeight: 600, marginRight:10}}>BỘ LỌC</p>
              <button type="reset" id="btn-reset-filter" value="xx">Cài lại</button>
            </div>
            <div id="SoXe-btn" onclick="myFunction()" className="dropbtn">
              <p style={{width: '180px', paddingRight: '10px', fontWeight: 'bold', marginTop:10, paddingBottom:10}}>Số xe</p>
              <i className="fa-solid fa-angle-up" style={{paddingTop: '20px'}} />
            </div>
            <div id="Filter-item" className="dropdown-content">
              <label className="container">Tất cả
                <input type="radio" defaultChecked="checked" name="radio" />
                <span className="checkmark" />
              </label>
              <label className="container">Tự dộng
                <input type="radio" name="radio" />
                <span className="checkmark" />
              </label>
              <label className="container">Số sàn
                <input type="radio" name="radio" />
                <span className="checkmark" />
              </label>                      
            </div>
            <div id="SoXe-btn" onclick="myFunction()" className="dropbtn">
              <p style={{width: '180px', paddingRight: '10px', fontWeight: 'bold',paddingBottom:10}}>Số hành khách tối đa</p>
              <i className="fa-solid fa-angle-up" style={{paddingTop: '20px'}} />
            </div>
            <div id="Filter-item" className="dropdown-content">
              <label className="container">Tất cả
                <input type="radio" defaultChecked="checked" name="radio-2" />
                <span className="checkmark" />
              </label>
              <label className="container">4 hành khách
                <input type="radio" name="radio-2" />
                <span className="checkmark" />
              </label>
              <label className="container">5 - 6 hành khách
                <input type="radio" name="radio-2" />
                <span className="checkmark" />
              </label> 
              <label className="container"> &gt;&gt; 6 hành khách
                <input type="radio" name="radio-2" />
                <span className="checkmark" />
              </label>                      
            </div>
            <div id="SoXe-btn" onclick="myFunction()" className="dropbtn">
              <p style={{width: '180px', paddingRight: '10px', fontWeight: 'bold', paddingBottom:10}}>Khoảng giá mỗi ngày thuê</p>
              <i className="fa-solid fa-angle-up" style={{paddingTop: '20px'}} />
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
              <div className="price">
                <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '4px'}}>
                  <label className="vnd">VND</label>
                  <input type="text" className="ip-price" min={0} max={1016000} step={1} defaultValue={0} pattern="{1,15}" />
                </div>
              </div>
              <div className="price">
                <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '4px'}}>
                  <label className="vnd" style={{width: 'fit-content', paddingRight: '5px'}}>VND</label>
                  <input type="text" class="ip-price" min="0" max="1016000" step="1" value="1016000" pattern="{1,15}"/>                  
                </div>
              </div>
            </div>
            <PriceRangeSlide/>
            <div  className="dropdown-content" style={{backgroundColor:'white', borderRadius:10, height:300, marginTop:50}}>
              <p style={{width: '180px', paddingRight: '10px', fontWeight: 'bold', paddingLeft: '15px',paddingTop:30}}>Sắp xếp</p>
              <div style={{width: 'fit-content', marginLeft: '20px', marginTop: '20px'}}>
                <label className="container">Tất cả
                  <input type="radio" defaultChecked="checked" name="radio-2" />
                  <span className="checkmark" />
                </label>
                <label className="container">4 hành khách
                  <input type="radio" name="radio-2" />
                  <span className="checkmark" />
                </label>
                <label className="container">5 - 6 hành khách
                  <input type="radio" name="radio-2" />
                  <span className="checkmark" />
                </label> 
                <label className="container"> &gt;&gt; 6 hành khách
                  <input type="radio" name="radio-2" />
                  <span className="checkmark" />
                </label>     
              </div>
            </div>
          </div>         
          <ResultSearchCars/>          
        </div>
      </form>
    </div>
    )
}
export default FilterCategory;