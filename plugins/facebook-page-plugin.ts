export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();

  const options = {
    appId: runtimeConfig.facebookAppId,
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v16.0',
  };

  window.fbAsyncInit = function () {
    window.FB.init(options);
    nuxtApp.provide('FB', window.FB);
    window.dispatchEvent(new Event('fb-sdk:ready'));
  };

  useHead({
    script: [
      {
        src: `https://connect.facebook.net/en_US/sdk.js`,
        async: true,
        defer: true,
        crossorigin: 'anonymous',
        nonce: 'o1IE3agO',
      },
    ],
  });
});
