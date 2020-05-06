new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja',
        name: 'Tippen'
    },
    methods: {
        greet() {
        return 'VIF er best! ${this.name}'
        }
    }
})