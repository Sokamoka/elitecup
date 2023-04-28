<script lang="ts">
import { OnClickOutside } from '@vueuse/components'

export const ModalPromise = createTemplatePromise<boolean, [string]>({
  transition: {
    name: 'modal-fade',
    appear: true,
  },
});

export default {
  name: 'Modal',

  components: {
    ModalPromise,
    OnClickOutside,
  },
};
</script>

<template>
  <ModalPromise v-slot="{ resolve, args }">
    <div class="relative z-50">
      <div class="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4">
          <OnClickOutside class="w-full max-w-md" @trigger="resolve(false)">
            <div class="w-full max-w-md rounded-lg bg-white">
              <div class="flex items-center p-4 bg-slate-200 rounded-t-lg">
                <h1 class="flex-1 text-xl text-slate-700 font-bold">{{ args[0] }}</h1>
                <a href="#" @click.prevent="resolve(false)" class="text-xl text-slate-500 hover:text-red-500">
                  <Icon name="ic:twotone-close" />
                </a>
              </div>

              <slot :resolve="resolve" :args="args" />
            </div>
          </OnClickOutside>
        </div>
      </div>
    </div>
  </ModalPromise>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
