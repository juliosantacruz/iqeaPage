import axios from "axios";


const API_URL_STRAPI = process.env.API_URL_STRAPI


const fetchNavContent = () =>{
    let data
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://localhost:1337/api/navigation?populate[navigationPanel][populate][link][populate]=*&populate[navigationPanel][populate][sections][populate]=*',
          headers: { }
        };
        
        axios.request(config)
        .then((response) => {
            data = JSON.stringify(response.data)
            console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    
        return data
    }


export {fetchNavContent}