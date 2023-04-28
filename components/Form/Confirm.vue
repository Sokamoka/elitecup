<script lang="ts">
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
  },
};
</script>

<template>
  <ConfirmPromise v-slot="{ resolve, args }">
    <div class="relative z-50">
      <div class="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div class="fixed top-0 left-0 right-0">
        <div class="flex min-h-full justify-center p-4">
          <div class="flex items-center gap-4 p-4 w-full max-w-md rounded-lg text-white bg-slate-950">
            <Icon name="ic:twotone-new-releases" class="text-2xl shrink-0" />

            <div class="flex-1 font-bold leading-5">{{ args[0] ? args[0] : 'Are you sure?' }}</div>

            <a href="#" @click.prevent="resolve(true)" class="text-slate-200 hover:text-green-500 font-semibold">
              {{ args[1] ? args[1] : 'Yes' }}  
            </a>
            <a href="#" @click.prevent="resolve(false)" class="text-slate-400 hover:text-red-500 font-semibold">
              {{ args[2] ? args[2] : 'No' }}  
             </a>
          </div>
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
