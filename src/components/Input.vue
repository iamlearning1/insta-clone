<template>
  <input type="text" :placeholder="placeholder" class="form-control" />
</template>

<script>
export default {
  props: {
    placeholder: String
  }
};
</script>

<style scoped>
input {
  width: 18em;
  margin: 5px;
}
</style>