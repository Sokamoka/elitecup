<script setup lang="ts">
const route = useRoute();

const id = route.params.id;

const state = reactive({
  title: '',
  slug: '',
  lead: '',
  content: '',
  locale: 'hu',
});

async function save() {
  console.log(id);
  // const payload = convertPostPayload(id, state);
  
  // supabase upsert
  // const { error } = await client.from('posts').upsert(payload).select().single();

  // if (error) {
  //   ToastPromise.start(useDBError(error, 'video', t), 'error');
  //   return;
  // }
}
</script>
<template>
  <div class="py-8">
    <div class="flex gap-2 items-center mb-4">
      <h1 class="flex-1 text-xl text-slate-700 font-bold uppercase">
        {{ $t('admin.title.news') }}
      </h1>

      <FormButton variant="primary" size="sm">
        {{ $t('admin.common.publish') }}
      </FormButton>
      <FormButton variant="secondary" size="sm" @click="save">
        {{ $t('admin.common.save') }}
      </FormButton>
    </div>

    <div class="flex flex-col gap-4 rounded-lg bg-white shadow-sm p-4 w-full">
      <fieldset>
        <label class="text-xs font-semibold uppercase" for="locale">Locale</label>
        <FormInput id="locale" v-model="state.locale" :has-error="false" />
      </fieldset>

      <hr />

      <fieldset>
        <label class="text-xs font-semibold uppercase" for="title">Title</label>
        <FormInput id="title" :has-error="false" />
        <!-- <p v-if="v$.password.$error" class="form-error">
            {{ v$.password.$errors[0].$message }}
          </p> -->
      </fieldset>

      <fieldset>
        <label class="text-xs font-semibold uppercase" for="lead">Lead</label>
        <!-- <FormInput id="lead" :has-error="false" /> -->
        <FormEditor v-model="state.lead" />
      </fieldset>

      <fieldset>
        <label class="text-xs font-semibold uppercase">Content</label>
        <!-- <QuillEditor theme="snow" v-model:content="state.content" /> -->
        <FormEditor v-model="state.content" :height="400" />
      </fieldset>
      <fieldset>
        <label class="text-xs font-semibold uppercase" for="slug">Slug</label>
        <FormInput id="slug" :has-error="false" />
      </fieldset>
    </div>
  </div>
</template>
