import axios from "axios"; // axios를 통한 api함수 호출

//방탄소년단 전체 데이터 목록을 가져오는 비동기 함수 선언
export const getBts = async () => {
    const response = await axios.get('http://localhost:4000/bts');

    return response.data;
};

//방탄소년단 각각 데이터 목록을 가져오는 비동기 함수 선언
export const getBtById = async id => {
    const response = await axios.get(`http://localhost:4000/bts/${id}`);

    return response.data;
}