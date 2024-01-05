import React from 'react'

function Event() {
  return (
    <div className="contents mt-35">
        <ul className="layerBtn-lists event-list">
            <li className="layerBtn" data-location="https://bexco.co.kr/kor/CMS/EventScheduleMgr/list.do?mCode=MN214">
                <span className="num">01</span>
                <h3 className="section-tit ft-45 color-white mt-10">행사일정</h3>
                <p className="en mt-10">Location Plan</p>
                <img src={process.env.PUBLIC_URL + "/img/icons/btn_more_facility.svg"} alt="" className="mt-35" />
            </li>
        </ul>
    </div>
  );
}

export default Event;