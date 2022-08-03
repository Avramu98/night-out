import type { LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { requireUserId as requireUserIdExample } from '~/utils/example/auth.server';
import { requireUserId } from '~/utils/auth.server';

export const loader: LoaderFunction = async ({ request }) => {
  const exampleApp = false;
  if (exampleApp) {
    await requireUserIdExample(request);
    return redirect('/example');
  }
  await requireUserId(request);
  return redirect('/home');
};
