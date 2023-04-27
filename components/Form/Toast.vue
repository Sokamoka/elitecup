<script lang="ts">
export const ToastPromise = createTemplatePromise<boolean, [string]>({
  transition: {
    name: 'fade',
    appear: true,
  },
});

export default {
  name: 'Toast',

  components: {
    ToastPromise,
  },

  props: {
    closeTimeout: {
      type: Number,
      default: 10000,
    },
  },

  setup(props) {
    return {
      onResolve: (resolve: (v: boolean) => void) => useTimeoutFn(() => resolve(true), props.closeTimeout),
    };
  },
};
</script>

<template>
  <ToastPromise v-slot="{ resolve, args }">
    <div class="fixed left-5 bottom-5 max-w-xs">
      <div
        :class="[
          'flex items-center justify-start p-4 gap-4 text-white font-bold rounded-lg shadow-lg',
          {
            'bg-green-500': args[1] === 'success' || args[1] === undefined,
            'bg-red-500': args[1] === 'error',
          },
        ]"
      >
        <div class="hidden">{{ onResolve(resolve) }}</div>

        <Icon
          :name="args[1] === 'success' ? 'ic:twotone-check-circle' : 'ic:twotone-error'"
          class="text-2xl shrink-0"
        />

        <span class="leading-5">{{ args[0] }}</span>

        <a
          href="#"
          @click.prevent="resolve(false)"
          :class="[
            'text-xl text-green-200 hover:text-white',
            {
              'text-green-200': args[1] === 'success' || args[1] === undefined,
              'text-red-200': args[1] === 'error',
            },
          ]"
        >
          <Icon name="ic:twotone-close" />
        </a>
      </div>
    </div>
  </ToastPromise>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
