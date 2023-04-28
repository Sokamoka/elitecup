<script lang="ts">
import { OnClickOutside } from '@vueuse/components';

export const ConfirmPromise = createTemplatePromise<boolean, [string, string, string]>({
  transition: {
    name: 'modal-fade',
    appear: true,
  },
});

export default {
  name: 'Confirm',

  components: {
    ConfirmPromise,
    OnClickOutside,
  },
};
</script>

<template>
  <ConfirmPromise v-slot="{ resolve, args }">
    <div class="relative z-50">
      <div class="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

      <div class="fixed top-0 left-0 right-0">
        <div class="flex min-h-full justify-center p-4">
          <OnClickOutside class="w-full max-w-md" @trigger="resolve(false)">
            <div class="flex items-center gap-4 p-4 w-full max-w-md rounded-lg text-white bg-amber-500">
              <Icon name="ic:twotone-error" class="text-2xl shrink-0" />

              <div class="flex-1 font-bold leading-5">{{ args[0] ? args[0] : $t('admin.messages.sure') }}</div>

              <a href="#" @click.prevent="resolve(true)" class="text-amber-100 hover:text-white font-semibold">
                {{ args[1] ? args[1] : $t('admin.messages.yes') }}
              </a>
              <a href="#" @click.prevent="resolve(false)" class="text-yellow-300 hover:text-white font-semibold">
                {{ args[2] ? args[2] : $t('admin.messages.no') }}
              </a>
            </div>
          </OnClickOutside>
        </div>
      </div>
    </div>
  </ConfirmPromise>
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
