export const stringifyOptions = (options: { [key: string]: string }) => {
  return Object.keys(options)
    .map((key) => {
      const prefix = key.length === 1 ? '-' : '--';
      return `${prefix}${key} ${options[key]}`;
    })
    .join(' ');
};
