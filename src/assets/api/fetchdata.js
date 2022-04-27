import axios from "axios";
const url = 'https://travel-advisor.p.rapidapi.com/hotels/list'
const options = {
  params: {
    location_id: '293919',
    adults: '2',
    rooms: '2',
    nights: '3',
    offset: '0',
    currency: 'USD',
    order: 'asc',
    limit: '30',
    sort: 'recommended',
    lang: 'en_US'
  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': 'db735b131fmsh1ab2f664e194372p1399f6jsn695c5d1b76d2'
  }
};

export const getData = async ()=>{
    const response = await axios.get(url,options)
    return response.data.data
}