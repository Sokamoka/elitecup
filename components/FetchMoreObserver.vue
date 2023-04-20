<script lang="ts">
const FetchMoreObserver = {
  name: 'FetchMoreObserver',

  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },

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
};
export default FetchMoreObserver;
</script>

<template>
  <div ref="target">
    <slot />
  </div>
</template>
