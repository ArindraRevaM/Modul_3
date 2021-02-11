Vue.component('showform', {
    template: '#show-form',
    data(){
        return {
            data: { nama: '', alamat : '', email: ''}
        }
    },
    methods: {
        simpan: function() {
            this.$emit('send-data', this.data);
            this.data.nama = "";
            this.data.alamat = "";
            this.data.email = "";
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
                nama : value.nama,
                alamat : value.alamat,
                email : value.email
            }
        }
    }
})
