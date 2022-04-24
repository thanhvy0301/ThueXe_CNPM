import React from 'react';
import { css } from 'styled-components';
import { type } from '@testing-library/user-event/dist/type';
import { hover } from '@testing-library/user-event/dist/hover';
import Categories from "../CategoryCarRental/CatagoriesCarRen";
import { Link } from 'react-router-dom';
import './DetailCar.css';
function SortResult() {
    return(
        <div id="short-item" className="dropdown-content" style={{height: 330, justifyContent:'space-evenly'}}>
            <p style={{width: '180px', paddingRight: '10px', fontWeight: 'bold', paddingLeft: '20px', marginTop:20}}>Sắp xếp</p>
            <div style={{width: 'fit-content', marginLeft: '20px', marginTop: '20px'}}>
            <label className="container">Đề xuất
                <input type="radio" defaultChecked="checked" name="radio-2" />
                <span className="checkmark" />
            </label>
            <label className="container">Giá thấp nhât
                <input type="radio" name="radio-2" />
                <span className="checkmark" />
            </label>
            <label className="container">Giá thấp nhât
                <input type="radio" name="radio-2" />
                <span className="checkmark" />
            </label> 
            <label className="container">Điểm cao nhất
                <input type="radio" name="radio-2" />
                <span className="checkmark" />
            </label>     
            <label className="container">Điểm thấp nhất
                <input type="radio" name="radio-2" />
                <span className="checkmark" />
            </label> 
        </div>
        </div>
    )
}
export default SortResult;
