import React from 'react';

function Ci(props) {
    return (
        <div id="ci">
            <div className="logo-mark pb-165 mt-80">
                <div className="inner-wide">
                    <div className="part">
                        <h3 className="section-tit">로고마크</h3>
                        <img src={process.env.PUBLIC_URL + '/img/sub/con01_01_03_01.png'} alt="" className="mt-35" />
                        <p className="default mt-60">
                            기존 딱딱하고 무거운 이미지를 탈피하여 부드럽고 따뜻한 소문자 타입을 활용, <br/>
                            가장 안정적인 정방형 디자인을 적용함으로써 벡스코가 추진하는 사업의 처음과 끝이 일관되어 <br/>
                            안정 속의 완결을 이루는 의미를 시각화시켰다.<br/>
                            첫 글자인 "b"자는 엄지손가락을 세운 이미지를 형상화 하여 벡스코가 글로벌 MICE산업의 <br/>
                            중심적 역할과 함께 가장 앞서는 리더의 모습을 표명한다. 또한 로고 중앙의 "X"자를 오픈 타입으로 <br/>
                            응용함은 좌우의 균형과 대칭 속에서 함께 모이고, 함께 이루는 목표가 원활하게 조화되어 <br/>
                            모두가 융합된 핵심을 향하여 하나의 방향으로 변함없이 나아가는 벡스코의 방향성을 제시하고 있다.
                        </p>
                        <div className="ci__color mt-80">
                            <img src={process.env.PUBLIC_URL + '/img/sub/color_stick.png'} alt="" />
                            <ul className="color-info mt-30">
                                <li className="color left">
                                    <div className="name pantone">
                                        <b className="en">PANTONE</b>
                                        <p className="en mt-5">2728C</p>
                                    </div>
                                    <div className="name cmyk mt-10">
                                        <b className="en">CMYK</b>
                                        <p className="en mt-5">C 90 M 70</p>
                                    </div>
                                </li>
                                <li className="color center">
                                    <div className="name pantone">
                                        <b className="en">PANTONE</b>
                                        <p className="en mt-5">Medium Purple C</p>
                                    </div>
                                    <div className="name cmyk mt-10">
                                        <b className="en">CMYK</b>
                                        <p className="en mt-5">M 100</p>
                                    </div>
                                </li>
                                <li className="color right">
                                    <div className="name pantone">
                                        <b className="en">PANTONE</b>
                                        <p className="en mt-5">Rhodamine Red C</p>
                                    </div>
                                    <div className="name cmyk mt-10">
                                        <b className="en">CMYK</b>
                                        <p className="en mt-5">C 90 M 100</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="part mt-65">
                        <ul className="logo-rule cols-2 sp20">
                            <li>
                                <h4 className="part-tit bar">국문 로고타입</h4>
                                <img src={process.env.PUBLIC_URL + '/img/sub/con01_01_03_02.png'} alt="" className="mt-20" />
                            </li>
                            <li>
                                <h4 className="part-tit bar">영문 로고타입</h4>
                                <img src={process.env.PUBLIC_URL + '/img/sub/con01_01_03_03.png'} alt="" className="mt-20" />
                            </li>
                            <li>
                                <h4 className="part-tit bar">공간규정</h4>
                                <img src={process.env.PUBLIC_URL + '/img/sub/con01_01_03_04.png'} alt="" className="mt-20" />
                            </li>
                            <li>
                                <h4 className="part-tit bar">최소사용규정</h4>
                                <img src={process.env.PUBLIC_URL + '/img/sub/con01_01_03_05.png'} alt="" className="mt-20" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ci;