<template>
    <div>
        <table class="table">
            <thead class="thead-light">
                <th>#</th>
                <th>Name</th>
                <th>Time-In</th>
                <th>Checks</th>
                <th>Time</th>
                <th>Add to Cutter</th>
            </thead>
            <tbody class="queue-body">
                <tr v-cloak v-for="(p, index) in onQueueRows" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ getQueueName(index) }}</td>
                    <td>{{ getTimeIn(index) }}</td>
                    <td>
                        <input type="checkbox" id="checkOne" />
                        <label for="checkOne">#1</label>
                        <input type="checkbox" id="checkTwo" />
                        <label for="checkTwo">#2</label>
                        <input type="checkbox" id="checkThree" />
                        <label for="checkThree">#3</label>
                    </td>
                    <td>
                        <input type="text" max="90" id="minInput" v-model="time" placeholder="min" />
                    </td>
                    <td>
                        <button type="button" @click="addToCutter(index, time)" class="btn">ADD</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        onQueueRows: {
            type: Array,
            required: true
        },
        timeInRows: {
            type: Array,
            required: true
        },
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
        time: Number
    },
    data() {
        return {

        }
    },
    methods: {
        getQueueName: function (index) {
            return this.onQueueRows[index];
        },
        getTimeIn: function (index) {
            return this.timeInRows[index];
        },
        addToCutter: function (index) {
            this.onCutterRows[this.onCutterRows.length] = this.onQueueRows[index];

            var now = new Date();
            this.timeOnRows[this.timeOnRows.length] = now.toLocaleTimeString();

            now.setMinutes(now.getMinutes() + parseInt(time));
            this.timeRows[this.timeRows.length] = now.toLocaleTimeString();

            this.onQueueRows.splice(index, 1);
            this.timeInRows.splice(index, 1);
            this.onCutterRows.splice();
        }
    },
    computed: {
        
    }
}
</script>
