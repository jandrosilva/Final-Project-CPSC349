const images = import.meta.glob('./assets/**/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default'
});

export const getImageUrl = (path) => {
  return images[`./assets/${path}`];
};