import React from 'react';
import Header from '../../component/common/Header';
import SubLnb from '../../component/common/SubLnb';
import Ci from '../../component/sub/about/Ci';


function CiPage(props) {
    return (
        <div>
            <Header />            
            <div id="sub-contents" class="pt-80">
                <section>
                    <h2 class="sub-tit">회사개요</h2>
                    <div class="contents">
                        <SubLnb ci={true} />
                        <Ci />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CiPage;