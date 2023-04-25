<script setup>
definePageMeta({
  layout: 'admin-fullwidth',
});

const errorMessage = ref('');
const user = useSupabaseUser();
const { auth } = useSupabaseAuthClient();

const credentials = reactive({
  email: '',
  password: '',
});

const signIn = async () => {
  errorMessage.value = '';
  const { error } = await auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password,
  });
  if (error) errorMessage.value = error.message;
};

watchEffect(() => {
  if (user.value) {
    navigateTo('/admin');
  }
});
</script>

<template>
  <div class="w-full sm:max-w-sm p-4 mx-auto mt-16 bg-white rounded-lg shadow-lg">
    <h1 class="text-2xl font-bold mb-4">Login</h1>

    <form @submit.prevent="signIn" class="space-y-4">
      <fieldset>
        <label class="text-xs font-semibold uppercase" for="email">E-mail:</label>
        <FormInput id="email" v-model="credentials.email" required />
      </fieldset>
      <fieldset>
        <label class="text-xs font-semibold uppercase" for="password">Password:</label>
        <FormInput id="password" type="password" v-model="credentials.password" required />
      </fieldset>

      <div v-if="errorMessage" class="bg-red-100 border border-red-500 text-red-600 p-4 rounded-lg">
        {{ errorMessage }}
      </div>

      <fieldset>
        <FormButton type="submit" variant="primary" is-full-width>Login</FormButton>
      </fieldset>
    </form>
  </div>
</template>
