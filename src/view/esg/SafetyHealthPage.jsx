import React from 'react'
import Header from '../../component/common/Header'
import SubLnb from '../../component/common/SubLnb'
import SafetyHealth from '../../component/sub/esg/SafetyHealth';

function SafetyHealthPage() {
  return (
    <div>
        <Header />
        <div id="sub-contens" className="pt-80">
            <section>
                <h2 class="sub-tit">안전보건경영</h2>
                <SubLnb esg={true} safetyHealth={true} />
                <SafetyHealth />
            </section>
        </div>
    </div>
  )
}

export default SafetyHealthPage