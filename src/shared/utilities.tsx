export const isDevEnvironment = () => {
  return process.env.NODE_ENV === 'development';
}

export function devEntry<T>(data?: T) {
  return isDevEnvironment() ? data : undefined;
}

// window.matchMedia("(min-width: 400px)").matches
export const checkMediaQuery = (query = '') => window.matchMedia(`(${query})`).matches;

export const checkIsMobile = () => window.matchMedia('(max-width: 767px)').matches;

export const checkIsTablet = () => window.matchMedia('(min-width: 768px) and (max-width: 991px)').matches;

export const checkIsDesktop = () => window.matchMedia('(min-width: 992px)').matches;

export const formatExpiryCaption = (expiryDate?: Date): string => {
  if (!expiryDate) {
    return "";
  }

  return 'Valid for the next 12 hours';
}