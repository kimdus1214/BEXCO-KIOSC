import React from 'react';
import Header from '../../component/common/Header';
import Bexco from '../../component/sub/about/Bexco';
import SubLnb from '../../component/common/SubLnb';


function BexcoPage(props) {
    return (
        <div>
            <Header isSubDepth />            
            <div id="sub-contents" class="pt-80">
                <section>
                    <h2 class="sub-tit">회사개요</h2>
                    <div class="contents">
                        <SubLnb about={true} />
                        <Bexco />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default BexcoPage;