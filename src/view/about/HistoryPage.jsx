import React from 'react';
import Header from '../../component/common/Header';
import SubLnb from '../../component/common/SubLnb';
import History from '../../component/sub/about/History';


function HistoryPage(props) {
    return (
        <div>
            <Header />            
            <div id="sub-contents" class="pt-80">
                <section>
                    <h2 class="sub-tit">회사개요</h2>
                    <div class="contents">
                        <SubLnb history={true} />
                        <History />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default HistoryPage;