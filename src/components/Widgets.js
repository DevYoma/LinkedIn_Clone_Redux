import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const Widgets = () => {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return ( 
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("I'm Yoma, a React JS Developer", "Top Readers - 9999")}
            {newsArticle("I used Redux in this Build", "Top news - 2000")}
            {newsArticle("CoronaVirus: UK updates", "Top news - 886")}
            {newsArticle("Limits Continuity and Differentiality", "Least Rated - 5")}

            {/* {newsArticle("Hi, I'm Yoma, I am a React JS Developer and a Web Developer Enthusiast", "Top news - 9999 readers")} */}
            
        </div>
     );
}
 
export default Widgets;