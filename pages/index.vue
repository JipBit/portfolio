<template>
    <div class="lg:flex items-center justify-center h-screen">

        <div class="mr-48">
            <img class="rounded-md w-48 h-48" src="~/static/profile.png" alt="profile picture">

            <h1 class="text-6xl mt-6 font-black">Hi, I'm Jeez.</h1>
            <h2 class="text-xl font-semibold">front-end developer • ui/ux designer</h2>

            <div class="max-w-sm mt-6">
                <p>I like to examine space and time while I make cool ideas come to life. I'm currently a front-end developer at <a class="text-blue-500" href="https://hostsapling.net" target="_blank" rel="noopener noreferrer">Hostsapling</a> & <a class="text-blue-500" href="https://nationalknightsleague.com" target="_blank" rel="noopener noreferrer">National Knights League</a>.</p>
                <br>
                <p>I also enjoy socializing and working with others. Feel free to contact or check me out below.</p>
            </div>

            <div class="flex space-x-3 mt-4">
                <a href="https://github.com/JipBit">
                    <svg class="h-6 w-6 text-white fill-current hover:text-gray-500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
                <a href="https://discordapp.com/users/386221431416946698/">
                    <svg class="h-6 w-6 text-white fill-current hover:text-gray-500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
                </a>
            </div>
        </div>

        <div class="mt-8">
            <h1 class="text-4xl font-semibold">BLOG</h1>
            <div v-for="article of articles" :key="article">
                <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                    <div class="bg-[#222533] max-w-xl p-6 rounded-md mt-4 flex">
                        <div class="mr-8">
                            <h1 class="font-semibold text-2xl">{{ article.title }}</h1>
                            <span class="text-[#595C69]">{{ formatDate(article.createdAt) }}</span>
                            <p class="mt-2">{{ article.description }}</p>
                        </div>
                        <img class="w-32 h-auto rounded-md" src="https://picsum.photos/536/354" alt="article image">
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .sortBy("createdAt", "asc")
      .only(["title", "description", "img", "slug", "createdAt"])
      .fetch();

    return { articles };
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style>
body{
    @apply text-white bg-[#141621] font-poppins;
}
</style>