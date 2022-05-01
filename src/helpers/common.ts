export const getImage = (source: string) => {
  return new URL(`/src/assets/images/${source}`, import.meta.url).href;
};
