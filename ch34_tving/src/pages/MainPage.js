import React from 'react';
//메인페이지들어올 모든 컨테이너 컴포넌트를 호출
import MainListContainer from '../containers/MainListContainer';
import TvingBestListContainer from '../containers/TvingBestListContainer';

//티빙메인페이지 역할을 하는 페이지 컴포넌트
function MainPage() {
    return (
        <div>
            {/* 메인페이지에 보이는 순서대로 컴포넌트를 작성 */}
            <MainListContainer />
            <TvingBestListContainer />
        </div>
    );
}

export default MainPage;