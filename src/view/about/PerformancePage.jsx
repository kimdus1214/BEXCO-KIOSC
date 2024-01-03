import React from 'react';
import Header from '../../component/common/Header';
import SubLnb from '../../component/common/SubLnb';
import Performance from '../../component/sub/about/Performance';

function PerformancePage() {
  return (
    <div>
        <Header />            
        <div id="sub-contents" class="pt-80">
            <section>
                <h2 class="sub-tit">주요행사</h2>
                <div class="contents">
                    <SubLnb performance={true} />
                    <Performance />
                </div>
            </section>
        </div>
    </div>
  )
}

export default PerformancePage