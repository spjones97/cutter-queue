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
        firstName: String,
        lastName: String,
        onQueueRows: {
            type: Array,
            required: true
        },
        timeInRows: {
            type: Array,
            required: true
        }
    },
    methods: {
        addToQueue: function (first, last) {
            var name = first + " " + last;
            this.onQueueRows[this.onQueueRows.length] = name;

            var today = new Date();
            this.timeInRows[this.timeInRows.length] = today.toLocaleTimeString();
            this.onQueueRows.splice();
            this.timeInRows.splice();
        }
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
