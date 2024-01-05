import React from 'react';
import Header from '../../component/common/Header';
import SubLnb from '../../component/common/SubLnb';
import Vision from '../../component/sub/about/Vision';


function VisionPage(props) {
    return (
        <div>
            <Header isSubDepth />            
            <div id="sub-contents" class="pt-80">
                <section>
                    <h2 class="sub-tit">회사개요</h2>
                    <div class="contents">
                        <SubLnb vision={true} />
                        <Vision />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default VisionPage;