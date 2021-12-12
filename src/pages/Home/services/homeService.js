import Img1 from "../../../assets/svg/img1.svg";
import Img2 from "../../../assets/svg/img2.svg";
import Img3 from "../../../assets/svg/img3.svg";

const listItems = () => {
  return [
    {
      title: "test",
      image: Img1,
      text: "test",
      variant: "primary",
    },
    { title: "test", image: Img2, text: "test", variant: "secondary" },
    { title: "test", image: Img3, text: "test", variant: "tertiary" },
  ];
};

export { listItems };
