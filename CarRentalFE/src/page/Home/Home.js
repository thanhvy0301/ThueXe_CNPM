import React from 'react';
// import React, {Component} from 'react';
// import {render} from 'react-dom';
import { css } from 'styled-components';
import { type } from '@testing-library/user-event/dist/type';
import './FormSearch';
import App from './FormSearch';
function contentRight() {
    const ScrollView = {
        width: '230px',
        scrollX:'none',
    }
    const menuItems = ['Vé máy bay', 'Khách sạn', 'Combo tiết kiệm', 'Đưa đón sân bay', 'Experience', 'Cho thuê xe','JR Pass',
    'Điểm thưởng của tôi', 'Tình trạng chuyến bay', 'Thông giá vé'];
    const list = menuItems.map((item) =>
        <li className='li-content' style={ScrollView} >{item}</li>)
    return(
        <div id='content'>
            <div id='menu-scrollView'>
                <ul id='ul-scrollView' >{list}</ul>
            </div>
            <App/>
        </div>
    )
}
export default contentRight;

