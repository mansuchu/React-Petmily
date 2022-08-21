const UserItem = ({ user }) => {
    return (
        <div className="item">
        <table>
            <thead>
                <th>이름</th>
                <th>생년월일</th>
                <th>연락처</th>
                <th>주거형태</th>
                <th>반려견 소유 여부</th>
                <th>유기견 일련 번호</th>
                <th>입양 사유</th>
                <th>중성화 수술 동의 여부</th>
            </thead>
            <tbody>
                <td>{user.userName}</td>
                <td>{user.userBirth}</td>
                <td>{user.userPhone}</td>
                <td>{user.house}</td>
                <td>{user.havePets}</td>
                <td>{user.manageNumber}</td>
                <td>{user.adoptReason}</td>
                <td>{user.surgeryAgree}</td>

            </tbody>
        </table>
        </div>
    );
  };
  export default UserItem;