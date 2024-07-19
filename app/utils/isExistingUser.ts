import getUsers from './getUsers';

const isExistingUser = (id: string): boolean => {
  const users = getUsers();
  if (!users) return false;
  return users.some((user) => user.id === id);
};

export default isExistingUser;
