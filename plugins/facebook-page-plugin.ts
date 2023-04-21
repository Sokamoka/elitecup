export default defineNuxtPlugin(nuxtApp => {
    if (process.client) {
      const pagePluginCode = `
        <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0&appId=987558575564332&autoLogAppEvents=1" nonce="wK8YM8z6"></script>
        
        <div class="fb-page" 
          data-href="https://www.facebook.com/elitecup" 
          data-tabs="timeline" 
          data-width="500" 
          data-height="600" 
          data-small-header="false" 
          data-adapt-container-width="true" 
          data-hide-cover="false" 
          data-show-facepile="true"
          data-cta="false"
          data-embed-as="page"
          data-show-posts="true"
        >
          <blockquote cite="https://www.facebook.com/elitecup" class="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/elitecup">Elitecup</a>
          </blockquote>
        </div>
        
      `
      nuxtApp.pagePluginCode = pagePluginCode

      return {
        provide: {
          pagePluginCode: pagePluginCode
        }
      }
    }
  
})
