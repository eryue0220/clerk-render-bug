import { QueryCache } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import { SuperJSON } from 'superjson';
import { isZodErrorLike } from 'zod-validation-error';

const methodErrorHandler = (error: any) => {
  if (error?.data?.validationError && isZodErrorLike(error.data.validationError)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    // toast.error(`${fromZodError(error.data.validationError)}`);
  } else if (error?.shape?.message) {
    // toast.error(`${error.shape.message}`);
  } else {
    // toast.error('An unknown error occurred');
  }
};

export const trpc = createTRPCNext<any>({
  ssr: true,

  config() {
    const url = `/api/test`;

    return {
      queryClientConfig: {
        queryCache: new QueryCache(),
        defaultOptions: {
          queries: {
            onError: methodErrorHandler,
          },
          mutations: {
            onError: methodErrorHandler,
          },
        },
      },
      transformer: SuperJSON as any,
      links: [
        httpBatchLink({
          url,
        }),
      ],
    };
  },
});
