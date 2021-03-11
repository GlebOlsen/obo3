Vue.createApp({
    data() {
        return {
            string: null,
            list: [],
            message: null
        }
    },
    methods: {
        addTo(string){
            this.list = []
            this.list.push(this.string)
            this.list.push(this.string.toLowerCase())
            this.list.push(this.string.toUpperCase())
        }
    }
}).mount("#app")