<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
  export default {
    name:'HelloWorld',
    // components: {
    //   HelloWorld
    // }
    props: {
      msg:String
    }
  }
</script>

<style scoped ></style>