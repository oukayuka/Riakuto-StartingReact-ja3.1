/* eslint-disable import/prefer-default-export */
import { Options, NormalizedOptions } from 'ky';
import camelcaseKeys from 'camelcase-keys';

export const DEFAULT_API_OPTIONS: Options = {
  prefixUrl: 'https://api.github.com',
  timeout: 7000,
  retry: 0,
  hooks: {
    afterResponse: [
      async (
        _request: Request,
        _options: NormalizedOptions,
        response: Response,
      ): Promise<Response> => {
        const body = new Blob(
          [JSON.stringify(camelcaseKeys(await response.json()), null, 2)],
          { type: 'application/json' },
        );
        const { headers, status, statusText } = response;
        const init = { headers, status, statusText };

        return new Response(body, init);
      },
    ],
  },
};
