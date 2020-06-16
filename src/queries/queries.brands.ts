export const createBrandMutation = `
  mutation($name: String!, $description: String!) {
    createBrand(brandObj: { name: $name, description: $description }) {
      id
    }
  }
`;
