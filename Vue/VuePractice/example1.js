var vm1 = new Vue({

    el: '#app1',
    data: {
        title: 'Instanca Vue JS !',
        showParagraph: false
    },

    methods: {
        show: function () {
            this.showParagraph = true;
            this.updateTitle('Instanca Vue apdejtovana !');
            this.$refs.myButton.innerText = 'Test (bivsi show paragraph)';
        },
        updateTitle: function (title) {
            this.title = title;
        }
    },

    computed: {
        lowerCaseTitle: function () {
            return this.title.toLowerCase();
        }
    },

    watch: {
        title: function (value) {
            alert('Title changed, new value is: ' + value);
        }
    }

});
//----------------------------------------
vm1.$refs.heading.innerText = 'Something different !';

vm1.$mount('#app1');

setTimeout(function () {
    vm1.title = "Change by timer";
    vm1.show();
}, 3000);



//----------------------------------------
var vm2 = new Vue({

    el: '#app2',
    data: {
        title: 'Instanca2 Vue JS !',
        showParagraph: false
    },

    methods: {
        onChange: function () {
            vm1.title = 'Promena naslova (iz vm2) !';
        },
        show: function () {
            this.showParagraph = true;
            this.updateTitle('Instanca br2 Vue apdejtovana !');
        },
        updateTitle: function (title) {
            this.title = title;
        }
    },

    computed: {
        lowerCaseTitle: function () {
            return this.title.toLowerCase();
        }
    },

    watch: {
        title: function (value) {
            alert('Title changed, new value is: ' + value);
        }
    }

});

var vm3 = new Vue({

    template: '<h1 class=\"demo3\">Helloooo!!!</h1>'
});

vm3.$mount('#app3');
/*  A moze i ovako preko DOM-a
vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);
*/