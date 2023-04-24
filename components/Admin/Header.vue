<script setup lang="ts">
const user = useSupabaseUser();
const client = useSupabaseClient();

const signOut = async () => {
  const { error } = await client.auth.signOut();
  console.log(error);
  await navigateTo('/');
};
</script>

<template>
  <div class="flex h-14 bg-white shadow-sm shadow-slate-500 items-center px-4">
    <div class="flex-1">
      <NuxtLink to="/admin" class="font-bold text-xl">Elite Cup Admin</NuxtLink>

      <NuxtLink to="/" v-slot="{ navigate }" custom>
        <FormButton variant="link" class="text-sm" @click="navigate"> Back to Main page </FormButton>
      </NuxtLink>
    </div>
    <FormButton variant="outlined" v-if="user" @click="signOut">Sign Out</FormButton>
  </div>
</template>
