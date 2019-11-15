import CONSTANTS from './constants';

export const AddUser = (name, email) => {
  return {
    type: CONSTANTS.ADD,
    payload: {
      name: name,
      email:email
    }
  }
}

export const DeleteUser = name => {
  return {
    type: CONSTANTS.DELETE,
    payload: name
  }
}

