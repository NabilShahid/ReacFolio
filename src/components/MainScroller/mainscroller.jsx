import React from 'react';
// import "../../externallibs/section-scroll/js/jquery"
import "./mainscroller.css";
const MainScroller = () => {
    return ( <div id="mainScrollerDiv" data-hijacking="on" data-animation="scaleDown">
	<section className="cd-section visible">
		<div>
			<h2>Page Scroll Effects</h2>
		</div>
	</section>

	<section className="cd-section">
		<div>
			<h2>Section 2</h2>
		</div>
	</section>

	<section className="cd-section">
		<div>
			<h2>Section 3</h2>
		</div>
	</section>

	<section className="cd-section">
		<div>
			<h2>Section 4</h2>
		</div>
	</section>

	<section className="cd-section">
		<div>
			<h2>Section 5</h2>
		</div>
	</section>

	<nav>
		<ul className="cd-vertical-nav">
			<li><a href="#0" className="cd-prev inactive">Next</a></li>
			<li><a href="#0" className="cd-next">Prev</a></li>
		</ul>
	</nav> 

</div> );
}
 
export default MainScroller;