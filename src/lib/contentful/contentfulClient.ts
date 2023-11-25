import { createClient } from 'contentful';

const { CONTENTFUL_SPACE_ID, CONTENTFUL_API_KEY, CONTENTFUL_PREVIEW_API_KEY } = process.env;

/** Standard client fetches only published Content. */
const client = createClient({
  space: CONTENTFUL_SPACE_ID as string,
  accessToken: CONTENTFUL_API_KEY as string,
});

/** Preview client fetches draft and published Content. */
const previewClient = createClient({
  space: CONTENTFUL_SPACE_ID as string,
  accessToken: CONTENTFUL_PREVIEW_API_KEY as string,
  host: 'preview.contentful.com',
});

/**
 * Contentful client factory.
 * previewClient is used when previewing Content in the CMS.
 * @param {boolean} preview - Whether to use the preview client.
 */
export const contentfulClient = ({ preview = false }: { preview?: boolean }) => (preview ? previewClient : client);
