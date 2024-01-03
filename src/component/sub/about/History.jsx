import React,{useEffect,useRef, useState} from 'react';

function History(props) {
    const $historyInfo = useRef(null);
    const $progressBar = useRef(null);

    useEffect(()=>{
        const progressBarScrolled = ()=>{
            let pixels = document.documentElement.scrollTop + window.innerHeight;            
            if($historyInfo.current){
                const historyInfoHeight = $historyInfo.current.clientHeight;
                let pageHeight = document.documentElement.scrollHeight - historyInfoHeight;
                let hei = document.documentElement.scrollHeight - pageHeight;
                let hei2 = pixels - pageHeight;
    
                let progress = 100 * hei2 / hei;
                console.log($progressBar.current)
                $progressBar.current.style.height = progress + "%";
            }
        }
        window.addEventListener('scroll', progressBarScrolled);
    },[]);


    return (
        <div id="history" className="pb-65">
            <div className="part mt-80">
                <div className="inner-wide">
                    <p className="section-tit">
                        <b>전시 컨벤션 역사의 중심</b>에 <br/>
                        벡스코가 걸어온 길이 있습니다.
                    </p>
                    <img src={process.env.PUBLIC_URL + '/img/sub/con01_01_04_01.png'} alt="" className="mt-45" />
                </div>
            </div>
            <div className="history__info part mt-60" ref={$historyInfo}>
                <div className="inner-wide">
                    <div className="progress-container">
                        <div className="progress-bar" id="myBar" ref={$progressBar}><span className="circle"></span></div>
                    </div>
                    <div className="history-con">
                        <div className="part">
                            <strong>2022</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">12월</p>
                                    <p className="con default">- 손수득 대표이사 취임</p>
                                </li>
                                <li>
                                    <p className="months default">11월</p>
                                    <p className="con default">- 부산시 워라밸우수기업 경진대회 '일하기 좋은 기업문화상' 수상</p>
                                </li>
                                <li>
                                    <p className="months default">11월</p>
                                    <p className="con default">- 문화체육관광부 대한민국MICE대상 ESG부문 '최우수 ESG실천 우수기관상' 수상</p>
                                </li>
                                <li>
                                    <p className="months default">11월</p>
                                    <p className="con default">- 산업통상자원부 지역산업균형발전 유공포상 '지역산업진흥부문 대통령상' 수상</p>
                                </li>
                                <li>
                                    <p className="months default">09월</p>
                                    <p className="con default">- 부산시 '남녀고용평등 모범기업상' 수상</p>
                                </li>
                                <li>
                                    <p className="months default">01월</p>
                                    <p className="con default">- 고용노동부 '청년과 함께하는 우수 강소기업' 선정</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>2021</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">12월</p>
                                    <p className="con default">- '가족친화 직장문화 조성' 국무총리 표창</p>
                                </li>
                                <li>
                                    <p className="months default">01월</p>
                                    <p className="con default">- 고용노동부 '청년친화강소기업 우수기업' 선정</p>
                                </li>
                                <li>
                                    <p className="months default">01월</p>
                                    <p className="con default">- '한-아세안 성공개최 공로' 국무총리 표창</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>2020</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">12월</p>
                                    <p className="con default">- 지역문화진흥원 '여가친화 엽무환경 조성' 특별상 수상</p>
                                </li>
                                <li>
                                    <p className="months default">08월</p>
                                    <p className="con default">- 행정안전부장관 '지방출자출연기관 발전 기여' 표창</p>
                                </li>
                                <li>
                                    <p className="months default">05월</p>
                                    <p className="con default">- 고용노동부 '청년과 함께하는 우수한 기업' 선정</p>
                                </li>
                                <li>
                                    <p className="months default">04월</p>
                                    <p className="con default">- 부산시 '2019년 공공기관 온실가스 감축 우수기관' 표창</p>
                                </li>
                                <li>
                                    <p className="months default">02월</p>
                                    <p className="con default">- 한국관광학회 '한국관광기업대상' 수상</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>2019</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">12월</p>
                                    <p className="con default">- 2019 국제당뇨병연맹총회(170개국 참가)</p>
                                </li>
                                <li>
                                    <p className="months default">12월</p>
                                    <p className="con default">- 2019 대한민국 공공정책 대상 공공기관 정부정책부문 우수상 수상</p>
                                </li>
                                <li>
                                    <p className="months default">11월</p>
                                    <p className="con default">- 2019 한·아세안 특별정상회의 및 제1차 한·메콩 정상회의 개최</p>
                                </li>
                            </ul>
                        </div>
            
                        <div className="part mt-120">
                            <strong>2018</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">12월</p>
                                    <p className="con default">- 이태식 대표이사 취임</p>
                                </li>
                                <li>
                                    <p className="months default">11월</p>
                                    <p className="con default">- '제4회 부산시 일자리경진대회' 우수기업 선정</p>
                                </li>
                                <li>
                                    <p className="months default">11월</p>
                                    <p className="con default">- '제17회 대한민국안전대상' 우수기업 부문 대통령상 수상</p>
                                </li>
                                <li>
                                    <p className="months default">10월</p>
                                    <p className="con default">- 중국국제무역진흥위원회 주최 World MICE Day '황금낙타상' 수상</p>
                                </li>
                                <li>
                                    <p className="months default">07월</p>
                                    <p className="con default">- 2018 세계마술올림픽 개최</p>
                                </li>
                                <li>
                                    <p className="months default">05월</p>
                                    <p className="con default">- 아프리카개발은행(AFDB) 연차총회 개최</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>2017</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">09월</p>
                                    <p className="con default">- ITU텔레콤월드(역대 최대 193개국 참가)</p>
                                </li>
                                <li>
                                    <p className="months default">07월</p>
                                    <p className="con default">- 국민안전처 공간안전인증 최초 획득</p>
                                </li>
                                <li>
                                    <p className="months default">06월</p>
                                    <p className="con default">- 대한민국 브랜드 명예의 전당 '전시컨벤션센터' 부문 수상</p>
                                </li>
                                <li>
                                    <p className="months default">01월</p>
                                    <p className="con default">- 중장기발전계획 'VISION 2030' 선포</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>2016</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">12월</p>
                                    <p className="con default">- 부산시 출자·출연기관 일자리 사업 평가 1위 획득</p>
                                </li>
                                <li>
                                    <p className="months default">07월</p>
                                    <p className="con default">- BEXCO 홈페이지 콘텐츠제공서비스 품질인증 획득(한국데이터진흥원)</p>
                                </li>
                                <li>
                                    <p className="months default">04월</p>
                                    <p className="con default">- 함정오 대표이사 취임</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>2015</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">12월</p>
                                    <p className="con default">- 한-아세안 특별정상회의 개최 유공단체 대통령 표창 수상</p>
                                </li>
                                <li>
                                    <p className="months default">11월</p>
                                    <p className="con default">- 대한민국 세종대왕 나눔 봉사 대상 수상(사.한국국제연합봉사단)</p>
                                </li>
                                <li>
                                    <p className="months default">11월</p>
                                    <p className="con default">- 농촌사회공헌 인증 획득(농림축산식품부, 사.농촌사랑범국민운동본부)</p>
                                </li>
                                <li>
                                    <p className="months default">06월</p>
                                    <p className="con default">- 제13회 부산광역시 안전문화대상(일반안전 공공부문) 대상 수상</p>
                                </li>
                                <li>
                                    <p className="months default">05월</p>
                                    <p className="con default">- 2014 BEXCO 지속가능경영보고서 발간</p>
                                </li>
                            </ul>
                        </div>
            
                        <div className="part mt-120">
                            <strong>2014</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">12월</p>
                                    <p className="con default">- 2014 한-아세안 특별정상회의 개최</p>
                                </li>
                                <li>
                                    <p className="months default">10월</p>
                                    <p className="con default">- 2014 ITU 전권회의 (171개국 ICT 장·차관 및 정부 대표단 참석)</p>
                                </li>
                                <li>
                                    <p className="months default">06월</p>
                                    <p className="con default">- BEXCO [비전 2020] 선포</p>
                                </li>
                                <li>
                                    <p className="months default">05월</p>
                                    <p className="con default">- 2014 부산국제모터쇼(6회 연속 관람객 100만 돌파)</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>2013</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">08월</p>
                                    <p className="con default">- 제27차 세계인구총회(100개국 참가)</p>
                                </li>
                                <li>
                                    <p className="months default">04월</p>
                                    <p className="con default">- 오성근 대표이사 취임</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>2012</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">09월</p>
                                    <p className="con default">- 국제물협회(IWA) 세계물회의(130개국 참가)</p>
                                </li>
                                <li>
                                    <p className="months default">06월</p>
                                    <p className="con default">- 제 95차 국제라이온스 부산세계대회(120개국 6만명 참가)</p>
                                </li>
                                <li>
                                    <p className="months default">06월</p>
                                    <p className="con default">- 확충시설개관</p>
                                </li>
                                <li>
                                    <p className="months default">04월</p>
                                    <p className="con default">- 벡스코 요트컨벤션(요트B) 출범</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>2011</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">12월</p>
                                    <p className="con default">- 한국산업경제학회 전문경영인대상 수상(대표이사 김수익)</p>
                                </li>
                                <li>
                                    <p className="months default">11월</p>
                                    <p className="con default">- 부산세계개발원조총회 개최</p>
                                </li>
                                <li>
                                    <p className="months default">11월</p>
                                    <p className="con default">- 글로벌 경영대상 공기업 경영부문 대상 수상 (日 능률협회컨설팅주관)</p>
                                </li>
                                <li>
                                    <p className="months default">06월</p>
                                    <p className="con default">- 2010 BEXCO 개최 MICE 경제파급효과분석(총 생산유발효과 9,084억원)</p>
                                </li>
                            </ul>
                        </div>
            
                        <div className="part mt-120">
                            <strong>2010</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">04월</p>
                                    <p className="con default">- 김수익 대표이사 연임</p>
                                </li>
                                <li>
                                    <p className="months default">02월</p>
                                    <p className="con default">- 벡스코 시설확충 공사 착공</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>2009</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">10월</p>
                                    <p className="con default">- 2009 제3차 OECD 세계포럼 (130개국 참가)</p>
                                </li>
                                <li>
                                    <p className="months default">10월</p>
                                    <p className="con default">- 2009 마린위크 (43개국 1,812부스, 역대 최대규모 개최)</p>
                                </li>
                                <li>
                                    <p className="months default">10월</p>
                                    <p className="con default">- 대한민국 안전대상 (소방방재청장상) 수상</p>
                                </li>
                                <li>
                                    <p className="months default">06월</p>
                                    <p className="con default">- 최초 해외전시회 개최 (베트남 국제환경.에너지전)</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>2008</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">09월</p>
                                    <p className="con default">- 전시/컨벤션 시설 확충을 위한 지식경제부 예비타당성 조사 통과</p>
                                </li>
                                <li>
                                    <p className="months default">07월</p>
                                    <p className="con default">- 부산국제기계대전 UFI(세계전시연맹) 인증 획득</p>
                                </li>
                                <li>
                                    <p className="months default">03월</p>
                                    <p className="con default">- 부산국제수산무역엑스포 UFI(세계전시연맹) 인증 획득</p>
                                </li>
                                <li>
                                    <p className="months default">03월</p>
                                    <p className="con default">- ISO 9001(품질경영시스템), ISO14001(환경경영시스템) 인증 획득</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>2007</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">12월</p>
                                    <p className="con default">- 벡스코 [비전 2015] 선포</p>
                                </li>
                                <li>
                                    <p className="months default">06월</p>
                                    <p className="con default">- UFI 인증획득(전시장, 전시주최자, 철도물류전 등 3개분야)</p>
                                </li>
                                <li>
                                    <p className="months default">04월</p>
                                    <p className="con default">- 김수익 대표이사 취임</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>2006</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">11월</p>
                                    <p className="con default">- UNESCAP 교통장관 회의 개최</p>
                                </li>
                                <li>
                                    <p className="months default">08월</p>
                                    <p className="con default">- 제14차 ILO 아·태지역총회 개최</p>
                                </li>
                                <li>
                                    <p className="months default">02월</p>
                                    <p className="con default">- 법인명칭변경 [부산전시컨벤션센터 → 벡스코<br/>(BEXCO, Busan Exhibition & Convention Center)]</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>2005</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">11월</p>
                                    <p className="con default">- APEC 정상회의</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>2004</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">09월</p>
                                    <p className="con default">- ITU 텔레콤 아시아 개최</p>
                                </li>
                                <li>
                                    <p className="months default">05월</p>
                                    <p className="con default">- 2005 APEC 정상회의 개최지 확정</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>2003</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">10월</p>
                                    <p className="con default">- ICCA 연차 총회</p>
                                </li>
                                <li>
                                    <p className="months default">10월</p>
                                    <p className="con default">- 조선해양대제전, 코리아 에어쇼, 부산국제모터쇼 개최</p>
                                </li>
                                <li>
                                    <p className="months default">05월</p>
                                    <p className="con default">- 제1회 부산철도물류전</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>2002</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">09월</p>
                                    <p className="con default">- 2002 부산아시안게임 메인 미디어센터</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>2001</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">12월</p>
                                    <p className="con default">- 2002 FIFA 한일 월드컵 본선 조추첨</p>
                                </li>
                                <li>
                                    <p className="months default">09월</p>
                                    <p className="con default">- BEXCO 개장</p>
                                </li>
                                <li>
                                    <p className="months default">05월</p>
                                    <p className="con default">- BEXCO 준공</p>
                                </li>
                                <li>
                                    <p className="months default">01월</p>
                                    <p className="con default">- 영문약칭 변경 (PUEXCO → BEXCO)</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>2000</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">03월</p>
                                    <p className="con default">- 부산전시. 컨벤션센터 상량식</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>1999</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">02월</p>
                                    <p className="con default">- 상호변경 [부산국제종합전시장 → 부산전시컨벤션센터(PUEXCO)]</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>1998</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">10월</p>
                                    <p className="con default">- 부산국제종합전시장 공사 착공</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>1997</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">10월</p>
                                    <p className="con default">- 부산국제종합전시장 기공식</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>1996</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">10월</p>
                                    <p className="con default">- 부산국제종합전시장 개소식</p>
                                </li>
                            </ul>
                        </div>
                        <div className="part mt-120">
                            <strong>1995</strong>
                            <ul className="years mt-30">
                                <li>
                                    <p className="months default">12월</p>
                                    <p className="con default">- (주)부산국제종합전시장 법인 설립</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;