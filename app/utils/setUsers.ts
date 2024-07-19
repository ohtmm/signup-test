import { USERS } from 'app/const/user';
import getUsers from './getUsers';
import hashPassword from './hashPassword';

const setUsers = async (newUser: User) => {
  const prev = getUsers();

  const hashed = await hashPassword(newUser.password);
  const hashedUser = {
    ...newUser,
    password: hashed,
    'password-confirm': hashed,
  };

  const updated = prev ? [...prev, hashedUser] : [hashedUser];
  localStorage.setItem(USERS, JSON.stringify(updated));
};

export default setUsers;
