import { USERS } from 'app/const/user';

const getUsers = (): User[] | null => {
  const users = localStorage.getItem(USERS);
  return users ? (JSON.parse(users) as User[]) : null;
};

export default getUsers;
