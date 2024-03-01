import MagnaHouse from "../../../images/surrey/house-outside.jpg";
import Bedroom from "../../../images/surrey/bedroom.jpg";
import Lounge from "../../../images/surrey/lounge.jpg";
import Lounge2 from "../../../images/surrey/lounge-2.jpg";
import Kitchen from "../../../images/surrey/kitchen.jpg";
import Office from "../../../images/surrey/office.jpg";
import Bathroom from "../../../images/surrey/bathroom.jpg";

const images = [
  MagnaHouse,
  Bedroom,
  Lounge,
  Office,
  Bathroom,
  Kitchen,
  Lounge2,
];

export const imageArray = images.map((image) => {
  return { original: image.src, thumbnail: image.src };
});
