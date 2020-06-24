import React from "react";

const HomeCard = ({ url, category }) => {
	return (
		<div className="">
			<img className="img-responsive" alt={category} src={url} />
		</div>
	);
};

export default HomeCard;