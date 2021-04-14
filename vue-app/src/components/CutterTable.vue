<template>
    <div>
        <table v-cloak v-if="onCutter.length > 0" class="table">
            <thead class="thead-light">
                <th>#</th>
                <th>Name</th>
                <th>Start Time</th>
                <th>Expected End Time</th>
                <th>Remove</th>
            </thead>
            <tbody class="cutter-body">
                <tr v-cloak v-for="(p, index) in onCutterRows" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ getCutterName(index) }}</td>
                    <td>{{ getTimeOn(index) }}</td>
                    <td id="timer">{{ getTime(index) }}</td>
                    <td>
                        <button type="button" @click="removeCutter(index)" class="btn btn-warning">REMOVE</button>
                    </td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: {
            onCutterRows: {
                type: Array,
                required: true
            },
            timeOnRows: {
                type: Array,
                required: true
            },
            timeRows: {
                type: Array,
                required: true
            },
            cutTimeRows: {
                type: Array,
                required: true
            }
        },
        data() {
            return {

            }
        },
        methods: {
            getCutterName: function (index) {
                return this.onCutterRows[index];
            },
            getTimeOn: function (index) {
                return this.timeOnRows[index];
            },
            getTime: function (index) {
                return this.timeRows[index];
            },
            removeCutter: function (index) {
                this.timeOnRows.splice(index, 1);
                this.timeOnRows.splice(index, 1);
                this.cutTimeRows.splice(index, 1);
                this.timeRows.splice(index, 1);
            }
        },
        computed: {
            
        }
    }
</script>

<style>
.cutter-body {
    outline: solid red;
}
</style>
