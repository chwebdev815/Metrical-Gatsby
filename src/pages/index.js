import React from "react"
import Layout from "../components/layout/."
import SEO from "../components/layout/seo"
import Home from "../components/home/."
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Index(props){
  
 return(
    <Layout location={props.location.pathname}>
    <SEO title="Home" />
    <Home/>
    </Layout>
 )
}


