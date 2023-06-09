export default defineNuxtRouteMiddleware(async (to) => {
  const supabase = useSupabaseClient();

  const { data, error } = await supabase.from('posts').select('is_active').eq('slug', to.params.slug).single();
  if (!to.query?.preview && !data?.is_active) return navigateTo('/404');
  if (error) return navigateTo('/404');
});
