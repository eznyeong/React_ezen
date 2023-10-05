// 미들웨어 js파일 생성
// 어려운 구문은 아닌 콘솔창에 액션값을 출력하는 작업을 구현

const testLogger = store => next => action => {
    // 리듀서에 전달하기 전 코드를 작성
    console.log(action);
    const result = next(action);

    // 리듀서에 전달한 후 코드를 작성
    return result; // 여기서 반환한 것은 dispatch의 결과물
}

export default testLogger;