import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Reviews = () => {
  const { reviews } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () =>
    await dispatch.admin.getReviews((res) => {
      console.log('Reviews from fire', res);
    });
  return (
    <div style={{ margin: '0px 0px 50px 0px' }}>
      <span>ALL USER'S REVIEWS</span>
      <div style={{ marginTop: '20px' }}>
        {reviews &&
          reviews.map(({ email, review }) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '20px',
                backgroundColor: '#eee',
                padding: '20px'
              }}
            >
              <span style={{ fontWeight: '700', fontSize: '18px' }}>{email}</span>
              <span style={{ fontSize: '18px', marginTop: '10px' }}>{review}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Reviews;
