import axios from "axios";
// hotel data from travel advisor API
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

export const getHotelData = async ()=>{
    const response = await axios.get(url,options)
    return response.data.data
}


// fake blogs from freerealapi

export const getBlogData = async ()=>{
  const response = await axios.get("https://api.freerealapi.com/blogs")
  return response.data.blogs
}
export const getUserData = async ()=>{
  const response = await axios.get("https://testimonialapi.toolcarton.com/api")
  return response.data
}
export const registerUser = async (info)=>{
  const res = await fetch('https://api.freerealapi.com/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: info.name,
      email: info.email, 
      password: info.password ,
    })
  })
  const data = await res.json()
  return data
  
}
export const signinUser =async (info) => {
  const res =await fetch('http://localhost:3300/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: info.email,
      password: info.password,
    })
  })
  const data = await res.json()
  return data 
  
}


