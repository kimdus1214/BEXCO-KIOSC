import React from 'react'

function Location() {
  return (
    <div id="direction" class="pb-165 mt-80">
        <div class="inner">
            <div class="map">
                
            </div>
            <div class="map-info pb-35 mt-40 border-bottom--c9">
                <div class="part">
                    <h3 class="section-tit">주소</h3>
                    <ul class="add-list mt-20">
                        <li>
                            <b>제1전시장</b>
                            <p class="default">부산광역시 해운대구 APEC 55로</p>
                        </li>
                        <li>
                            <b>제2전시장</b>
                            <p class="default">부산광역시 해운대구 APEC 30로</p>
                        </li>
                    </ul>
                </div>
                <div class="part mt-80">
                    <h3 class="section-tit">전화</h3>
                    <p class="tel mt-20">051-740-7300</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Location;