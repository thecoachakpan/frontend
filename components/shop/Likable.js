import React, { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useSelector } from "react-redux";

const Likable = (id) => {
  const [liked, setLiked] = useState(false);
  const { token, isAuthenticated } = useSelector((state) => state.auth);

  const handleLike = () => {
    try {
      if (!isAuthenticated) return;
      setLiked(!liked);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {liked ? (
        <MdFavorite
          onClick={handleLike}
          style={{ color: "#0f1c70", cursor: "pointer" }}
          size="22"
        />
      ) : (
        <MdFavoriteBorder
          onClick={handleLike}
          style={{ cursor: "pointer" }}
          size="22"
        />
      )}
    </>
  );
};

export default Likable;
