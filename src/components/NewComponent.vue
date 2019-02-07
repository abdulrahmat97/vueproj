<template>
    <div>
        Ini Component {{ data1 }}
        <slot name="hello"></slot>
    </div>
</template>

<script>
export default {
props:{
  data1:{
      default:'oooiii'
  }                             
}
}
</script>

<style>

</style>
