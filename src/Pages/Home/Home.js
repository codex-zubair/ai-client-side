import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Home = () => {
    return (
        <div>
           
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://www.db.com/contentAsset/image/df39e4fc-d6d5-410f-b0ac-f2612156c7b0/fileAsset/filter/Resize,Jpeg/resize_w/640/df1f7e0a-2d9f-4f8f-99e5-54627590b248.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Interested ON AI?</h1>
                        
                        <p className="py-6">Artificial intelligence is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals and humans.</p>
                        <Link to='/courses' className="btn btn-primary">Start Learning today</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;