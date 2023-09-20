import axios from 'axios';

export const getLiveSeries = async () => {
  // 아래 코드는 가상서버용 API주소
  // const response = await axios.get('http://localhost:4000/liveseries');

  // 실제 백엔드로 넘길 때 사용하는 방법은 아님

  // 내 서버에 json파일을 올려놓기
  // 내 주소를 직접적으로 작성
  const response = await axios.get('http://ossam5.dothome.co.kr/data.json');
  return response.data.liveseries;
};
