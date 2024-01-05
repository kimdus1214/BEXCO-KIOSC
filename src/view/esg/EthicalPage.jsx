import React from 'react';
import Header from '../../component/common/Header';
import SubLnb from '../../component/common/SubLnb';
import Ethical from '../../component/sub/esg/Ethical';

function EthicalPage() {
  return (
    <div>
        <Header isSubDepth />            
        <div id="sub-contents" class="pt-80">
            <section>
                <h2 class="sub-tit">윤리경영</h2>
                <div class="contents">
                    <SubLnb esg={true} ethical={true} />
                    <Ethical />
                </div>
            </section>
        </div>
    </div>
  )
}

export default EthicalPage