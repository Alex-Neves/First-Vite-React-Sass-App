import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import '../global.scss'
import React, { useEffect } from 'react'
import Newsletter from "./Newsletter";

function StaticUniversals( props ) {
  const {pathName, pageName} = props;
  if (pageName != 'Home'){
    useEffect(() => {
      document.title = pageName;
    }, []);
  }
  else{
    useEffect(() => {
      document.title = "Big Dan's Hemporium";
    }, []);
  }
  return (
    <div>
        <Header/>
        <Sidebar path = {pathName} name = {pageName}/>
        {props.children}
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default StaticUniversals