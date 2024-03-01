import SpaCourt from "../../../images/cheltenham/exterior2.jpg";
import Bedroom from "../../../images/cheltenham/bedroom.jpg";
import Lounge from "../../../images/cheltenham/lounge.jpg";
import Lounge2 from "../../../images/cheltenham/facilities.jpg";
import Kitchen from "../../../images/cheltenham/kitchen.jpg";
import Bedroom2 from "../../../images/cheltenham/bedroom2.jpg";
import Bedroom3 from "../../../images/cheltenham/bedroom3.jpg";
import Kitchen2 from "../../../images/cheltenham/kitchen2.jpg";
import Kitchen3 from "../../../images/cheltenham/kitchen3.jpg";

const images = [
  SpaCourt,
  Bedroom,
  Lounge,
  Lounge2,
  Kitchen,
  Bedroom2,
  Bedroom3,
  Kitchen2,
  Kitchen3,
];

export const imageArray = images.map((image) => {
  return { original: image.src, thumbnail: image.src };
});
