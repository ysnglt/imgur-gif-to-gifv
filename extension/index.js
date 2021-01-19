// only fire on imgur GIF requests
const imgurGifFilter = {
  urls: ["https://i.imgur.com/*.gif"],
};

// redirect .gif to .gifv
const listener = (details) => {
  if (details.url.endsWith(".gif"))
    return {
      redirectUrl: details.url + "v",
    };
};

browser.webRequest.onBeforeRequest.addListener(listener, imgurGifFilter, [
  "blocking",
]);
