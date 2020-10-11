const STORAGE_NAME = "automate.flow";
const CURRENT_USER = "flow.user";

export const addUser = (user) => {
  const userData = {
    ...user,
    workflows: []
  };
  const users = JSON.parse(localStorage.getItem(STORAGE_NAME));
  if (users === null ) {
    localStorage.setItem(STORAGE_NAME, JSON.stringify([userData]));
    return {
      status: 200,
      message: 'User created successfully! Please Login to continue',
    }
  } else {
    if (!isUserExists(user.email)) {
      users.push(userData);
      localStorage.setItem(STORAGE_NAME, JSON.stringify(users));
      return {
        status: 200,
        message: 'User created successfully! Please Login to continue',
      }
    } else {
      return {
        status: 400,
        message: `User with ${user.email} already present in the system, Please Login to continue`,
      }
    }
  }
};

export const isUserExists = (email) => {
  const users = JSON.parse(localStorage.getItem(STORAGE_NAME));
  if (users.filter((u) => u.email === email).length > 0) {
    return true;
  }
  
  return false;
}

export const getUserByEmailAndPassword = (user) => {
  const users = JSON.parse(localStorage.getItem(STORAGE_NAME));
  return  users.filter((u) => u.email === user.email && u.password === user.password);
}

export const createUserSession = (user) => {
  localStorage.setItem(CURRENT_USER, JSON.stringify(user));
}

export const destroyUserSession = () => {
  localStorage.removeItem(CURRENT_USER);
}

export const getAuthUser = () => {
  return JSON.parse(localStorage.getItem(CURRENT_USER));
}
