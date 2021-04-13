export const buildPathMatcher = (path: string) => {
  const pathParts = path.split('/').map(tryDecodeURIComponent);
  return (route: string) => {
    const routeParts = route.split('/').map(tryDecodeURIComponent);
    return routeParts.reduce((acc, routePart, index) => {
      let pathPart;
      if (index < pathParts.length) {
        pathPart = pathParts[index];
      } else {
        pathPart = pathParts[pathParts.length - 1];
      }
      return acc && (pathPart === '*' || pathPart === routePart);
    }, true);
  };
};

export const tryDecodeURIComponent = (component: string) => {
  try {
    return decodeURIComponent(component);
  } catch (_error) {
    return component;
  }
};
