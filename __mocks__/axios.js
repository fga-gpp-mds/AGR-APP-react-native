import {data as users} from './api_data.json';
import {data as schedules} from './api_data.json';

const USERS_LIST_ENDPOINT = 'http://localhost:8083/api/userManager/listUser';
const EMPLOYEE_PROFILE_ENDPOINT = 'http://localhost:8083/api/userManager/listById/?id=';
const EDIT_USER_ENDPOINT = 'http://172.18.0.1:8083/api/userManager/editUser/?id=';
const LOGIN_ENDPOINT = 'http://172.18.0.1:8086/api/userManager/login';
const SCHEDULES_ENDPOINT = 'http://172.18.0.1:8091/api/schedule/listMonth/?month=';

module.exports = {
  get: jest.fn((url) => {
    switch (url) {
      case USERS_LIST_ENDPOINT:
        return Promise.resolve({
          data: users
        });
      case LOGIN_ENDPOINT:
        return Promise.resolve({
          data: users
        });
      case EMPLOYEE_PROFILE_ENDPOINT:
        return Promise.resolve({
          data: users
        });
      case EDIT_USER_ENDPOINT:
        return Promise.resolve({
          data: users
        });
      case SCHEDULES_ENDPOINT:
        return Promise.resolve({
          data: schedules
        });
      default:
        return Promise.resolve({
          data: {message: '404 data not found'}
        });
    }
  })
};