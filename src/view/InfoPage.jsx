import React from 'react'
import Header from '../component/common/Header';
import Info from '../component/sub/Info';

function InfoPage() {
  return (
    <div>
        <Header />
        <div id="sub-contens" className="info-block pt-80 pb-160">
            <section>
                <h2 class="sub-tit">이용안내</h2>
                <Info />
            </section>
        </div>
    </div>
  );
}

export default InfoPage;