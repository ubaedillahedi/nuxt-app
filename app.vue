<template>
  <div class="min-h-screen w-screen bg-slate-900 text-gray-100">
    <div>
      <div class="text-3xl font-bold">Nuxt Blog</div>
      <div class="text-sm font-light font-mono flex space-x-4">
        <!-- <NuxtLink :to="{ name: 'home' }"/> -->
        <NuxtLink class="hover:text-blue-500 hover:underline" to="/">Home</NuxtLink>
        <NuxtLink class="hover:text-blue-500 hover:underline" :to="{name: 'about'}">About</NuxtLink>
        <NuxtLink class="hover:text-blue-500 hover:underline" :to="{name: 'contact'}">Contact</NuxtLink>
      </div>
    </div>
    <NuxtPage/>
  </div>
</template>
