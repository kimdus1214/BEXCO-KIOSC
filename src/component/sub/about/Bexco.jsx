import React from 'react';
import '../sub.css';

function Bexco(props) {
    return (        
        <div id="about-bexco">
            <div className="bexco__intro section mt-60">
                <img src={process.env.PUBLIC_URL + "/img/sub/con01_01_01_01.png"} />
                <div className="paraph pt-100 pb-165">
                    <h3 className="section-tit">고객의 꿈을 실현하는 글로벌 MICE 플랫폼</h3>
                    <p className="default mt-30">
                        세계적인 해양도시 부산의 랜드마크인 BEXCO는 세계 유수의 초대형 국제행사를 성공적으로 <br/>
                        유치, 개최한 다년간의 노하우와 차별화된 운영 전략으로 성공적인 비즈니스를 만들어 갑니다.<br/>
                        BEXCO는 세계 속의 초일류 전시·컨벤션센터임을 자부하며 <br/>
                        모든 고객에게 최고의 가치를 선사해 드릴 것입니다.
                    </p>
                </div>
            </div>
            
            <div className="bexco__info section pt-30 pb-80">
                <div className="inner">
                    <ul className="lists--bB-line cols-3 sp40">
                        <li>
                            <span>회사명</span>
                            <p className="default mt-15">주식회사 벡스코</p>
                        </li>
                        <li>
                            <span>설립일자</span>
                            <p className="default mt-15 en">1995년 12월 5일</p>
                        </li>
                        <li>
                            <span>준공일자</span>
                            <p className="default mt-15 en">2001년 05월 23일</p>
                        </li>
                        <li>
                            <span>개장일자</span>
                            <p className="default mt-15 en">2001년 09월 13일</p>
                        </li>
                        <li>
                            <span>연면적</span>
                            <p className="default mt-15 en">215,173㎡</p>
                        </li>
                        <li>
                            <span>건축면적</span>
                            <p className="default mt-15 en">76,910㎡</p>
                        </li>
                        <li className="facility-info pb-60">
                            <span>시설안내</span>
                            <ul className="lists--box-line cols-2 sp20">
                                <li>
                                    <a href="">
                                        <b className="default">제1전시장</b>
                                        <p className="default">지하 1층, 지상 7층 (주차면수 985면)</p>
            
                                        <div className="arrow mt-45">
                                            <img src={process.env.PUBLIC_URL + '/img/icons/btn_more.svg'} alt="" />
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <b className="default">제2전시장</b>
                                        <p className="default">지하 2층, 지상 5층 (주차면수 1,672면)</p>
            
                                        <div className="arrow mt-45">
                                            <img src={process.env.PUBLIC_URL + "/img/icons/btn_more.svg"} alt="" />
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <b className="default">오디토리움</b>
                                        <p className="default">지하 2층, 지상 5층 (주차면수 377면)</p>
            
                                        <div className="arrow mt-45">
                                            <img src={process.env.PUBLIC_URL + "/img/icons/btn_more.svg"} alt="" />
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <b className="default">누리마루APEC하우스</b>
                                        <p className="default">지상 중3층<br/>(연면적 2,994.5㎡ / 연면적 1,872.3㎡)</p>
            
                                        <div className="arrow mt-20">
                                            <img src={process.env.PUBLIC_URL + "/img/icons/btn_more.svg"} alt="" />
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="bexco__value section pt-120 pb-160">
                <div className="inner">
                    <img src="<?=G5_IMG_URL?>/" alt="" />
                    <div className="txt mt-40">
                        <span className="verLine"></span>
                        <p className="default mt-40">고객의 꿈을 실현하는 글로벌 MICE 플랫폼</p>
                        <img src={process.env.PUBLIC_URL + "/img/icons/logo_50.svg"} alt="" className="mt-20" />
                    </div>                
                </div>
            </div>
        </div>
    );
}

export default Bexco;