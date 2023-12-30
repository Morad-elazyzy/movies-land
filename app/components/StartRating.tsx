import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  totalStars: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, totalStars }) => {
  const stars = Array.from({ length: totalStars }, (_, index) => (
    <span key={index} className="flex cursor-pointer text-2xl">
      {index < rating ? (
        <FaStar className="text-yellow-500" />
      ) : (
        <FaRegStar className="text-gray-300" />
      )}
    </span>
  ));

  return <div className="flex">{stars}</div>;
};

export default StarRating;
