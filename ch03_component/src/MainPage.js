import React from 'react';

import Header from './Header'; // 같은 파일 확장자면 확장자 안붙임
import Main from './Main';
import Footer from './Footer';

function MainPage(props) {
    // JSX 작성하는 곳
    // 컴포넌트 마크업 시 <태그></태그> or <태그명 />
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default MainPage;