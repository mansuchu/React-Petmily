import axios from 'axios';

const DOMAIN = 'http://localhost:4000';

//axios는 json형식으로 파싱하지않아도됨 
export const request = async (method, url, data) => {
    return await axios({
        method,
        url : `${DOMAIN}${url}`,
        data
    })
      .then(res => res.data)
      .catch(error => console.log(error));
};