import React from 'react'

function Facility() {
  return (
    <div className="contents mt-35">
        <ul className="layerBtn-lists facility-list">
            <li className="layerBtn" data-location="https://bexco.co.kr/kor/CMS/Contents/Contents.do?mCode=MN220">
                <span className="num">01</span>
                <h3 className="section-tit ft-45 color-white mt-10">전체배치도</h3>
                <p className="en mt-10">Location Plan</p>
                <img src={process.env.PUBLIC_URL + "/img/icons/btn_more_facility.svg"} alt="" className="mt-35" />
            </li>
            <li className="layerBtn" data-location="https://bexco.co.kr/kor/CMS/Contents/Contents.do?mCode=MN051">
                <span className="num">02</span>
                <h3 className="section-tit ft-45 color-white mt-10">전시장</h3>
                <p className="en mt-10">Exhibition Center</p>
                <img src={process.env.PUBLIC_URL + "/img/icons/btn_more_facility.svg"} alt="" className="mt-35" />
            </li>
            <li className="layerBtn" data-location="https://bexco.co.kr/kor/CMS/Contents/Contents.do?mCode=MN056">
                <span className="num">03</span>
                <h3 className="section-tit ft-45 color-white mt-10">회의실</h3>
                <p className="en mt-10">Meeting Room</p>
                <img src={process.env.PUBLIC_URL + "/img/icons/btn_more_facility.svg"} alt="" className="mt-35" />
            </li>
            <li className="layerBtn" data-location="https://bexco.co.kr/kor/CMS/Contents/Contents.do?mCode=MN063">
                <span className="num">04</span>
                <h3 className="section-tit ft-45 color-white mt-10">컨벤션홀</h3>
                <p className="en mt-10">Convention Hall</p>
                <img src={process.env.PUBLIC_URL + "/img/icons/btn_more_facility.svg"} alt="" className="mt-35" />
            </li>
            <li className="layerBtn" data-location="https://bexco.co.kr/kor/CMS/Contents/Contents.do?mCode=MN222">
                <span className="num">05</span>
                <h3 className="section-tit ft-45 color-white mt-10">오디토리움</h3>
                <p className="en mt-10">Auditorium</p>
                <img src={process.env.PUBLIC_URL + "/img/icons/btn_more_facility.svg"} alt="" className="mt-35" />
            </li>
            <li className="layerBtn" data-location="https://bexco.co.kr/kor/CMS/Contents/Contents.do?mCode=MN049">
                <span className="num">06</span>
                <h3 className="section-tit ft-45 color-white mt-10">누리마루 APEC</h3>
                <p className="en mt-10">Nurimaru</p>
                <img src={process.env.PUBLIC_URL + "/img/icons/btn_more_facility.svg"} alt="" className="mt-35" />
            </li>
            <li className="layerBtn" data-location="https://bexco.co.kr/kor/CMS/Contents/Contents.do?mCode=MN066">
            <span className="num">07</span>
                <h3 className="section-tit ft-45 color-white mt-10">하이브리드 행사장</h3>
                <p className="en mt-10">Hybrid Hall</p>
                <img src={process.env.PUBLIC_URL + "/img/icons/btn_more_facility.svg"} alt="" className="mt-35" />                
            </li>
        </ul>
    </div>
  );
}

export default Facility;