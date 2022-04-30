// react router
import { Route, Switch } from "react-router-dom"
// Components
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import Blog from "./components/Blog/Blog";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import { useEffect,useState } from "react";
//api
import { getHotelData,getBlogData } from "./assets/api/fetchdata"
import Details from "./components/Details/Details";
function App() {
  const [hotels,setHotels] = useState([])
  const [blogs, setblogs] = useState([])
   useEffect(()=>{
     const apiCall = async()=>{
      setHotels(await getHotelData())
      setblogs(await getBlogData())
     }
     apiCall()
     

   },[])
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/about" >
          <AboutUs/>
        </Route>
        <Route path="/gallery" >
          <Gallery/>
        </Route>
        <Route path="/destination/:name">
          <Details hotels={hotels} />
        </Route>
        <Route path="/destination">
          <Destination hotels={hotels}/>
        </Route>
        <Route path="/blog/:id">
          <Blog blogs={blogs} />
        </Route>
        <Route path="/blog">
          <Blog blogs={blogs} />
        </Route>
        <Route path="/testimonial">
          <Testimonial/>
        </Route>
        <Route path="/contactus">
          <Contact/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );

}

export default App;
