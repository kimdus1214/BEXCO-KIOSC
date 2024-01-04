import React from 'react';
import Header from '../../component/common/Header';
import SubLnb from '../../component/common/SubLnb';
import HumanRights from '../../component/sub/esg/HumanRights';

function HumanRightsPage() {
  return (
    <div>
        <Header />
        <div id="sub-contents" class="pt-80">
            <section>
                <h2 class="sub-tit">인권경영</h2>
                <div class="contents">
                    <SubLnb esg={true} humanRights={true} />
                    <HumanRights />
                </div>
            </section>
        </div>
    </div>
  )
}

export default HumanRightsPage