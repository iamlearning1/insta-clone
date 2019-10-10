<template>
  <div id="container">
    <slot></slot>
  </div>
</template>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  background: white;
  align-items: center;
  justify-content: center;
  width: 20%;
  margin: 0 auto;
  margin-bottom: 30px;
}
</style>