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
      {isVisible && <CountUp end={end} duration={2} />}
    </span>
  );
};
function Stats() {
  return (
    <div>
       <div>
      <div>
      <div className="section mcb-section mcb-section-e2f235ab0" style={{ paddingTop: "60px", paddingBottom: "20px", backgroundColor: "#edeff2" }}>
        <div className="section_wrapper mcb-section-inner">
          <div className="wrap mcb-wrap mcb-wrap-2a0e64a3b one clearfix" style={{}}>
            <div className="mcb-wrap-inner">
              <div className="column mcb-column mcb-item-062109229 one-fourth column_quick_fact">
                <div className="quick_fact align_center animate-math">
                  <div className="number-wrapper" style={{color:'#9845AA'}} >
                    <CountUpOnScroll end={1452} />
                  </div>
                  <br />
                  <h3 className="title title_tag">Happy gym users</h3>
                  <hr className="hr_narrow" />
                  <div className="desc">
                    Donec vestibulum justo a diam ultricies pel lentesque.
                    Quisque mattis diam vel lac.
                  </div>
                </div>
              </div>
              <div className="column mcb-column mcb-item-dddabab6f one-fourth column_quick_fact">
                <div className="quick_fact align_center animate-math">
                  <div className="number-wrapper" style={{color:'#9845AA'}}>
                    <CountUpOnScroll end={350} />
                  </div>
                  <br/>
                  <h3 className="title title_tag">Square metters of space</h3>
                  <hr className="hr_narrow" />
                  <div className="desc">
                    Donec vestibulum justo a diam ultricies pel lentesque.
                    Quisque mattis diam vel lac.
                  </div>
                </div>
              </div>
              <div className="column mcb-column mcb-item-d2869df79 one-fourth column_quick_fact">
                <div className="quick_fact align_center animate-math">
                  <div className="number-wrapper" style={{color:'#9845AA'}}>
                    <CountUpOnScroll end={12} />
                  </div>
                  <br/>
                  <h3 className="title title_tag">Instructors</h3>
                  <hr className="hr_narrow" />
                  <div className="desc">
                    Donec vestibulum justo a diam ultricies pel lentesque.
                    Quisque mattis diam vel lac.
                  </div>
                </div>
              </div>
              <div className="column mcb-column mcb-item-834bc97ff one-fourth column_quick_fact">
                <div className="quick_fact align_center animate-math">
                  <div className="number-wrapper" style={{color:'#9845AA'}}>
                    <CountUpOnScroll end={7} />
                  </div>
                  <br/>
                  <h3 className="title title_tag">Days a week</h3>
                  <hr className="hr_narrow" />
                  <div className="desc">
                    Donec vestibulum justo a diam ultricies pel lentesque.
                    Quisque mattis diam vel lac.
                  </div>
                </div>
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

export default Stats
