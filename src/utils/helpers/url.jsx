export const getRedirectURL = () => {
  // Access the current URL's search params
  const searchParams = new URLSearchParams(window.location.search);

  // Extract `redirect_uri` from query params
  const redirectUri = searchParams.get("redirect_uri");

  // Get the pathname from where the user came (can default to "/" if no referrer)
  const from = document.referrer ? new URL(document.referrer).pathname : "/";

  // If `redirect_uri` is present, use it; otherwise, use the `from` value
  return redirectUri || from;
};

export const buildURL = (path) => {
  const redirectUri = getRedirectURL();

  const url = `/${path}${
    redirectUri ? `?redirect_uri=${encodeURIComponent(redirectUri)}` : ""
  }`;

  return url;
};
