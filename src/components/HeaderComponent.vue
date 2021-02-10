<template>
    <header class="flex justify-center items-center">
      <ul class="flex">
        <li class='mr-4'>
          <router-link to="/">Home</router-link>
        </li>
        <li class='mr-4'>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/board">Board</router-link>
        </li>
      </ul>
    </header>
  </template>
  
  <style scoped>
  header {
    width: 100%;
    height: 50px;
    background-color: #2e1399;
    color: #64ffcd;
  }
  </style>
  