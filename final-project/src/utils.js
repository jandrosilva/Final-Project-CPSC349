export const getImageUrl = (path) => {
  if (import.meta.env.PROD) {
    return `/assets/${path}`; // Production path
  }
  return `/assets/${path}`; // Same for development
};

  console.log("import.meta.url:", import.meta.url);