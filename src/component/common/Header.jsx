import React,{useState, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import './common.css';
import SubDepth from './SubDepth';


function Header(props) {
    const [headerHeight, setHeaderHeight] = useState(0);
    const $header = useRef();

    useEffect(()=>{
        const updateHeaderHeight = ()=>{
            if($header.current){
                const height = $header.current.clientHeight;
                setHeaderHeight(height);
            }
        }        
        updateHeaderHeight();
    },[]);
    // console.log(headerHeight);

    return (
        <>
            <div id="header" ref={$header}>
                <h1 id="sub-logo"><Link to="/"><img src={process.env.PUBLIC_URL + '/img/icons/logo_80.svg'}/></Link></h1>
                <ul className="header-menu mt-30">
                    <li><Link to="/about/Bexco">BEXCO 소개</Link></li>
                    <li><Link to="/about/Bexco">시설안내</Link></li>
                    <li><Link to="/about/Bexco">행사일정</Link></li>
                    <li><Link to="/about/Bexco">이용안내</Link></li>
                </ul>
            </div>
            <SubDepth headerHeight={headerHeight} />
        </>
    );
}

export default Header;