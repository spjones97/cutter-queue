<template>
    <div>
        <h3 v-cloak v-if="1 == 1/* this.cutter.length > 0 */" class="cutter-header">
            On Cutter
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
        },
        data() {
            return {
                cutter: this.onCutterRows
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
