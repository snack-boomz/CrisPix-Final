import './App.css';
import { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppContext } from "./AppContext";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import Trending from "./pages/Trending.js";
import Categories from "./pages/Categories.js";
import PicDetails from "./PicDetails";
import Favorites from "./pages/Favorites.js";
import Photographers from "./pages/Photographers.js";
import Location from "./pages/Location.js";
import AboutUs from "./pages/Aboutus.js";
import { Search } from "./pages/Searchbar";



const App = () => {
  const [imagesArray, setImagesArray] = useState([]);
  const [indivImage, setIndivImage] = useState({
    "id": "",
    "created_at": "2022-08-17T12:27:21Z",
    "updated_at": "2022-09-01T03:30:44Z",
    "promoted_at": "2022-08-18T06:24:01Z",
    "width": 4000,
    "height": 6000,
    "color": "#0c260c",
    "blur_hash": "L65$VKofoykCtiRRafRR8zR7kBag",
    "description": null,
    "alt_description": null,
    "urls": {
        "raw": "https://images.unsplash.com/photo-1660739205131-07edfc6c2650?ixid=MnwzNTg5MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIwNTU4MDE&ixlib=rb-1.2.1",
        "full": "https://images.unsplash.com/photo-1660739205131-07edfc6c2650?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTg5MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIwNTU4MDE&ixlib=rb-1.2.1&q=80",
        "regular": "https://images.unsplash.com/photo-1660739205131-07edfc6c2650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTg5MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIwNTU4MDE&ixlib=rb-1.2.1&q=80&w=1080",
        "small": "https://images.unsplash.com/photo-1660739205131-07edfc6c2650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTg5MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIwNTU4MDE&ixlib=rb-1.2.1&q=80&w=400",
        "thumb": "https://images.unsplash.com/photo-1660739205131-07edfc6c2650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTg5MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIwNTU4MDE&ixlib=rb-1.2.1&q=80&w=200",
        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1660739205131-07edfc6c2650"
    },
    "links": {
        "self": "https://api.unsplash.com/photos/5Abo8MbzZnc",
        "html": "https://unsplash.com/photos/5Abo8MbzZnc",
        "download": "https://unsplash.com/photos/5Abo8MbzZnc/download?ixid=MnwzNTg5MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIwNTU4MDE",
        "download_location": "https://api.unsplash.com/photos/5Abo8MbzZnc/download?ixid=MnwzNTg5MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIwNTU4MDE"
    },
    "categories": [],
    "likes": 310,
    "liked_by_user": false,
    "current_user_collections": [],
    "sponsorship": null,
    "topic_submissions": {
        "experimental": {
            "status": "rejected"
        },
        "wallpapers": {
            "status": "approved",
            "approved_on": "2022-08-22T13:52:52Z"
        },
        "nature": {
            "status": "approved",
            "approved_on": "2022-08-19T08:33:25Z"
        },
        "textures-patterns": {
            "status": "approved",
            "approved_on": "2022-08-19T08:56:53Z"
        }
    },
    "user": {
        "id": "Fj-_9Fg2Vjc",
        "updated_at": "2022-09-01T17:33:46Z",
        "username": "maksym_tymchyk",
        "name": "Maksym Tymchyk 🇺🇦",
        "first_name": "Maksym",
        "last_name": "Tymchyk 🇺🇦",
        "twitter_username": "MaksymTymchyk",
        "portfolio_url": "https://strun.co/",
        "bio": "",
        "location": "",
        "links": {
            "self": "",
            "html": "",
            "photos": "",
            "likes": "",
            "portfolio": "",
            "following": "",
            "followers": ""
        },
        "profile_image": {
            "small": "",
            "medium": "",
            "large": ""
        },
        "instagram_username": "",
        "total_collections": 6,
        "total_likes": 5452,
        "total_photos": 622,
        "accepted_tos": true,
        "for_hire": true,
        "social": {
            "instagram_username": "",
            "portfolio_url": "",
            "twitter_username": "",
            "paypal_email": null
        }
    },
    "exif": {
        "make": "",
        "model": "",
        "name": "",
        "exposure_time": "",
        "aperture": "",
        "focal_length": "",
        "iso": 0
    },
    "location": {
        "title": null,
        "name": null,
        "city": null,
        "country": null,
        "position": {
            "latitude": null,
            "longitude": null
        }
    },
    "views": 1220184,
    "downloads": 6190
  });
  const [heroImage, setHeroImage] = useState({});
  const [trending, setTrending] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [favorites, setFavorites] = useState([]);


  /*

  {
    "id": "",
    "created_at": "2022-08-17T12:27:21Z",
    "updated_at": "2022-09-01T03:30:44Z",
    "promoted_at": "2022-08-18T06:24:01Z",
    "width": 4000,
    "height": 6000,
    "color": "#0c260c",
    "blur_hash": "L65$VKofoykCtiRRafRR8zR7kBag",
    "description": null,
    "alt_description": null,
    "urls": {
        "raw": "https://images.unsplash.com/photo-1660739205131-07edfc6c2650?ixid=MnwzNTg5MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIwNTU4MDE&ixlib=rb-1.2.1",
        "full": "https://images.unsplash.com/photo-1660739205131-07edfc6c2650?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTg5MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIwNTU4MDE&ixlib=rb-1.2.1&q=80",
        "regular": "https://images.unsplash.com/photo-1660739205131-07edfc6c2650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTg5MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIwNTU4MDE&ixlib=rb-1.2.1&q=80&w=1080",
        "small": "https://images.unsplash.com/photo-1660739205131-07edfc6c2650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTg5MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIwNTU4MDE&ixlib=rb-1.2.1&q=80&w=400",
        "thumb": "https://images.unsplash.com/photo-1660739205131-07edfc6c2650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTg5MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIwNTU4MDE&ixlib=rb-1.2.1&q=80&w=200",
        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1660739205131-07edfc6c2650"
    },
    "links": {
        "self": "https://api.unsplash.com/photos/5Abo8MbzZnc",
        "html": "https://unsplash.com/photos/5Abo8MbzZnc",
        "download": "https://unsplash.com/photos/5Abo8MbzZnc/download?ixid=MnwzNTg5MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIwNTU4MDE",
        "download_location": "https://api.unsplash.com/photos/5Abo8MbzZnc/download?ixid=MnwzNTg5MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIwNTU4MDE"
    },
    "categories": [],
    "likes": 310,
    "liked_by_user": false,
    "current_user_collections": [],
    "sponsorship": null,
    "topic_submissions": {
        "experimental": {
            "status": "rejected"
        },
        "wallpapers": {
            "status": "approved",
            "approved_on": "2022-08-22T13:52:52Z"
        },
        "nature": {
            "status": "approved",
            "approved_on": "2022-08-19T08:33:25Z"
        },
        "textures-patterns": {
            "status": "approved",
            "approved_on": "2022-08-19T08:56:53Z"
        }
    },
    "user": {
        "id": "Fj-_9Fg2Vjc",
        "updated_at": "2022-09-01T17:33:46Z",
        "username": "maksym_tymchyk",
        "name": "Maksym Tymchyk 🇺🇦",
        "first_name": "Maksym",
        "last_name": "Tymchyk 🇺🇦",
        "twitter_username": "MaksymTymchyk",
        "portfolio_url": "https://strun.co/",
        "bio": "",
        "location": "",
        "links": {
            "self": "",
            "html": "",
            "photos": "",
            "likes": "",
            "portfolio": "",
            "following": "",
            "followers": ""
        },
        "profile_image": {
            "small": "",
            "medium": "",
            "large": ""
        },
        "instagram_username": "",
        "total_collections": 6,
        "total_likes": 5452,
        "total_photos": 622,
        "accepted_tos": true,
        "for_hire": true,
        "social": {
            "instagram_username": "",
            "portfolio_url": "",
            "twitter_username": "",
            "paypal_email": null
        }
    },
    "exif": {
        "make": "",
        "model": "",
        "name": "",
        "exposure_time": "",
        "aperture": "",
        "focal_length": "",
        "iso": 0
    },
    "location": {
        "title": null,
        "name": null,
        "city": null,
        "country": null,
        "position": {
            "latitude": null,
            "longitude": null
        }
    },
    "views": 1220184,
    "downloads": 6190
}

  */
  const gettersSetters = {
    imagesArray,
    indivImage,
    heroImage,
    trending,
    searchList,
    inputText,
    setInputText,
    favorites,
    setImagesArray,
    setIndivImage,
    setHeroImage,
    setTrending,
    setSearchList,
    setFavorites
  }

  useEffect(() => {
    const url = 'http://localhost:3001/';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImagesArray(data.photos))
  }, [])

  
  return (
    <AppContext.Provider value={gettersSetters}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/:id' element={<PicDetails />} />
          <Route path='/myfavorites' element={<Favorites />} />
          <Route path='/photographers' element={<Photographers />} />
        </Routes>
      </Router>

    </AppContext.Provider>
  );
}

export default App;
