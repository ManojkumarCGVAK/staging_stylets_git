import React from "react";
import Link from "next/link";

const SellingPointsClickable = (props) => {
  const sellingPoints =
    props.items &&
    props.items.map((item, index) => (
      <div
        key={index}
        className="selling-points__card"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${item.image.src})`,
        }}
      >
        <Link href={item.link}><h4 style={{cursor: 'pointer'}}>{item.text}</h4></Link>
        
      </div>
    ));

  return <div className="selling-points">{sellingPoints}</div>;
};

export default SellingPointsClickable;
