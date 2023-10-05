import React from 'react';
import styles from './test.module.css'
import Child from './Child';
// 불러올 때 컴포넌트처럼 이름을 지정

// CSS Module : CSS클래스가 중첩되는 것을 방지하기 위해 사용
// 파일확장자 : 파일명.module.css 로 저장
function Style02() {
    return (
        <div>
            <h1 className={styles.title1}>테스트01</h1>
            <h1 className={styles.title1}>테스트02</h1>
            <h1 className={styles.title2}>테스트03</h1>
            <Child />
            <Child />
        </div>
    );
}

export default Style02;