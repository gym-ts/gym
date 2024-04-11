import React from "react";
const MapEmbed = ({ location }: any) => {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51151.845900840795!2d10.171676874160763!3d36.74680225846674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd36f5b1c678d1%3A0x8f9cd22408a75636!2sCentre%20De%20Traumatologie%20Et%20Des%20Grands%20Brul%C3%A9s!5e0!3m2!1sen!2stn!4v1712759820752!5m2!1sen!2stn
  `;
  return (
    <div>
      <div style={{ width: "100%", height: "400px" }}>
        <iframe
          title="map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={mapUrl}
          allowFullScreen
        ></iframe>
      </div>
      <div
        className="section mcb-section mcb-section-8a854e986"
        style={{ paddingTop: "50px" }}
      >
        <div className="section_wrapper mcb-section-inner">
          <div
            className="wrap mcb-wrap mcb-wrap-13e9dc7a5 one  valign-top clearfix"
            style={{}}
          >
            <div className="mcb-wrap-inner">
              <div className="column mcb-column mcb-item-a6222089d two-third column_image">
                <div className="image_frame image_item no_link scale-with-grid no_border">
                  <div className="image_wrapper">
                    <img
                      className="scale-with-grid"
                      src="https://themes.muffingroup.com/be/gym/wp-content/uploads/2015/04/photodune-9827951-athletic-girl-s.jpg"
                      alt="Athletic girl"
                      width={948}
                      height={632}
                    />
                  </div>
                </div>
              </div>
              <div className="column mcb-column mcb-item-3df0ff4b4 one-third column_column">
                <div className="column_attr clearfix" style={{}}>
                  <div style={{ marginLeft: "5%" }}>
                    <span className="single_icon  themecolor">
                      <i
                        style={{ fontSize: "50px", lineHeight: "50px" }}
                        className="icon-mail-line"
                      />
                    </span>
                    <h2>Address</h2>
                    <hr
                      className="no_line"
                      style={{ margin: "0 auto 30px auto" }}
                    />
                    <p className="big">
                      Vestibulum commodo volutpat a, convallis ac, laoreet enim.
                      Phasellus fermentum in, dolor.{" "}
                    </p>
                    <hr
                      className="no_line"
                      style={{ margin: "0 auto 30px auto" }}
                    />
                    <h5 style={{ marginBottom: "7px" }}>BeGym</h5>
                    <p className="big">
                      Level 13, 2 Elizabeth St,
                      <br />
                      Melbourne, Victoria 3000
                      <br />
                      Australia
                    </p>
                    <p
                      style={{
                        fontSize: "17px",
                        lineHeight: "25px",
                        marginBottom: "5px",
                      }}
                    >
                      +61 (0) 3 8376 6284
                    </p>
                    <a
                      style={{
                        fontSize: "17px",
                        lineHeight: "25px",
                        display: "block",
                      }}
                      href="mailto:noreply@envato.com"
                    >
                      noreply@envato.com
                    </a>
                    <hr
                      className="no_line"
                      style={{ margin: "0 auto 15px auto" }}
                    />
                    <h4>Find us on social media</h4>
                    <p style={{ fontSize: "30px", lineHeight: "30px" }}>
                      <a href="#">
                        <i className="icon-facebook-circled" />
                      </a>
                      <a href="#">
                        <i className="icon-gplus-circled" />
                      </a>
                      <a href="#">
                        <i className="icon-twitter-circled" />
                      </a>
                      <a href="#">
                        <i className="icon-pinterest-circled" />
                      </a>
                      <a href="#">
                        <i className="icon-linkedin-circled" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="column mcb-column mcb-item-cd5a1a863 one-second column_column">
                <div className="column_attr clearfix" style={{}}>
                  <div style={{ margin: "0 5% 0 0" }}>
                    <h2>Quisque lorem</h2>
                    <p className="big">
                      Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis
                      natoque penatibus et ultrices volutpat. Nullam wisi
                      ultricies a, gravida vitae, dapibus risus ante sodales.
                    </p>
                    <p className="big">
                      Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit amet mauris.
                      Morbi accumsan ipsum velit. Nam nec tellus a odio
                      tincidunt auctor a ornare odio. Sed non mauris vitae erat
                      consequat auctor eu in elit. Class aptent taciti sociosqu
                      ad.
                    </p>
                  </div>
                </div>
              </div>
              <div className="column mcb-column mcb-item-06c8044e1 one-second column_column">
                <div className="column_attr clearfix" style={{}}>
                  <h2>Send us a message</h2>
                  <div
                    role="form"
                    className="wpcf7"
                    id="wpcf7-f30-p26-o1"
                    lang="en-US"
                    dir="ltr"
                  >
                    <div className="screen-reader-response">
                      <p role="status" aria-live="polite" aria-atomic="true" />{" "}
                      <ul />
                    </div>
                    <form
                      action="/be/gym/contact/#wpcf7-f30-p26-o1"
                      method="post"
                      className="wpcf7-form init"
                      data-status="init"
                    >
                      <div style={{ display: "none" }}>
                        <input type="hidden" name="_wpcf7" defaultValue={30} />
                        <input
                          type="hidden"
                          name="_wpcf7_version"
                          defaultValue="5.4.2"
                        />
                        <input
                          type="hidden"
                          name="_wpcf7_locale"
                          defaultValue="en_US"
                        />
                        <input
                          type="hidden"
                          name="_wpcf7_unit_tag"
                          defaultValue="wpcf7-f30-p26-o1"
                        />
                        <input
                          type="hidden"
                          name="_wpcf7_container_post"
                          defaultValue={26}
                        />
                        <input type="hidden" name="_wpcf7_posted_data_hash" />
                      </div>
                      <div className="column one-second">
                        <span className="wpcf7-form-control-wrap your-name">
                          <input
                            type="text"
                            name="your-name"
                            size={40}
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Your name"
                          />
                        </span>{" "}
                      </div>
                      <div className="column one-second">
                        <span className="wpcf7-form-control-wrap your-email">
                          <input
                            type="email"
                            name="your-email"
                            size={40}
                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Your e-mail"
                          />
                        </span>{" "}
                      </div>
                      <div className="column one">
                        <span className="wpcf7-form-control-wrap your-subject">
                          <input
                            type="text"
                            name="your-subject"
                            size={40}
                            className="wpcf7-form-control wpcf7-text"
                            aria-invalid="false"
                            placeholder="Subject"
                          />
                        </span>{" "}
                      </div>
                      <div className="column one">
                        <span className="wpcf7-form-control-wrap your-message">
                          <textarea
                            name="your-message"
                            cols={40}
                            rows={4}
                            className="wpcf7-form-control wpcf7-textarea"
                            aria-invalid="false"
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </span>
                      </div>
                      <div className="column one">
                      <button
                      className="bg-white text-black font-bold py-2 px-4 rounded mt-4"
                      style={{
                        backgroundColor: "#9845AA",
                        borderRadius: "15px",
                        color:'#FFFFFF'
                      }}
                    >
                      {" "}
                      Submit
                    </button>
                        <span className="ajax-loader" />
                      </div>
                      <div
                        className="wpcf7-response-output"
                        aria-hidden="true"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapEmbed;
