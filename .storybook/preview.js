import { DocsPage } from 'storybook-addon-deps/blocks';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { page: DocsPage },
  dependencies: { withStoriesOnly: true, hideEmpty: true }
}
