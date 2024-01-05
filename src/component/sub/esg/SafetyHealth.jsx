import React from 'react'

function SafetyHealth() {
  return (
      <div id="SafetyHealth-Management" className="esg-section pb-165 mt-80">
          <div className="part">
              <div className="tit">
                  <img src={process.env.PUBLIC_URL + "/img/icons/icon_quotes_01.svg"} alt="" className="double-quot left" />
                  <h3 className="section-tit">BEXCO 안전ㆍ보건경영</h3>
                  <img src={process.env.PUBLIC_URL + "/img/icons/icon_quotes_02.svg"} alt="" className="double-quot right" />
              </div>
          </div>

          <div className="part border-box shape pt-70 pb-95 mt-90">
              <p className="default">
                  '벡스코'는 안전보건이 기업 경영의 중요한 요소임을 인식하여 <br/>
                  안전보건경영시스템을 구축, 실행 및 개선하고, 모든 활동에 있어서 <br/>
                  지속적 개선과 자율적 참여로 안전한 사업장을 실현토록 하기 위하여, <br/>
                  다음과 같은 안전보건방침을 제정하고 전 임직원의 적극적인 참여를 통해 실현하고자 한다.
              </p>
              <img src={process.env.PUBLIC_URL + "/img/icons/line_dot.svg"} alt="" className="mt-90" />
              <ul className="ethics-charter mt-15">
                  <li>
                      <div className="num"><b>하나,</b></div>
                      <div className="con">
                          <p className="default">
                              당사의 업무 활동과 관련하여 발생가능한 안전보건 유해 위험요인을 <br/>
                              파악하고 지속적인 예방 및 개선활동을 추구한다.
                          </p>
                      </div>
                  </li>
                  <li>
                      <div className="num"><b>하나,</b></div>
                      <div className="con">
                          <p className="default">
                              당사는 전 임직원 및 협력업체 임직원이 안전보건 활동에 <br/>
                              적극적이고 자율적으로 참여토록 모든 기회를 제공한다.
                          </p>
                      </div>
                  </li>
                  <li>
                      <div className="num"><b>하나,</b></div>
                      <div className="con">
                          <p className="default">
                              당사는 안전보건과 관련한 제반 법규 및 ISO 45001:2018 표준의 <br/>
                              준수를 기본으로 하고, 주기적인 모니터링, 측정 분석 및 평가를 <br/>
                              통하여 안전보건 방침의 효과성을 검증한다.
                          </p>
                      </div>
                  </li>
                  <li>
                      <div className="num"><b>하나,</b></div>
                      <div className="con">
                          <p className="default">
                              당사의 안전보건 관련 정보를 모든 이해관계자들이 <br/>
                              공유함으로써 회사의 안전보건방침이 유지됨을 보장한다.
                          </p>
                      </div>
                  </li>
                  <li>
                      <div className="num"><b>하나,</b></div>
                      <div className="con">
                          <p className="default">
                              당사는 임직원을 포함한 모든 이해관계자들이 쾌적하고 <br/>
                              안전한 환경 속에서 생활하도록 최선을 다한다.
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

export default SafetyHealth;