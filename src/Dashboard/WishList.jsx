import { useEffect, useState } from "react";
import ListElement from "./ListElement";
import Skeleton from "react-loading-skeleton";
import { useAuth } from "../AuthProvider";

const WishList = () => {
  const [wishlist, setWishlist] = useState(false);
  const [carts, setCarts] = useState(false);
  const id = useAuth()();

  useEffect(() => {
    const Fetch = async () => {
      const response = await fetch(
        `https://server.byte-burst.xyz/?action=mywishlist&user=${id}`
      );
      const data = await response.json();

      const response3 = await fetch(
        `https://server.byte-burst.xyz/?action=getcartlist&user=${id}`
      );
      const data3 = await response3.json();

      let array2 = [];
      data3.forEach((d) => {
        array2.push(d.Item);
      });

      setCarts(array2);
      setWishlist(data);
    };
    Fetch();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {wishlist ? (
        wishlist.map((a) => {
          return <ListElement data={a} isCart={carts.includes(a.item)} />;
        })
      ) : (
        <>
          <Skeleton height={70} count={4} className="my-3" />
        </>
      )}
    </div>
  );
};

export default WishList;
