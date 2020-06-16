// import * as React from 'react';
// import { MemoryRouter as Router } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
// import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// // import { ThemeProvider } from 'theme-ui';
// // import { theme } from '../theme/index';
// import ProtectedRouter from './router.protected';

/**
 * Test Strokes
 */

/**
 * all routes
 */
// 404 is defined
// not found should redirect to 404 (1)
// found paths should have valid urls (*)

/**
 * authenticated routes
 */
// authenticated routes should redirect to login (*)
// logout should redirect to login (1)
// public routes should not redirect to login

/**
 * 404
 */

// type PropTypes = {
//   children?: React.ReactElement | any;
// };

// const AllTheProviders = (props: PropTypes) => {
//   return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
// };

// const customRender = (ui: any, options: any) => render(ui, { wrapper: AllTheProviders, ...options });

// describe('router tests', () => {
//   test('landing on a bad page shows 404 page', async () => {
//     const history = createMemoryHistory();
//     await history.push('/some/bad/route');
//     const { getByTestId } = render(
//       <Router>
//         <ProtectedRouter />
//       </Router>,
//       {},
//     );
//     return expect(getByTestId('404-not-found')).toBeTruthy();
//   });
// });
