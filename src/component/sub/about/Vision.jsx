import React from 'react';
import '../sub.css';

function Vision(props) {
    return (
        <div id="vision">
            <div className="mission mt-80">
                <div className="inner-wide">
                    <div className="tit">
                        <p className="tit-en">MISSION</p>
                        <h3 className="section-tit mt-5">미션</h3>
                    </div>
                    <div className="gradi--bB-box pt-40 pb-40 mt-40">
                        <p>우리는 최고의 전시컨벤션 조직으로<br/>MICE의 가치를 창출하여 경제·문화 발전에 기여한다.</p>
                    </div>
                </div>
            </div>
            <div className="vision mt-80">
                <div className="inner-wide">
                    <div className="tit">
                        <p className="tit-en">Vision</p>
                        <h3 className="section-tit mt-5">비전</h3>
                    </div>
                    <div className="gradi-box pt-60 pb-60 mt-40">
                        <p>고객의 꿈을 실현하는 글로벌 MICE 플랫폼</p>
                    </div>
                    <div className="part pb-110 mt-90 border-bottom--c9">
                        <img src={process.env.PUBLIC_URL + '/img/icons/con01_01_02_icon_01.svg'} alt="" />
                        <h4 className="part-tit mt-45">고객의 꿈을 실현하는</h4>
                        <p className="default mt-25">
                            BEXCO의 전문성을 최대한 활용하여 행사 주최자와 참가업체에게는 <br/>
                            성과를 통한 성공적인 비즈니스 기회를 제공하고, 다양한 가치를 아우르는 MICE 컨텐츠와 <br/>
                            서비스를 통해 참관객들의 만족도를 증대시키고, MICE를 통한 경제, 문화, 사회적 파급효과를 <br/>
                            지역사회 및 유관업계와 공유함으로써 고객 모두의 꿈을 실현하는 것을 지향함.
                        </p>
                    </div>
                    <div className="part pb-100 mt-80">
                        <img src={process.env.PUBLIC_URL + '/img/icons/con01_01_02_icon_02.svg'} alt="" />
                        <h4 className="part-tit mt-45">글로벌 MICE 플랫폼</h4>
                        <p className="default mt-20">
                            지속적인 전시컨벤션의 가치창출로 지역 및 국가의 경제∙문화발전에 기여하고, <br/>
                            MICE(Meeting, Incentive, Convention, Exhibition) 행사를 통해 <br/>
                            고객이 추구하는 새로운 가치가 성공적으로 거래되고, <br/>
                            참여자들간 소통과 상호작용이 극대화될 수 있는 상생의 생태계 역할을 함.
                        </p>
                    </div>
                </div>
            </div>
            <div className="core-values pt-90 pb-120">
                <h3 className="section-tit">핵심가치</h3>
                <ul className="diagram">
                    <li>
                        <img src={process.env.PUBLIC_URL + '/img/icons/con01_01_02_icon_03.svg'} alt="" />
                        <div className="txt">
                            <b className="part-tit">글로벌화</b>
                            <p className="default mt-15">
                                전시컨벤션 사업의 융복합화 및 국제화, <br/>
                                글로벌 MICE 인프라 확충을 통해 <br/>
                                세계적인 경쟁력을 만들어 나가겠습니다.
                            </p>
                        </div>
                    </li>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/img/icons/con01_01_02_icon_04.svg'} alt="" />
                        <div className="txt">
                            <b className="part-tit">가치혁신</b>
                            <p className="default mt-15">
                                신규 사업 영역의 개척 및 확대, <br/>
                                MICE 운영시스템의 디지털 전환을 통해 <br/>
                                부가가치 창출 확대에 앞장서겠습니다.
                            </p>
                        </div>
                    </li>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/img/icons/con01_01_02_icon_05.svg'} alt="" />
                        <div className="txt">
                            <b className="part-tit">고객만족</b>
                            <p className="default mt-15">
                                ESG경영, 안전경영, 고객중심 시설 및 <br/>
                                프로세스 혁신을 통해 지속가능경영으로 <br/>
                                고객만족을 최우선하겠습니다.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="strategic-direction pb-135 mt-80">
                <div className="inner-wide">
                    <h3 className="section-tit">3대 전략방향</h3>
                    <ul className="diagram">
                        <li>
                            <b className="default color-white">전시사업 <br/>경쟁력 강화</b>
                        </li>
                        <li>
                            <b className="default color-white">임대·부대사업 <br/>지속가능성 제고</b>
                        </li>
                        <li>
                            <b className="default color-white">지속가능경영 <br/>고도화</b>
                        </li>
                    </ul>
                    <div className="keyword mt-80">
                        <p className="default color-white">
                            전시역량 강화<br/>
                            전시사업의 글로벌화<br/>
                            마이스산업 네트워크 강화<br/>
                            전시사업 효율성 제고
                        </p>
                        <p className="default color-white">
                            전시 마케팅 강화<br/>
                            컨벤션 마케팅 강화<br/>
                            이벤트 마케팅 강화<br/>
                            글로벌 MICE 인프라 확충
                        </p>
                        <p className="default color-white">
                            ESG 경영<br/>
                            안전 경영<br/>
                            친환경 경영<br/>
                            창의혁신 경영
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vision;