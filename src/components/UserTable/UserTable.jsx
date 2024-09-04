import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../redux/usersOps";
import SearchInput from "../SearchInput/SearchInput";
import { selectFilteredUsers } from "../../redux/usersSlice";

export const UserTable = () => {
  const users = useSelector(selectFilteredUsers);
  const dispatch = useDispatch();

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div>
      <SearchInput />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td>
                  <button type="button" onClick={() => handleDelete(user.id)}>
                    Delete user
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No users available</td>{" "}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
