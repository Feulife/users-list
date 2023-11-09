import { User } from "../user/User";

const Users = ({ usersOfList }) => {
  return (
    <>
      {usersOfList.map(user => (
        <User key={user.id} users={user} />
      ))}
    </>
  )
}

export default Users