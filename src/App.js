// react router
import { Route, Switch } from "react-router-dom"
// Components
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import Blog from "./components/Blog/Blog";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Details from "./components/Details/Details";
import BlogDetails from "./components/Blog/BlogDetails/BlogDetails";
import Signin from "./components/Signin/Signin";
import { useEffect,useState } from "react";
//api
import { getHotelData,getBlogData,getUserData } from "./assets/api/fetchdata"
import Footer from "./components/Footer/Footer";
function App() {
  const [hotels,setHotels] = useState([])
  const [blogs, setblogs] = useState([])
  const [users, setUsers] = useState([])
   useEffect(()=>{
     const apiCall = async()=>{
      setHotels(await getHotelData())
      setblogs(await getBlogData())
      setUsers(await getUserData())
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
        <Route path="/destination/:name">
          <Details hotels={hotels} />
        </Route>
        <Route path="/destination">
          <Destination hotels={hotels}/>
        </Route>
        <Route path="/blog/:id">
          <BlogDetails blogs={blogs} />
        </Route>
        <Route path="/blog">
          <Blog blogs={blogs} />
        </Route>
        <Route path="/testimonial">
          <Testimonial users={users} />
        </Route>
        <Route path="/contactus">
          <Contact/>
        </Route>
        <Route path="/signin">
          <Signin/>
        </Route>
        <Route exact path="/">
          <Home hotels={hotels}/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );

}

export default App;
