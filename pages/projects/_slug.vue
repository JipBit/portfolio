<template>
    <article>
        <nuxt-content :document="article" class="hidden"/>
    </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },
};
</script>

<style>
body{
    @apply text-white bg-[#141621] font-poppins;
}
</style>