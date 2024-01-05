import React from 'react'
import Header from '../component/common/Header'
import Location from '../component/sub/Location';

function LocationPage() {
  return (
    <div>
        <Header isSubDepth />
        <div id="sub-contens" className="pt-80">
            <section>
                <h2 class="sub-tit">찾아오시는길</h2>
                <Location />
            </section>
        </div>
    </div>
  );
}

export default LocationPage;