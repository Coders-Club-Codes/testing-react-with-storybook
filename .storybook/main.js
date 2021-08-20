module.exports = {
  "stories": [
    { directory: '../src/components', files: 'stories.ts(x)?' }
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  features: {
    previewCsfV3: true,
  }
}
