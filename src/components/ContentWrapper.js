import React from 'react';
import Footer from './Footer';
import ContentRowtop from './ContentRowtop';
import Topbar from './Topbar';
import Additional from './Additional';

function ContentWrapper() {
    return (
    <div id="content-wrapper" className="d-flex flex-column">

        <div id="content">
                <Topbar/>
                <ContentRowtop/>
        </div>
        <Additional/>
        <Footer/>
        
    </div>
    )
}

export default ContentWrapper;