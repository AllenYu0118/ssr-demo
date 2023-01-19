<template>
  <div>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/asyncData">AsyncData</router-link>|


    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>
