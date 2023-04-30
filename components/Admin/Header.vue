<script setup lang="ts">
const user = useSupabaseUser();
const client = useSupabaseClient();

const { locale: currentLocale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();

const signOut = async () => {
  await client.auth.signOut();
  await navigateTo('/');
};
</script>

<template>
  <div class="flex h-14 bg-white shadow-sm shadow-slate-500 items-center px-4">
    <div class="flex-1 flex gap-x-2 items-center">
      <NuxtLink :to="localePath('/admin')" class="font-bold text-xl">Elite Cup Admin</NuxtLink>

      <div>
        <NuxtLink
          v-for="locale in locales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          :class="['ml-1 uppercase text-xs', { 'font-bold text-slate-900': locale.code === currentLocale }]"
        >
          {{ locale.code }}
        </NuxtLink>
      </div>

      <NuxtLink to="/" v-slot="{ navigate }" custom>
        <FormButton variant="link" class="text-sm" @click="navigate"> Back to Main page </FormButton>
      </NuxtLink>
    </div>
    <FormButton v-if="user" variant="outlined" class="text-sm"  @click="signOut">Sign Out</FormButton>
  </div>
</template>
