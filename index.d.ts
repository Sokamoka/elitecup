import type { CreateComponentPublicInstance } from 'vue';
import type { Composer } from 'vue-i18n';

declare global {
  interface Window {
    fbAsyncInit: any;
    FB: any;
  }
  namespace NodeJS {
    interface ProcessEnv {
      SUPABASE_URL: string;
      SUPABASE_KEY: string;
    }
  }
  interface CreateComponentPublicInstance {
    $t: Composer<A, B, C, D, E>['t'];
    $d: Composer<A, B, C, D, E>['d'];
    $tm: Composer<A, B, C, D, E>['tm'];
    $rt: Composer<A, B, C, D, E>['rt'];
  }
}

export {};
