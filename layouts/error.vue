<template>
  <div class="text-center flex h-screen justify-center items-center">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else-if="error.statusCode === 500">Internal Server error</h1>
    <h1 v-else>An error occurred</h1>
    <img src="../assets/404.svg" alt="error">
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>