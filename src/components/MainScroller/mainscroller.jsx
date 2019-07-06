import React from 'react';
import "./mainscroller.css";
import ScrollSection from "../ScrollSection/scrollsection"
const MainScroller = () => {
    return ( <div id="mainScrollerDiv" data-hijacking="on" data-animation="scaleDown">
	{/* <!-- hijacking: on/off - animation: none/scaleDown/rotate/gallery/catch/opacity/fixed/parallax --> */}

	<ScrollSection visible={true} background="red" heading="Workflow f afd"/>
	<ScrollSection background="blue" heading="Workflow afsd"/>
	<ScrollSection background="green" heading="Workflow Experfawefaience"/>
	<ScrollSection background="yellow" heading="Workflow 3dsf"/>
	<ScrollSection background="orange" heading="Workflow Exp12efasdfrience"/>
	<nav>
		<ul className="cd-vertical-nav">
			<li><a href="#0" className="cd-prev inactive">Next</a></li>
			<li><a href="#0" className="cd-next">Prev</a></li>
		</ul>
	</nav> 

</div> );
}
 
export default MainScroller;