import React,{useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Performance() {
    const majorEventsSwiper = useRef(null);

  return (
    <div id="major-events" className="pb-140 mt-60">
        <Swiper className="majorEvents" ref={majorEventsSwiper}
            modules={[Navigation]}
            // navigation={{nextEl: '.majorEvents-next',prevEl: '.majorEvents-prev'}}
            loop={10}
            mousewheelControl={"auto"}
            simulateTouch={true}
            draggable={true}
        >
            <SwiperSlide className="major-event">
                <Swiper className="majorEvents__imgs"
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={10}
                    mousewheelControl={"auto"}
                    simulateTouch={true}
                    freeMode={true}
                    draggable={true}
                >
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2022_01.png'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2022_02.png'} alt="" /></SwiperSlide>
                </Swiper>
                <div className="majorEvents__txt mt-50">
                    <div className="tit">
                        <b>2022</b>
                        <h3 className="section-tit mt-5">리그 오브 레전드 <br/>미드 시즌 인비테이셔널</h3>
                        <p className="default mt-20">행사기간&nbsp; | &nbsp;2022.05.20~2022.05.29</p>
                    </div>
                    <div className="con mt-40">
                        <p className="default">
                            MSI(미드 시즌 인비테이셔널·Mid-Season Invitational)은 세계적 인기 게임 <br/>
                            LoL(리그오브레전드·League of Legend)의 국제 공식 토너먼트로, LoL 월드 챔피언십과 함께 <br/>
                            가장 크고 권위 있는 e-스포츠 대회이다. 2022 MSI는 한국에서 처음 개최된 LoL 국제대회로 큰 관심을 모았으며, <br/>
                            한국과 중국, 북미를 포함한 각국 LoL 스프링 시즌 우승팀들이 지역을 대표해서 출전하였다. <br/><br/>
                            
                            MSI 결승전 티켓은 전석 매진되었으며, 대회 평균 온라인 시청자 58만명, <br/>
                            결승전 최고 동시 시청자 수 219만 명을 넘기며 흥행에 성공하였다. <br/>
                            2022 MSI 개최를 기념하여 부산에서도 '광안리 M 드론라이트쇼', <br/>
                            ‘리그오브레전드: 디 오케스트라 MSI 부산' 등 이벤트를 개최하며 MSI 팬들에게 다양한 즐길 거리를 제공하였다.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="major-event">
                <Swiper className="majorEvents__imgs"
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={10}
                    mousewheelControl={"auto"}
                    simulateTouch={true}
                    freeMode={true}
                    draggable={true}
                >
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2019_03.png'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2019_04.png'} alt="" /></SwiperSlide>
                </Swiper>
                <div className="majorEvents__txt mt-50">
                    <div className="tit">
                        <b>2019</b>
                        <h3 className="section-tit mt-5">국제당뇨병연맹총회</h3>
                        <p className="default mt-20">행사기간&nbsp; | &nbsp;2019.12.02~12.06</p>
                    </div>
                    <div className="con mt-40">
                        <p className="default">
                            ‘2019 국제당뇨병연맹총회’는 전세계 4억 2천 5백만 명의 당뇨병 환자 치료를 위한 <br/>
                            연구개발과 최신 정보를 공유하는 세계 최대 규모의 국제당뇨병 학술대회로, 구글, 페이스북, 애플, 삼성 등 <br/>
                            세계적인 IT 기업들이 부산을 찾아 당뇨병 치료와 관리에 대한 신기술을 소개하고 열띤 토론을 펼쳤다. <br/><br/>
                            
                            본 회의에서 채택된 논문 초록은 총 1,315건, 포스터 전시논문은 1,007건, 직접 발표 논문은 308건에 이르며, <br/>
                            부산시는 총회 기간 180여 개의 회의 및 세션을 개최하고 다국적 제약사 및 <br/>
                            의료기기사가 135개사 310개 부스 규모로 참가한 <br/>
                            ‘국제당뇨산업전’을 특별 기획해 부산지역 관련 업체들의 해외 진출을 지원했다.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="major-event">
                <Swiper className="majorEvents__imgs"
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={10}
                    mousewheelControl={"auto"}
                    simulateTouch={true}
                    freeMode={true}
                    draggable={true}
                >
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2019_01.png'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2019_02.png'} alt="" /></SwiperSlide>
                </Swiper>
                <div className="majorEvents__txt mt-50">
                    <div className="tit">
                        <b>2019</b>
                        <h3 className="section-tit mt-5">한-아세안 특별정상회의 및 <br/>제1차 한-메콩 정상회의</h3>
                        <p className="default mt-20">행사기간&nbsp; | &nbsp;2019.11.25~11.27</p>
                    </div>
                    <div className="con mt-40">
                        <p className="default">
                            2019년에 이어 벡스코에서 두 번째로 개최된 ‘한-아세안 특별 정상회의’는 <br/>
                            1989년 한-아세안 대화관계 수립 30주년을 맞아, 안보, 사회, 문화, 경제, 환경, 에너지 등 <br/>
                            20여개 분야에서 21세기 공동번영을 위한 다층적 협력방안을 모색하기 위해 개최되었다. <br/><br/>
                            
                            공공행정혁신 전시회, 비즈니스&스타트업 엑스포, K-pop Summit, 아세안 국가 행정장관회의, <br/>
                            스마트시티페어 등이 부대행사로 함께 진행되었으며, <br/>
                            11월 27일에는 ‘제1차 한-메콩 정상회의’가 연속하여 개최되었다.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="major-event">
                <Swiper className="majorEvents__imgs"
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={10}
                    mousewheelControl={"auto"}
                    simulateTouch={true}
                    freeMode={true}
                    draggable={true}
                >
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2018_03.png'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2018_04.png'} alt="" /></SwiperSlide>
                </Swiper>
                <div className="majorEvents__txt mt-50">
                    <div className="tit">
                        <b>2018</b>
                        <h3 className="section-tit mt-5">부산세계마술챔피언쉽</h3>
                        <p className="default mt-20">행사기간&nbsp; | &nbsp;2018.07.09~07.14</p>
                    </div>
                    <div className="con mt-40">
                        <p className="default">
                            세계마술연맹(FISM)이 매년 개최하는 세계 마술인의 축제이다. <br/>
                            2018년 대회는 세계마술연맹과 부산국제매직페스티벌 조직위원이 <br/>
                            공동 주최하여 전세계 50개국에서 2,500명이 참가하여, <br/>
                            벡스코(컨벤션홀, 오디토리움)과 해운대 구남로 일대에서 세계마술인의 축제 형식으로 개최되었다. <br/><br/>

                            오디토리움에서는 마술 컨테스트와 갈라쇼가 개최되었고, <br/>컨벤션홀에서는 일반 참가자를 위한 마술렉쳐와 전시회가 개최되었다.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="major-event">
                <Swiper className="majorEvents__imgs"
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={10}
                    mousewheelControl={"auto"}
                    simulateTouch={true}
                    freeMode={true}
                    draggable={true}
                >
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2018_01.png'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2018_02.png'} alt="" /></SwiperSlide>
                </Swiper>
                <div className="majorEvents__txt mt-50">
                    <div className="tit">
                        <b>2018</b>
                        <h3 className="section-tit mt-5">아프리카개발은행(AfDB) 연차총회</h3>
                        <p className="default mt-20">행사기간&nbsp; | &nbsp;2018.05.21~05.25</p>
                    </div>
                    <div className="con mt-40">
                        <p className="default">
                            아프리카 연내국의 경제 및 개발사업 지원을 위해 설립된 아프리카개발은행(본부 : 코트디부아르)은 <br/>
                            80개 회원국으로 구성되어 있으며, 매년 개최되는 연차총회는 회원국 정부대표(장관급 이상)와 <br/>
                            관련 산업 관계자가 참가하는 대규모 국제행사이다. <br/><br/>
                            
                            2018년 총회는 벡스코(컨벤션홀, 오디토리움, 제1전시장)에서 개최되었으며 총 4천명이 참가하였다. <br/>
                            이번 대회를 통해 생산유발액 239억원, 부가가치 유발액 117억의 성과를 나타내었고, <br/>
                            또한 부산지역 업체의 아프리카 시장 진출을 발굴하는 계기가 되었다.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="major-event">
                <Swiper className="majorEvents__imgs"
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={10}
                    mousewheelControl={"auto"}
                    simulateTouch={true}
                    freeMode={true}
                    draggable={true}
                >
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2017_01.png'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2017_02.png'} alt="" /></SwiperSlide>
                </Swiper>
                <div className="majorEvents__txt mt-50">
                    <div className="tit">
                        <b>2017</b>
                        <h3 className="section-tit mt-5">ITU 텔레콤월드</h3>
                        <p className="default mt-20">행사기간&nbsp; | &nbsp;2017.09.25~09.28</p>
                    </div>
                    <div className="con mt-40">
                        <p className="default">
                            ITU 회원국 193개 국가의 정보통신담당 각료와 정책당국자, 기업 CEO, <br/>
                            산업·학계·연구전문가, 일반시민 등 9,000여 명이 모인 2017 ITU 텔레콤 월드에서는 <br/>
                            전시회, 포럼, 비즈니스 네트워킹 등 다양한 행사를 통해 미래사회를 조망하고 정보통신기술의 발전방향을 논의하였다. <br/><br/>
                            
                            특히, 부산시는 이번 행사를 계기로 ICT 기업의 해외진출 및 글로벌 마케팅을 확대하고, <br/>
                            해외 참관객 유치를 통한 마이스산업 발전으로 지역경제 활성화에 기여할 것이라며, <br/>
                            생산유발 1,179억 원, 부가가치 유발 490억 원, 취업유발 인원 1,071명, <br/>
                            고용유발 인원 759명의 사회·경제적 파급효과를 예상했다.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="major-event">
                <Swiper className="majorEvents__imgs"
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={10}
                    mousewheelControl={"auto"}
                    simulateTouch={true}
                    freeMode={true}
                    draggable={true}
                >
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2015_01.png'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2015_02.png'} alt="" /></SwiperSlide>
                </Swiper>
                <div className="majorEvents__txt mt-50">
                    <div className="tit">
                        <b>2015</b>
                        <h3 className="section-tit mt-5">미주개발은행(IDB) 및 <br/>미주투자공사(IIC) 연차총회</h3>
                        <p className="default mt-20">행사기간&nbsp; | &nbsp;2015.03.26~03.29</p>
                    </div>
                    <div className="con mt-40">
                        <p className="default">
                            2015년 미주개발은행(IDB) 및 미주투자공사(IIC) 연차총회는 IDB 48개 회원국　<br/>
                            장·차관 및 고위관료, 고위 경제인, 국제기구 대표　등 약 3,000여명이 대거 참석한 <br/>
                            중남미 관련 역대 최대 행사로 우리나라의 IDB 가입(2005년) 10주년에 개최되는 <br/>
                            뜻 깊은 행사인 동시에 2005년 일본총회 이후 10년만에 역외국에서 개최된 총회였다. <br/><br/>
                            
                            이번 총회는 역내 및 역외 회원국간 협력에도 기여하며 IDB 및 IDB 회원국들과의 <br/>
                            경제협력을 강화하고 IDB내 우리나라의 위상을 강화 할 수 있는 계기가 되었다. <br/>
                            또한 연차총회 본회의뿐만 아니라 비즈니스포럼, 지식공유포럼 등의 부대행사들을 <br/>
                            동시에 개최함에 따라 시너지 효과를 극대화하여 한·중남미 간 협력 관계가 한 단계 심화·발전되는 계기기 되었다.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="major-event">
                <Swiper className="majorEvents__imgs"
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={10}
                    mousewheelControl={"auto"}
                    simulateTouch={true}
                    freeMode={true}
                    draggable={true}
                >
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2014_03.png'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2014_04.png'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2014_05.png'} alt="" /></SwiperSlide>
                </Swiper>
                <div className="majorEvents__txt mt-50">
                    <div className="tit">
                        <b>2014</b>
                        <h3 className="section-tit mt-5">한-아세안 특별정상회의</h3>
                        <p className="default mt-20">행사기간&nbsp; | &nbsp;2014.12.11~12.12</p>
                    </div>
                    <div className="con mt-40">
                        <p className="default">
                            2014 한-아세안 특별정상회의는 ‘신뢰구축, 행복구현’이란 슬로건 아래 <br/>
                            12월 11일부터 12일까지 양일간 부산 벡스코 및 누리마루 일대에서 개최되었다. <br/>
                            박근혜 대통령을 비롯해 우리 정부대표단과 동남아시아 10개국 정상, 정부 각료, 기업인, <br/>
                            행사 스텝을 포함한 12,300여 명이 부산을 찾은 것으로 집계되었다. <br/><br/>
                            한-아세안 대화관계 수립 25주년을 기념하며, 각국 정상들은 특별정상회의 제1,2세션, <br/>
                            정상오찬 및 공동기자회견을 참석하였다. 부산은 지난 2005년 APEC 정상회의 이후 <br/>
                            최대 고위급 행사인 2014 한-아세안 특별정상회의를 성공적으로 개최함으로서, <br/>
                            국제적 위상과 도시 브랜드 향상뿐 아니라 655억원에 이르는 경제적 파급효과를 거뒀다.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="major-event">
                <Swiper className="majorEvents__imgs"
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={10}
                    mousewheelControl={"auto"}
                    simulateTouch={true}
                    freeMode={true}
                    draggable={true}
                >
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2014_01.png'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2014_02.png'} alt="" /></SwiperSlide>
                </Swiper>
                <div className="majorEvents__txt mt-50">
                    <div className="tit">
                        <b>2014</b>
                        <h3 className="section-tit mt-5">제19차 부산 ITU 전권회의</h3>
                        <p className="default mt-20">행사기간&nbsp; | &nbsp;2014.10.20~11.07</p>
                    </div>
                    <div className="con mt-40">
                        <p className="default">
                            제19차 부산 ITU 전권회의(PP-14)는 총 171개국의 장·차관급 167여명을 포함하여 <br/>
                            정부 대표단 2,500여명이 참석했으며 3주 동안 본회의와 분과회의, <br/>
                            특별작업반 회의 등을 포함해 총 800여 차례의 회의를 통해 <br/>
                            최종 51개의 결의안에 공식 서명을 하였다. 특히, 정부는 부산 전권회의에서 <br/>
                            한국인으로서는 처음으로 ITU 고위임원직인 표준화총국장을 배출하고 <br/>
                            7회 연속 이사국 재선임 및 “커넥트 2020”, “정보통신기술(ICT) 애플리케이션의 확산/이용”, <br/>
                            “사물인터넷(IoT) 촉진” 등 우리나라에서 주도한 의제 3건이 모두 채택되는 등의 주요 성과를 거둔 것으로 평가받고 있다.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="major-event">
                <Swiper className="majorEvents__imgs"
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={10}
                    mousewheelControl={"auto"}
                    simulateTouch={true}
                    freeMode={true}
                    draggable={true}
                >
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2013_01.png'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2013_02.png'} alt="" /></SwiperSlide>
                </Swiper>
                <div className="majorEvents__txt mt-50">
                    <div className="tit">
                        <b>2013</b>
                        <h3 className="section-tit mt-5">세계교회협의회(WCC) 제10차 총회</h3>
                        <p className="default mt-20">행사기간&nbsp; | &nbsp;2013.10.28~11.08</p>
                    </div>
                    <div className="con mt-40">
                        <p className="default">
                            1961년 인도 뉴델리 총회 이후 40년 만에 아시아에서 열린 WCC 제 10차 총회는 <br/>
                            141개국에서 3천명에 가까운 해외교회 대표들을 비롯, <br/>
                            1만 명이 넘는 참가자들이 부산을 찾아 역대 최대 규모로 개최되었다. <br/>
                            총회는 인류가 안고 있는 생명, 정의, 평화의 문제에 대해 <br/>
                            교회와 그리스도인들의 역할을 고민하고, <br/>
                            특히 총회 기간 32년에 만에 채택된 새 선교선언문과 <br/>
                            한반도 ‘평화선언문’ 선언으로 선교의 새 지평을 열었다는 평가를 받았다.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="major-event">
                <Swiper className="majorEvents__imgs"
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={10}
                    mousewheelControl={"auto"}
                    simulateTouch={true}
                    freeMode={true}
                    draggable={true}
                >
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2012_01.png'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2012_02.png'} alt="" /></SwiperSlide>
                </Swiper>
                <div className="majorEvents__txt mt-50">
                    <div className="tit">
                        <b>2012</b>
                        <h3 className="section-tit mt-5">제95차 국제라이온스 부산세계대회</h3>
                        <p className="default mt-20">행사기간&nbsp; | &nbsp;2012.06.18~06.26</p>
                    </div>
                    <div className="con mt-40">
                        <p className="default">
                            ‘문화교류를 통한 라이오니즘의 공유’라는 주제의 “2012 라이온스 부산세계대회”는 <br/>
                            부산의 사상 최고·최대행사 기록과 함께 '성공 대회'로 마무리됐다. <br/>
                            전 세계 120개국 5만5272명의 글로벌 인사가 부산에 모였으며 <br/>
                            이 중 등록 외국인만 1만3529명으로 집계되었다. <br/>
                            부산발전연구원은 대회 개최를 통한 부산의 도시브랜드 상승, <br/>
                            전시·컨벤션산업 활성화 효과와 함께 생산유발 1655억원, <br/>
                            부가가치유발 679억원, 취업유발 2552명의 경제파급효과를 예상했다.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="major-event">
                <Swiper className="majorEvents__imgs"
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={10}
                    mousewheelControl={"auto"}
                    simulateTouch={true}
                    freeMode={true}
                    draggable={true}
                >
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2011_01.png'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2011_02.png'} alt="" /></SwiperSlide>
                </Swiper>
                <div className="majorEvents__txt mt-50">
                    <div className="tit">
                        <b>2011</b>
                        <h3 className="section-tit mt-5">부산세계개발원조총회</h3>
                        <p className="default mt-20">행사기간&nbsp; | &nbsp;2011.11.29~12.01</p>
                    </div>
                    <div className="con mt-40">
                        <p className="default">
                            개발도상국과 공여국을 포함한 전세계 장관급 인사, 정부대표, 국회의원, 시민사회기관, <br/>
                            민간 부분의 대표자들을 포함 한 3,000여명의 참가자들이 모인 부산세계개발원조총회에서는 <br/>
                            개발원조의 영향력과 가치를 향상 시키는데 있어 전세계적인 진행상황을 점검하고, <br/>
                            원조가 빈곤을 경감하는데 도움이 되고 MDGs를 달성하기 위한 과정을 <br/>지원할 것을 천명하는 새로운 약속을 도출하게 되었다.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="major-event">
                <Swiper className="majorEvents__imgs"
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={10}
                    mousewheelControl={"auto"}
                    simulateTouch={true}
                    freeMode={true}
                    draggable={true}
                >
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2009_01.png'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2009_02.png'} alt="" /></SwiperSlide>
                </Swiper>
                <div className="majorEvents__txt mt-50">
                    <div className="tit">
                        <b>2009</b>
                        <h3 className="section-tit mt-5">OECD 세계포럼</h3>
                        <p className="default mt-20">행사기간&nbsp; | &nbsp;2009.10.27~10.30</p>
                    </div>
                    <div className="con mt-40">
                        <p className="default">
                            세계 100개국, 2000여명이 참가한 역대 OECD 포럼 사상 최대 규모의 행사였으며, <br/>
                            “새로운 발전자료 모색” 이라는 포럼 주제를 바탕으로 모든 참가 주체물이 GDP라는 <br/>
                            통계가 갖는 현실적 한계를 공감하고 새로운 지표 개발의 필요성을 인식하는 기회를 마련하였다. <br/>
                            특히, 지표 개발의 구체적 실천방안 마련을 위한 “부산 로드맵”을 발표하는 등 포럼 성과에 대한 합의를 구체화 하였다.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="major-event">
                <Swiper className="majorEvents__imgs"
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={10}
                    mousewheelControl={"auto"}
                    simulateTouch={true}
                    freeMode={true}
                    draggable={true}
                >
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2005_01.png'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2005_02.png'} alt="" /></SwiperSlide>
                </Swiper>
                <div className="majorEvents__txt mt-50">
                    <div className="tit">
                        <b>2005</b>
                        <h3 className="section-tit mt-5">APEC 정상회의</h3>
                        <p className="default mt-20">행사기간&nbsp; | &nbsp;2005.11.15~11.21</p>
                    </div>
                    <div className="con mt-40">
                        <p className="default">
                            APEC 21개국 회원국 간의 경제적, 사회적, 문화적 이질성을 극복하고<br/>
                            역내 지속적 경제성장과 지역경제공동체 구성을 목적으로 정상회의를 개최하였다.<br/>
                            벡스코에서는 제1차 정상회의, CEO Summit, ABAC회의가, <br/>
                            누리마루APEC 하우스에서는 2차 정상회의가 개최되었다.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="major-event">
                <Swiper className="majorEvents__imgs"
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={10}
                    mousewheelControl={"auto"}
                    simulateTouch={true}
                    freeMode={true}
                    draggable={true}
                >
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2002_01.png'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/sub/2002_02.png'} alt="" /></SwiperSlide>
                </Swiper>
                <div className="majorEvents__txt mt-50">
                    <div className="tit">
                        <b>2002</b>
                        <h3 className="section-tit mt-5">월드컵 조 추첨</h3>
                        <p className="default mt-20">행사기간&nbsp; | &nbsp;2002.5.31~6.30</p>
                    </div>
                    <div className="con mt-40">
                        <p className="default">
                            2002 한일 월드컵은 2002.5.31~6.30는 까지 개최되었고,<br/>
                            개막식과 첫 경기는 한국에서, 결승전과 폐막식은 일본에서 열렸다.<br/>
                            월드컵 조추첨 행사(2001.12.1)는 제주와 부산시의 경합 끝에 벡스코에서 개최되었으며, <br/>
                            한국은 폴란드, 포르투갈, 미국 등 과 함께 D조에 편성되어 <br/>
                            세계4강에 진출하는 쾌거를 이루었다.
                        </p>
                    </div>
                </div>
            </SwiperSlide>

            <button className="btns majorEvents-prev" onClick={() => majorEventsSwiper.current.swiper.slidePrev()}>
                <img src={process.env.PUBLIC_URL + '/img/icons/icon_prev.svg'} alt="" />
                <span>이전행사</span>
            </button>
            <button className="btns majorEvents-next" onClick={() => majorEventsSwiper.current.swiper.slideNext()}>
                <span>다음행사</span>
                <img src={process.env.PUBLIC_URL + '/img/icons/icon_next.svg'} alt="" />
            </button>
        </Swiper>
    </div>
  )
}

export default Performance