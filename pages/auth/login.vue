<script setup>
definePageMeta({
  layout: 'admin-fullwidth',
});

const user = useSupabaseUser();
const { auth } = useSupabaseAuthClient();

const credentials = reactive({
  email: '',
  password: '',
});

const signIn = async () => {
  const { data, error } = await auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password,
  });
  console.log(data, error);
};

watchEffect(() => {
  if (user.value) {
    navigateTo('/admin');
  }
});
</script>

<template>
  <div class="w-full sm:w-2/5 p-4 mx-auto mt-16 bg-white rounded-lg shadow-lg">
    <fieldset>
      <input type="text" v-model="credentials.email" />
    </fieldset>
    <fieldset>
      <input type="text" v-model="credentials.password" />
    </fieldset>
    <fieldset>
      <FormButton variant="primary" class="w-full" @click="signIn">Login</FormButton>
    </fieldset>
  </div>
</template>
