import React from 'react'
import Header from '../component/common/Header';
import Facility from '../component/sub/Facility';

function FacilityPage() {
  return (
    <div>
        <Header />
        <div id="sub-contens" className="facility-block pt-80 pb-160">
            <section>
                <h2 class="sub-tit">시설안내</h2>
                <Facility />
            </section>
        </div>
    </div>
  );
}

export default FacilityPage;