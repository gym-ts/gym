import React from "react";

function Main() {
    return (
        <div
            style={{
                backgroundImage:
                    "url(https://themes.muffingroup.com/be/gym/wp-content/uploads/2015/04/home_gym_bg.jpg)",
            }}
        >
            <br />
            <div className="container mx-auto p-4" style={{ display: 'flex', justifyContent: 'flex-end',marginLeft:'33rem'}}>
                <div>
                    <h1 className="text-4xl font-bold text-white" style={{ fontFamily: 'Lato, Helvetica, Arial, sans-serif' }}>
                        Keep your body <br />
                        fit & strong
                    </h1>
                    <button className="bg-white text-black font-bold py-2 px-4 rounded mt-4" style={{ backgroundColor: '#9845AA', borderRadius: '15px' }}> Start today</button>
                </div>
                <div>
                    <img src="https://themes.muffingroup.com/be/gym/wp-content/uploads/2015/04/home_gym_trailerbox_1.jpg" alt="home_gym_trailerbox_1" style={{ width: '44%', height: '64%', borderRadius:'15px', marginLeft:'2rem'}} />
                </div>
            </div>
          
        </div>
    );
}

export default Main;
