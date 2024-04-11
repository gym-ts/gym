import React,{useEffect,useRef,useState} from "react";
import CountUp from 'react-countup';



interface CountUpOnScrollProps {
  end: number;
}

const CountUpOnScroll: React.FC<CountUpOnScrollProps> = ({ end }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = elementRef.current?.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const currentIsVisible:any = rect && rect.top + scrollTop < window.innerHeight + scrollTop;
      setIsVisible(currentIsVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const elementRef = useRef<HTMLSpanElement>(null);

  return (
    <span ref={elementRef}>
      {isVisible && <CountUp end={end} duration={1.5} />}
    </span>
  );
};
function LandingStats() {
  return (
   
 <div>
         <div className="section_wrapper mcb-section-inner">
          <div
            className="wrap mcb-wrap mcb-wrap-2c5a6bfcf one  valign-top clearfix"
            style={{}}
          >
            <div className="mcb-wrap-inner">
              <div className="column mcb-column mcb-item-293e5cc29 one column_fancy_heading">
                <div className="fancy_heading fancy_heading_icon">
                  <div className="fh-top" />

                  <h2 style={{marginRight:'150px'}} className="title">Numbers, numbers, numbers...</h2>
                </div>
              </div>
              <div className="column mcb-column mcb-item-85ccec591 one-fourth column_counter">
                <div className="counter counter_vertical animate-math">
                  <div className="animate zoomIn" data-anim-type="zoomIn">
                    <div className="icon_wrapper">
                      <img
                        src="https://themes.muffingroup.com/be/gym/wp-content/uploads/2017/01/home_gym_counter_1.png"
                        alt="home_gym_counter_1"
                        width={70}
                        height={73}
                      />
                    </div>
                    <div className="desc_wrapper">
                      <div className="number-wrapper">
                        <span className="number" data-to={1452}>
                        <CountUpOnScroll end={1452} />
                        </span>
                      </div>
                      <p className="title">Happy gym users</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column mcb-column mcb-item-bd606368f one-fourth column_counter">
                <div className="counter counter_vertical animate-math">
                  <div className="animate zoomIn" data-anim-type="zoomIn">
                    <div className="icon_wrapper">
                      <img
                        src="https://themes.muffingroup.com/be/gym/wp-content/uploads/2017/01/home_gym_counter_2.png"
                        alt="home_gym_counter_2"
                        width={70}
                        height={73}
                      />
                    </div>
                    <div className="desc_wrapper">
                      <div className="number-wrapper">
                        <span className="number" data-to={350}>
                        <CountUpOnScroll end={350} />
                        </span>
                      </div>
                      <p className="title">Square metters of space</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column mcb-column mcb-item-4330a0cc3 one-fourth column_counter">
                <div className="counter counter_vertical animate-math">
                  <div className="animate zoomIn" data-anim-type="zoomIn">
                    <div className="icon_wrapper">
                      <img
                        src="https://themes.muffingroup.com/be/gym/wp-content/uploads/2017/01/home_gym_counter_3.png"
                        alt="home_gym_counter_3"
                        width={70}
                        height={73}
                      />
                    </div>
                    <div className="desc_wrapper">
                      <div className="number-wrapper">
                        <span className="number" data-to={12}>
                        <CountUpOnScroll end={12} />
                        </span>
                      </div>
                      <p className="title">Instructors</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column mcb-column mcb-item-007eba6e2 one-fourth column_counter">
                <div className="counter counter_vertical animate-math">
                  <div className="animate zoomIn" data-anim-type="zoomIn">
                    <div className="icon_wrapper">
                      <img
                        src="https://themes.muffingroup.com/be/gym/wp-content/uploads/2017/01/home_gym_counter_4.png"
                        alt="home_gym_counter_4"
                        width={70}
                        height={73}
                      />
                    </div>
                    <div className="desc_wrapper">
                      <div className="number-wrapper">
                        <span className="number" data-to={7}>
                        <CountUpOnScroll end={7} />
                        </span>
                      </div>
                      <p className="title">Days a week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LandingStats
