import React from 'react';
import Header from '../component/common/Header';
import Event from '../component/sub/Event';

function EventPage() {
  return (
    <div>
        <Header />
        <div id="sub-contens" className="event-block pt-80 pb-160">
            <section>
                <h2 class="sub-tit">행사안내</h2>
                <Event />
            </section>
        </div>
    </div>
  );
}

export default EventPage;