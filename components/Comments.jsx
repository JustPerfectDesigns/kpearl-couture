"use client";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { createComment, getCommentsByProductId } from "@/sanity/comment-utils";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-hot-toast";
import { Button } from "./ui/button";

function Comments({ product }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const { isLoaded, isSignedIn, user } = useUser();
  const email = user?.emailAddresses[0]?.emailAddress;

  useEffect(() => {
    // Fetch comments for the current product
    const fetchComments = async () => {
      if (product?._id) {
        try {
          const fetchedComments = await getCommentsByProductId(product._id);
          // console.log("Fetched Comments:", fetchedComments); // Log fetched comments for debugging
          setComments(fetchedComments);
        } catch (error) {
          console.error("Error fetching comments:", error);
        }
      }
    };

    fetchComments();
  }, [product]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = async () => {
    if (comment.trim() !== "") {
      try {
        // Call createComment function to create a new comment
        const newComment = await createComment(
          product._id,
          comment,
          rating,
          email
        );
        toast.success("Comment added");

        // Update the state with the new comment received from Sanity
        setComments([...comments, newComment]);

        // Reset input values
        setComment("");
        setRating(0);
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Leave a review</h2>

      {/* Star Rating */}
      <div className="flex items-center space-x-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={
              star <= rating
                ? "text-[#FFD700] text-2xl cursor-pointer"
                : "text-gray-300 text-2xl cursor-pointer"
            }
            onClick={() => handleRatingChange(star)}
          />
        ))}
      </div>

      {/* Input for Comment */}
      <div className="flex items-center justify-center space-x-4 mb-4">
        <textarea
          type="text"
          placeholder="Your comment..."
          value={comment}
          onChange={handleCommentChange}
          className="mt-2 w-full border bg-[#F9F9F9] px-4 py-2 text-[#000] outline-none"
        />
        <Button
          onClick={handleAddComment}
          type="button"
          className="rounded-none"
        >
          Comment
        </Button>
      </div>

      {/* Dynamic Comments */}
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="mb-4">
            <strong>{comment.email}:</strong> {comment.commentText}
            <div className="flex flex-row space-x-1">
              {[...Array(comment.stars)].map((_, i) => (
                <FaStar key={i} className="text-[#FFD700] text-lg" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
