import { useState } from "react";

const SlideShow = () => {
  const [img, setImg] = useState(0);
  const list = ["4a.jpeg", "2.jpeg", "6.jpg", "0a.jpeg"];
  return (
    <div className="p-5 ">
      <img src={list[img]} className="max-w-[600px] h-[400px]  p-2" />
      <div className="flex">
        {list.map((a, i) => {
          if (a !== list[img]) {
            return (
              <img
                src={a}
                onClick={() => {
                  setImg(i);
                }}
                className="w-[200px] cursor-pointer p-2"
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default SlideShow;
