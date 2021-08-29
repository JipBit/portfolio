<template>
  <div class="bg-404-background h-screen w-full bg-cover uppercase font-semibold text-4xl text-center flex justify-between items-center">

    <div v-if="error.statusCode === 404">
      <h1>[4O4] Page not found</h1>
    </div>

    <div v-else-if="error.statusCode === 500">
      <h1>[500] Internal Server error</h1>
    </div>

    <div v-else>
      <h1>An error occurred</h1>
    </div>

    <NuxtLink to="/">🪐Home page🪐</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>