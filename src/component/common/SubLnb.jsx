import React from 'react';
import { Link } from 'react-router-dom';
import './common.css'

function SubLnb({about, vision, ci, history, performance}) {
    return (
        <ul id="sub-lnb" class="mt-60">
            <li className={about&& "active"}><Link to="/about/bexco">About BEXCO</Link></li>
            <li className={vision&& "active"}><Link to="/about/vision">VISION</Link></li>
            <li className={ci&& "active"}><Link to="/about/ci">CI</Link></li>
            <li className={history&& "active"}><Link to="/about/history" className='ko'>연혁</Link></li>
            <li className={performance&& "active"}><Link to="/about/performance" className='ko'>주요행사</Link></li>
        </ul>
    );
}

export default SubLnb;