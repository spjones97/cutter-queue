<template>
    <div>
        <h3 v-cloak v-if="onCutterRows.length > 0" class="cutter-header">
            <slot></slot>
        </h3>
    </div>
</template>

<script>
    export default {
        props: {
            onCutterRows: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
.cutter-header {
  background-color: red;
  color: white;
  margin-bottom: 0;
  text-align: center;
}
</style>
