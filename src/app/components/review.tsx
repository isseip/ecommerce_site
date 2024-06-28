import React, { useState } from 'react';
import { useTheme } from '@/app/theme/themeContext';

interface Review {
  id: number;
  author: string;
  comment: string;
  rating: number;
  replies: string[];
  likes: number;
  replyActive: boolean;
}

interface ReviewSectionProps {
  reviews: Review[];
  addReview: (review: Review) => void;
  likeReview: (id: number) => void;
  toggleReplyBox: (id: number) => void;
  addReply: (id: number, reply: string) => void;
}

const LikeButton: React.FC<{ review: Review; likeReview: (id: number) => void }> = ({ review, likeReview }) => {
  const [liked, setLiked] = useState(false);

  const buttonClass = `btn ${liked ? 'text-red-500' : 'text-black'}`;

  const handleClick = () => {
    setLiked(!liked);
    likeReview(review.id);
  };

  return (
    <button className={buttonClass} onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      ({review.likes})
    </button>
  );
};

const ReviewSection: React.FC<ReviewSectionProps> = ({
  reviews,
  addReview,
  likeReview,
  toggleReplyBox,
  addReply,
}) => {
  const { theme } = useTheme();
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';

  const [newRating, setNewRating] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleStarClick = (rating: number) => {
    setNewRating(rating);
  };

  const handleFormToggle = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="container mx-auto bg-base-200 p-5">
      <h2 className={`text-3xl font-bold mb-6  ${textColor}`}>Customer Reviews</h2>
      <button onClick={handleFormToggle} className="btn mb-4 border-black">
        {isFormVisible ? 'Close Review Form' : 'Leave a Review'}
      </button>
      {isFormVisible && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const newReview: Review = {
              id: reviews.length + 1,
              author: formData.get('author') as string,
              comment: formData.get('comment') as string,
              rating: newRating,
              replies: [],
              likes: 0,
              replyActive: false,
            };
            addReview(newReview);
            e.currentTarget.reset();
            setNewRating(0);
            setIsFormVisible(false);
          }}
          className="mb-6"
        >
          <div className="mb-4">
            <label className={`block mb-2 ${textColor}`} htmlFor="author">
              Name
            </label>
            <input
              type="text"
              id="author"
              name="author"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className={`block mb-2 ${textColor}`} htmlFor="comment">
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className={`block mb-2 ${textColor}`}>Rating</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  className={`btn btn-sm ${newRating >= star ? 'bg-yellow-500' : 'bg-gray-300'}`}
                  onClick={() => handleStarClick(star)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <button type="submit" className="btn mt-4 border-black">
                Submit Reply
              </button>
        </form>
      )}
      {reviews.map((review) => (
        <div key={review.id} className="mb-4 p-4 bg-base-100 rounded-lg shadow-md">
          <h3 className={`text-xl font-bold ${textColor}`}>{review.author}</h3>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={review.rating >= star ? 'text-yellow-500' : 'text-gray-300'}>
                ★
              </span>
            ))}
          </div>
          <p className={`text-lg ${textColor}`}>{review.comment}</p>
          <div className="flex space-x-4 mt-2">
            <LikeButton review={review} likeReview={likeReview} />
            <button onClick={() => toggleReplyBox(review.id)} className="btn">
              Reply
            </button>
          </div>
          {review.replyActive && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const reply = formData.get('reply') as string;
                addReply(review.id, reply);
                e.currentTarget.reset();
              }}
              className="mt-2"
            >
              <textarea
                name="reply"
                className="textarea textarea-bordered w-full"
                required
              ></textarea>
              <button type="submit" className="btn mt-4">
                Submit Reply
              </button>
            </form>
          )}
          {review.replies.length > 0 && (
            <div className="mt-2 space-y-2">
              {review.replies.map((reply, index) => (
                <div key={index} className="ml-4 p-2 bg-base-200 rounded-lg shadow-sm">
                  <p className={`text-md ${textColor}`}>{reply}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
