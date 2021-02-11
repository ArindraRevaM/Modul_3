Vue.component('showform', {
    template: '#show-form',
    data(){
        return {
            data: { judul: '', sutradara: '', genre: ''}
        }
    },
    methods: {
        simpan: function() {
            this.$emit('send-data', this.data);
            this.data.judul = "";
            this.data.sutradara = "";
            this.data.genre = "";
        }
    }
})

Vue.component('showdata', {
    template: '#show-data',
    props: ['data']
})

var app = new Vue({
    el: '#app',
    data: {
        biodata: {}
    },
    methods: {
        getData: function (value) {
            this.biodata = {
                judul : value.judul,
                sutradara : value.sutradara,
                genre : value.genre
            }
        }
    }
})
