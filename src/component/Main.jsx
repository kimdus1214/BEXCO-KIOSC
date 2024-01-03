import React from 'react';
import {Link} from "react-router-dom";
import './main.css';

function Main(props) {
    return (
        <div id="wrap">
            <main id="main">
                <h1 id="logo">
                    <img src={process.env.PUBLIC_URL + '/img/icons/logo.svg'} alt="" />
                </h1>
                <ul id="main_cate">
                    <li>
                        <Link to="/about/Bexco">
                            <img src={process.env.PUBLIC_URL + '/img/icons/icon_01.svg'} alt="" class="mt-20" />
                            <p class="mt-40">벡스코소개</p>
                        </Link>
                    </li>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/img/icons/icon_02.svg'} alt="" />
                        <p class="mt-20">시설안내</p>
                    </li>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/img/icons/icon_03.svg'} alt="" />
                        <p class="mt-20">행사일정</p>
                    </li>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/img/icons/icon_04.svg'} alt="" />
                        <p class="mt-20">이용안내</p>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default Main;