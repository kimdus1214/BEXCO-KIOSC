import React from 'react'

function Ethical() {
    return (
        <div id="ethical-Management" className="esg-section pb-165 mt-80">
            <div class="part">
                <div class="tit">
                    <img src={process.env.PUBLIC_URL + '/img/icons/icon_quotes_01.svg'} alt="" class="double-quot left" />
                    <h3 class="section-tit">BEXCO 윤리 헌장</h3>
                    <img src={process.env.PUBLIC_URL + '/img/icons/icon_quotes_02.svg'} alt="" class="double-quot right" />
                </div>
                <p class="default mt-35">
                    우리 ㈜벡스코는 2013년부로 윤리경영 기반 조성 강화를 위해 <br/>
                    BEXCO 윤리헌장을 제정하고, 개정 공직자 행동강령 표준안에 따라 <br/>
                    2018년 4월 17일 부로 'BEXCO 임직원 행동강령'을 <br/>
                    전면 개정, 공람하여 사내 윤리규정을 강화하였습니다.
                </p>
            </div>

            <div class="part border-box shape pt-70 pb-70 mt-90">
                <p class="default">
                    우리는 아시아 최고의 전시·컨벤션 허브로서 관련 산업의 성장에 이바지하며, <br/>
                    지역경제와의 동반성장을 위해 노력하는 BEXCO인으로서 고객만족을 최우선으로 하는 <br/>
                    윤리경영을 실현하기 위해, 다음과 같이 “BEXCO 윤리헌장“을 제정하고 적극 실천한다.
                </p>
                <img src={process.env.PUBLIC_URL + '/img/icons/line_dot.svg'} alt="" class="mt-50" />
                <ul class="ethics-charter mt-15">
                    <li>
                        <div class="num"><b>하나,</b></div>
                        <div class="con">
                            <p class="default">
                                우리는 고객의 편의를 최우선으로 하고 고객만족을 위한 <br/>
                                최고의 서비스를 제공하기 위해 항상 점검, 개선하고자 노력한다.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="num"><b>하나,</b></div>
                        <div class="con">
                            <p class="default">
                                우리는 청렴하고 투명한 윤리관을 바탕으로 관련 법규를 준수하고 <br/>
                                공정하게 업무에 임하여 윤리경영 실천에 앞장선다.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="num"><b>하나,</b></div>
                        <div class="con">
                            <p class="default">
                                우리는 미래지향적인 조직문화 구축으로 지역 사회의 신뢰를 획득하고 <br/>
                                지속 가능한 경영기반을 바탕으로 전시·컨벤션 산업 발전에 이바지 한다.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="num"><b>하나,</b></div>
                        <div class="con">
                            <p class="default">
                                우리는 지역사회의 일원으로 지역경제와의 동반성장을 위한 <br/>
                                기회를 모색, 창출하여 지역 발전에 이바지한다.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="part tel-info mt-45">
                <ul>
                    <li>
                        <b>담당자</b>
                        <p>감사담당관 신재한 차장</p>
                    </li>
                    <li>
                        <b>연락처</b>
                        <p>051-740-7600</p>
                    </li>
                </ul>
            </div>            
        </div>
    );
}

export default Ethical;