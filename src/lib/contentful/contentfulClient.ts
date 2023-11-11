import { createClient } from 'contentful';

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_PREVIEW_ACCESS_TOKEN } = process.env;

/** Standard client fetches only published Content. */
const client = createClient({
  space: CONTENTFUL_SPACE_ID as string,
  accessToken: CONTENTFUL_ACCESS_TOKEN as string,
});

/** Preview client fetches draft and published Content. */
const previewClient = createClient({
  space: CONTENTFUL_SPACE_ID as string,
  accessToken: CONTENTFUL_PREVIEW_ACCESS_TOKEN as string,
  host: 'preview.contentful.com',
});

/**
 * Contentful client factory.
 * previewClient is used when previewing Content in the CMS.
 * @param {boolean} preview - Whether to use the preview client.
 */
export const contentfulClient = (preview: boolean) => (preview ? previewClient : client);
