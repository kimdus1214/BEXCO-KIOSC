import React from 'react';
import Header from '../../component/common/Header';
import SubLnb from '../../component/common/SubLnb';
import BexcoEsg from '../../component/sub/esg/BexcoEsg';

function BexcoEsgPage() {
  return (
    <div>
        <Header isSubDepth />            
        <div id="sub-contents" class="pt-80">
            <section>
                <h2 class="sub-tit">ESG경영</h2>
                <div class="contents">
                    <SubLnb esg={true} bexcoEsg={true} />
                    <BexcoEsg />
                </div>
            </section>
        </div>
    </div>
  )
}

export default BexcoEsgPage