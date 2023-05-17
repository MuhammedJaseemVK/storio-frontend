import React from 'react'

import Card from './Card'
import Middle from './Middle'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

// import RightBar from './RightBar'
// AwesomeSlider





const Container = () => {
    const welcome = 'Welcome back ';
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div className=" bg-black h-full " >
            <div className="  px-8 py-1 ">
                <p className="text-gray-500 text-2xl">
                    {welcome}

                    <span className="text-gray-500 transform -translate-y-2">
                        Jaseem !
                    </span>
                </p>
            </div>
            <div className="flex   p-4 space-x-3">
                <Card title="TOTAL" balance={409.0790} icon={0} />
                <Card title="AVAILABLE" balance={300.0790} icon={1} />
                <Card title="CLAIMABLE REWARD" balance={100.0790} icon={2} />
                <Card title="DELEGATED" balance={339.0790} icon={3} />

            </div>
            <div className="flex  ml-3 mt-6 space-x-6  mr-4">
                <Middle />
                {/* <div> */}
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={6000}
                >
                    <div data-src="/1.jpeg" />
                    <div data-src="/2.jpeg" />
                    <div data-src="/offer.jpg" />
                </AutoplaySlider>
                {/* </div> */}
                {/* <RightBar /> */}
            </div>
        </div>
    )
}

export default Container