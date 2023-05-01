<script lang="ts">
export default defineComponent({
  name: 'FetchMoreObserver',

  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },

  emits: ['intersect'],

  setup(props, { emit }) {
    const target = ref(null);

    const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting }]) => {
        if (isIntersecting) emit('intersect');
      },
      props.options
    );

    onUnmounted(stop);

    return {
      target,
    };
  },
});
</script>

<template>
  <div ref="target">
    <slot />
  </div>
</template>
