import React from 'react'
import './section3.css'

export const Section3 = () => {
  return (
    <div className='section3'>
        <div className="container">
            <div className="video-section-wrap">
                <div className="video-content">
                    <h2>Watch our Explainer Video to Discover CV Reformatter</h2>
                    <p>
                    Our AI Assisted tool offers unmatched speed, accuracy, and precision, transforming your recruitment process.
                    <br />
                    <br />
                    Experience the efficiency that feels like a superpower with CV Reformatter. Enter a world where CV Reformatting is effortless.
                    </p>
                </div>
                <div className="video-wrap">
                    <div className="video-circle-1"></div>
                    <div className="video-circle-2"></div>
                    <div className="video-circle-3"></div>
                    <div className="video-holder">
                        <div className="ytvideo-holder">
                        <iframe src="https://www.youtube.com/embed/SlFpU8HqrAk?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0" 
                        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="" title="CVR Introduction">
                            #document(https://www.youtube.com/embed/SlFpU8HqrAk?rel=0&controls=1&autoplay=0&mute=0&start=0)
                        </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
