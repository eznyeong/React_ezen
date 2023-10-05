import { useEffect, useState } from 'react'; // hooks는 컴포넌트가 아니므로 React를 삭제

// use로 시작하는 파일 생성 - 그 안에 함수를 작성
function useFetch(url) {
    // 데이터를 받는 state선언
    const [datas, setDatas] = useState(null);

    // 주소는 이 파일을 hooks로 불러와서 처리할 컴포넌트에서 사용
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((datas) => setDatas(datas))
    },[url]);

    return [datas];

}

export default useFetch;