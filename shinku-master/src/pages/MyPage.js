import React from 'react';
import { useEffect, useState } from 'react';
import '../myPage.css';
import UserItem from '../component/components/UserItem';
function MyPage({ userId }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    window
      .fetch(`http://localhost:4000/form`)
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [userId]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <>
      
      <div className="mypage">
        <div className="list">
          <h1>신청 조회 확인</h1>
        </div>
        <br/><br/>
        <div>
        { user.map(user => <UserItem key={ user.userName } user={ user }/>) }
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
export default MyPage;