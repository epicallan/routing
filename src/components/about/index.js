import React from 'react'

import betty from "../../static/images/new1.jpeg";

const About = () => {  
  return (
    <div className="container"  id="about" >
      <div className="content-wrap">
        <div className="row">
          <div className="col-md-8">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wbp_text_column wbp_content_element">
                  <div className="wbp_wrapper">
                    <h3 style={{marginTop: "0px", marginBottom: "20px", fontSize: "24px"}}>BETTINAH TIANAH</h3>
                    <h6 style={{marginTop: "10px", marginBottom: "20px"}}>FASHION ICON, TV HOST , ACTOR</h6>
                    <div className="content"/>
                    The face of everything young, fresh and modern in Uganda. I started out in the Ugandan entertainment at the age of 15 as the host of “Youth Voice” followed by popular television shows “Be My Date” and “About Town”, I also became a respected actor after landing the lead role as Rhona in the Hostel serenity season 4 that aired on  Uganda’s NTV.

I’ve also been a spokesperson for many campaigns here in Uganda and regularly featured on the best dressed lists. All this while completing a degree in Public Relations and media management at CUU

Currently a panelist on the Ntv Style Project a show that aims at edutaining about current trends beauty and fashion which airs every Friday at 7:35pm. In 2017, I emerged as a winner for the best dressed female media personality Uganda in the Abryanz Style and Fashion Awards also landed multiple nominations in the Starqt  and  Hipipo Awards.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4" >
            <div className="vc_column-inner">
              <div className="wpb_wrapper">  
                <div className="wbp_single_image wbp_content_element vc_align_left">
                  <figure className="wpb_wrapper vc_figure">
                    <div className="vc_single_image_wrapper vc_box_border_grey">
                      <img className="single" src={betty} alt="about" width="755" height="1048"/>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default About;
