import { QuillEditor, Quill } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('QuillEditor', QuillEditor);
  console.dir(Quill);
  // nuxtApp.provide('$quill', Quill);

  // return {
  //   provide: {
  //     // $quill: (content: string) => Quill.setContent(content),
  //     $quill: () => new Quill(),
  //   },
  // };
});
