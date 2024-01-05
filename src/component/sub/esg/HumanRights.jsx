import React from 'react'

function HumanRights() {
  return (
    <div id="humanRights-Management" className="esg-section pb-165 mt-80">
        <div className="part">
            <div className="tit">
                <img src={process.env.PUBLIC_URL + "/img/icons/icon_quotes_01.svg"} alt="" className="double-quot left" />
                <h3 className="section-tit">BEXCO 인권경영 선언문</h3>
                <img src={process.env.PUBLIC_URL + "/img/icons/icon_quotes_02.svg"} alt="" className="double-quot right" />
            </div>
        </div>

        <div className="part border-box shape pt-70 pb-95 mt-90">
            <p className="default">
                우리 벡스코는 전시·컨벤션 조직으로 MICE의 가치를 창출하여 <br/>
                경제·문화발전기여라는 사명을 달성하기 위해 노력하며, <br/>
                ‘차별없는 공정한 사회구현’과 ‘사람을 먼저 생각하는 인권경영’을 지향한다. <br/>
                이를 위해 우리는 기관의 모든 경영활동 과정에서 임직원이 준수하여 야 할 행동규범과 <br/>
                가치판단 기준인 ‘벡스코 인권경영 선언문’을 다음과 같이 선언하고 실천을 다짐한다.
            </p>
            <img src={process.env.PUBLIC_URL + "/img/icons/line_dot.svg"} alt="" className="mt-50" />
            <ul className="ethics-charter mt-15">
                <li>
                    <div className="num"><b>하나,</b></div>
                    <div className="con">
                        <p className="default">우리는 사람을 최우선으로 하는 경영을 한다.</p>
                    </div>
                </li>
                <li>
                    <div className="num"><b>하나,</b></div>
                    <div className="con">
                        <p className="default">
                            우리는 고용에 있어 성별, 연령, 인종, 장애, 종교, 정치적 성향과 <br/>
                            출신지역에 따른 차별을 금지하며 다양성을 존중한다.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="num"><b>하나,</b></div>
                    <div className="con">
                        <p className="default">우리는 결사 및 단체교섭의 자유를 보장한다.</p>
                    </div>
                </li>
                <li>
                    <div className="num"><b>하나,</b></div>
                    <div className="con">
                        <p className="default">우리는 직원에게 안전하고 위생적인 근무환경을 제공한다.</p>
                    </div>
                </li>
                <li>
                    <div className="num"><b>하나,</b></div>
                    <div className="con">
                        <p className="default">우리는 강제노동 및 아동노동을 금지한다.</p>
                    </div>
                </li>
                <li>
                    <div className="num"><b>하나,</b></div>
                    <div className="con">
                        <p className="default">
                            우리는 투명하고 공정하게 거래하며, 유관기관 등을 포함한 협력회사, <br/>
                            자회사, 지역사회 등 모든 이해관계자의 인권을 존중한다.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="num"><b>하나,</b></div>
                    <div className="con">
                        <p className="default">
                            우리는 국내외 환경법규를 준수하고 환경보호와 <br/>
                            오염방지를 위해 노력한다.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="num"><b>하나,</b></div>
                    <div className="con">
                        <p className="default">
                            우리는 인권침해를 사전에 예방하며 적극적인 구제를 위하여 노력할 <br/>
                            뿐만 아니라, 지속적인 인권개선활동으로 인권 경영의 선두에 선다.
                        </p>
                    </div>
                </li>
            </ul>        
            <div className="representative mt-75">
                <img src={process.env.PUBLIC_URL + "/img/icons/img_bexco_employee.svg"} alt="" />
            </div>
        </div>
    </div>
  );
}

export default HumanRights;