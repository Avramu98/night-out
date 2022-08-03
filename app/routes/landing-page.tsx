import type { LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { Layout } from '~/components/layout';
import { getUser } from '~/utils/auth.server';

export const loader: LoaderFunction = async ({ request }) =>
  // If there's already a user in the session, redirect to the home page
  (await getUser(request)) ? redirect('/') : null;

const LandingPage = () => (
  <Layout>
    <h1>landing</h1>
  </Layout>
);

export default LandingPage;
