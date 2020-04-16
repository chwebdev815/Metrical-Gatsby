import React from "react"
import "../experience/assets/experience.scss"
import Header from "../experience/experience_header"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function  Conversion(){

    return(

<div className="Experience">


    <BackgroundSectionExp />
  

   



   

           
    </div>
    )
} 


const BackgroundSectionExp = ({ className }) =>{
    var cons_leave_info ="Understanding a consumer’s experience is pivotal to increasing your bottom line.Metrical’s intelligent surveys feed the conversion engine with critical data about why your consumers behave the way they do, and more importantly, why they leave. This data helps mold and shape your messaging so it speaks to each and every consumer."
    var cons_leave ="WHY ARE CONSUMeRS LEAVING?"
    var cons_happy ="KNOW HOW TO KEEP CONSUMERS HAPPY."
    var cons_happy_info ="Just as important as preventing a consumer from leaving is making sure they come back again and again. The experience data and analytics that Metrical provides enables you to make both near and long-term decisions to build loyal, repeat customers."
    
 return(

    
    <StaticQuery
      query={graphql`
        query {
          banner: file(relativePath: { eq: "experience_banner.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }

        }
      `}
      render={data => {
        // Set ImageData.

        return (
            <>
            <div className="relativepath">
            <Img fluid={ data.banner.childImageSharp.fluid} src="" />
            <Header />
            </div>
            <div className="box">
<h1>{cons_leave}
    </h1>
    <p>{cons_leave_info}</p>
   
    </div>
   
 

    <div className="box">

    <h1>{cons_happy}</h1>
    <p>{cons_happy_info}</p>

    </div>
    </>

        
          
        )
      }}
    />
  )
    }
