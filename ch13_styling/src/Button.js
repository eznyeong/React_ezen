import React from 'react';
import './btn.scss';

// 버튼 한개를 표시하는 자손 컴포넌트
// Props를 통한 스타일링은 CSS도 SCSS도 전부 가능
// <태그명 class="클래스명1 클래스명2 클래스명 3">
// ex) <button class="red small">
function Button({bg, size}) {
    return <button className={`${bg} ${size}`}>텍스트</button>
}

// <button className={[bg,size].join(' ')}>텍스트</button>
// join메서드는 배열메서드를 문자열로 변환, 매개변수는 값들 사이에 적용될 문자열 작성

export default Button;