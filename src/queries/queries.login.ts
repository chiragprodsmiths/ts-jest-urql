export const loginQuery = `
  mutation($userName: String!, $password: String!) {
    login(loginObj: { email: $userName, password: $password }) {
      token
    }
  }
`;
