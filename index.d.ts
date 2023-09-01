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
}

export {};
