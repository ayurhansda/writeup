import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './RouterComp/Layout';
import Home from './RouterComp/Home';
import AboutUs from './RouterComp/AboutUs';
import Contact from './RouterComp/Contact';
import Explore from './RouterComp/Explore';
import ArticleHeading from './RouterComp/ArticleHeading';
import Article from './RouterComp/Article';
import SigninSignup from "./RouterComp/SigninSignup";
import Pricing from "./RouterComp/Pricing";


export default function App() {
  return(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='Contact' element={<Contact />} />
          <Route path='AboutUs' element={<AboutUs />} />
          <Route path='Explore' element={<Explore />} />
          <Route path='Article' element={<Article />} />
          <Route path='ArticleHeading' element={<ArticleHeading />} />
          <Route path='Register' element={<SigninSignup />} />
          <Route path='Pricing' element={<Pricing />} />
        </Route>
      </Routes>
  </BrowserRouter>
  );
}
