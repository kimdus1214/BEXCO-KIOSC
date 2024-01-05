import React from 'react';
import { Link } from 'react-router-dom';

function SubLnb({about, vision, ci, history, performance, esg, bexcoEsg, ethical, humanRights, safetyHealth}) {
    return (
        <>
        {esg ?
            <ul id="sub-lnb" class="mt-60">
                <li className={bexcoEsg&& "active"}><Link to="/esg/esg">BEXCO ESG</Link></li>
                <li className={ethical&& "active"}><Link to="/esg/ethical" className='ko'>윤리경영</Link></li>
                <li className={humanRights&& "active"}><Link to="/esg/humanRights" className='ko'>인권경영</Link></li>
                <li className={safetyHealth&& "active"}><Link to="/esg/safetyHealth" className='ko'>안전보건경영</Link></li>
            </ul>
            : 
            <ul id="sub-lnb" class="mt-60">
                <li className={about&& "active"}><Link to="/about/bexco">About BEXCO</Link></li>
                <li className={vision&& "active"}><Link to="/about/vision">VISION</Link></li>
                <li className={ci&& "active"}><Link to="/about/ci">CI</Link></li>
                <li className={history&& "active"}><Link to="/about/history" className='ko'>연혁</Link></li>
                <li className={performance&& "active"}><Link to="/about/performance" className='ko'>주요행사</Link></li>
            </ul>
            }
        </>
    );
}

export default SubLnb;