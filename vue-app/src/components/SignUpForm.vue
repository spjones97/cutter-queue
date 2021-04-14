<template>
    <div class="sign-container">
        <form v-cloak class="m-3">
            <div class="form-row">
                <div class="col">
                    <input class="first-in" type="text" v-model="firstName" placeholder="First Name" />
                </div>
                <div class="col">
                    <input class="last-in" type="text" v-model="lastName" placeholder="Last Name" />
                </div>
                <div class="col">
                    <button
                        class="btn"
                        type="button"
                        @click="addToQueue(firstName, lastName)"
                        id="queue-btn">
                        ADD
                    </button>
                </div>
            </div>
        </form>
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
        }
    },
    data() {
        return {
            firstName: String,
            lastName: String,
            queue: this.onQueueRows,
            times: this.timeInRows
        }
    },
    methods: {
        addToQueue: function (first, last) {
            var name = first + " " + last;
            this.queue[this.queue.length] = name;

            var today = new Date();
            this.times[this.times.length] = today.toLocaleTimeString();
            this.queue.splice();
            this.times.splice();
        }
    },
    computed: {

    }
}
</script>

<style>
.sign-container {
    display: flex;
    justify-content: space-around;
}

.first-in, .last-in {
    width: 25vw;
}
</style>
