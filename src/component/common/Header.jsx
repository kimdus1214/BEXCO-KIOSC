import React,{useState, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import SubDepth from './SubDepth';


function Header({isSubDepth}) {
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
                <h1 id="sub-logo"><Link to="/"><img src={process.env.PUBLIC_URL + '/img/icons/logo_80.svg'} alt='로고 이미지' /></Link></h1>
                <ul className="header-menu mt-30">
                    <li><Link to="/about/Bexco">BEXCO 소개</Link></li>
                    <li><Link to="/facility">시설안내</Link></li>
                    <li><Link to="/event">행사일정</Link></li>
                    <li><Link to="/info">이용안내</Link></li>
                </ul>
            </div>
            {isSubDepth&&
                <SubDepth headerHeight={headerHeight} />
            }
        </>
    );
}

export default Header;