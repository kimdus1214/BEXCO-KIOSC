import React from 'react'

function Info() {
  return (
    <div className="contents mt-35">
        <ul className="layerBtn-lists info-list">
            <li className="layerBtn" data-location="https://bexco.co.kr/kor/CMS/CompanyMgr/001/001/foodBeverage.do?mCode=MN076">
                <span className="num">01</span>
                <h3 className="section-tit ft-45 color-white mt-10">부대시설</h3>
                <p className="en mt-10">Location Plan</p>
                <img src={process.env.PUBLIC_URL + "/img/icons/btn_more_facility.svg"} alt="" className="mt-35" />
            </li>
            <li className="layerBtn" data-location="https://bexco.co.kr/kor/CMS/Contents/Contents.do?mCode=MN083">
                <span className="num">02</span>
                <h3 className="section-tit ft-45 color-white mt-10">교통안내</h3>
                <p className="en mt-10">Location Plan</p>
                <img src={process.env.PUBLIC_URL + "/img/icons/btn_more_facility.svg"} alt="" className="mt-35" />
            </li>
            <li className="layerBtn" data-location="https://bexco.co.kr/kor/CMS/Contents/Contents.do?mCode=MN091">
                <span className="num">03</span>
                <h3 className="section-tit ft-45 color-white mt-10">주차안내</h3>
                <p className="en mt-10">Location Plan</p>
                <img src={process.env.PUBLIC_URL + "/img/icons/btn_more_facility.svg"} alt="" className="mt-35" />
            </li>
        </ul>
    </div>
  );
}

export default Info;