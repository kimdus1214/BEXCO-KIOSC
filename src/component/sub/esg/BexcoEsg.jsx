import React from 'react'

function BexcoEsg() {
  return (
    <div id="BEXCO-ESG" className="esg-section pb-165 mt-65">
        <div className="organizational-vision">
            <div className="inner-wide">
                <h3 className="section-tit">조직비전</h3>
                <div className="gradi-box pt-60 pb-60 mt-30">
                    <p>고객의 꿈을 실현하는 글로벌 MICE 플랫폼</p>
                </div>
            </div>
        </div>
        <div className="ESGManagement-vision mt-80">
            <div className="inner-wide">
                <h3 className="section-tit">ESG경영비전</h3>
                <div className="gradi--bB-box pt-60 pb-60 mt-30">
                    <p>ESG 경영실천을 통해 지속가능한 미래를 고객과 함께</p>
                </div>
            </div>
        </div>
        <div className="visionByItem mt-80">
            <div className="inner-wide">
                <h3 className="section-tit">항목별 비전</h3>
                <ul className="vision-list mt-30">
                    <li className="vision--environment">
                        <img src={process.env.PUBLIC_URL + '/img/sub/con01_03_01_01.png'} alt="" />
                        <div className="txt">
                            <div className="tit"><h5>저탄소·친환경 센터</h5></div>
                            <div className="con">
                                <ol>
                                    <li>
                                        <span className="num">01</span>
                                        <p className="default">그린센터 구축</p>
                                    </li>
                                    <li>
                                        <span className="num">02</span>
                                        <p className="default">친환경 경영</p>
                                    </li>
                                    <li>
                                        <span className="num">03</span>
                                        <p className="default">기후변화 대응</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </li>
                    <li className="vision--social">
                        <img src={process.env.PUBLIC_URL + '/img/sub/con01_03_01_02.png'} alt="" />
                        <div className="txt">
                            <div className="tit"><h5>상생협력을 통한 <br/>지속적인 가치 창출</h5></div>
                            <div className="con">
                                <ol>
                                    <li>
                                        <span className="num">01</span>
                                        <p className="default">상생협력·지역경제 활성화</p>
                                    </li>
                                    <li>
                                        <span className="num">02</span>
                                        <p className="default">사회공헌·일자리사업</p>
                                    </li>
                                    <li>
                                        <span className="num">03</span>
                                        <p className="default">고객만족·지역문제해결</p>
                                    </li>
                                    <li>
                                        <span className="num">04</span>
                                        <p className="default">인적자원관리·근로환경</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </li>
                    <li className="vision--convernance">
                        <img src={process.env.PUBLIC_URL + '/img/sub/con01_03_01_03.png'} alt="" />
                        <div className="txt">
                            <div className="tit"><h5>투명한 사회를 <br/>선도하는 청렴기업</h5></div>
                            <div className="con">
                                <ol>
                                    <li>
                                        <span className="num">01</span>
                                        <p className="default">경영투명성 제고</p>
                                    </li>
                                    <li>
                                        <span className="num">02</span>
                                        <p className="default">반부패 사회선도</p>
                                    </li>
                                    <li>
                                        <span className="num">03</span>
                                        <p className="default">윤리의식 향상</p>
                                    </li>
                                    <li>
                                        <span className="num">04</span>
                                        <p className="default">감사기구 등 제도 강화</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="propulsion-system mt-80">
            <div className="inner-wide">
                <h3 className="section-tit">추진체계</h3>
                <ul className="diagram mt-35">
                    <li>
                        <b className="part-tit">조직</b>
                        <p className="default mt-10">추진체계 확립<br/>+ 외부 자문그룹 활용</p>
                    </li>
                    <li>
                        <b className="part-tit">운용</b>
                        <p className="default mt-10">항목별 전략목표를 <br/>조직 성격에 특화하여 세부 이행</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="promotion-base mt-80">
            <div className="inner-wide">
                <h3 className="section-tit">추진기반</h3>
                <div className="border-box--mainColor pt-45 pb-45 mt-30">
                    <ul>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/img/icons/icon_check.svg'} alt="" />
                            <p className="default color-point">문화체육관광부 MICE ESG 운영 가이드 지표</p>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/img/icons/icon_check.svg'} alt="" />
                            <p className="default color-point">조직의 핵심가치(고객만족, 글로벌화, 가치혁신, 역량강화)를 경영 전반에 구체화</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BexcoEsg