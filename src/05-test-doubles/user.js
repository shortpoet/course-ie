export const validateUser = user => {
  return Boolean(user.id && user.id > 0);
};

export const createUser = (id, name) => {
  const user = { id, name };
  if (!validateUser(user)) {
    throw new Error("Invalid user: it doesn't have an id");
  }
  return user;
};
