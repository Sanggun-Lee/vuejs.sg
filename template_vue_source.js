new Vue({
    el: '#app',
    data: {
        idA: 110,
        classA: 'container',
        styleA: 'color: red'
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        message: "computed한거라 캐싱이 되고 있을걸",
        uid: 10
    },
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('');     //<!--자바스크립트단-->
        }
    },
    methods: {
        reverseMsg: function() {
            this.message = this.message.split('').reverse().join('');     //this.message = 이걸로 만들어야 함.
            console.log("뒤집었다!");
            return this.message;
        }
    }
});

new Vue({
    el: "#app3",
    data: {
        flag: true,
        flag2: true,
        systems: ['android', 'ios', 'window'],
        uid: 10
    },
    methods: {
        popupAlert: function() {
            console.log("경고창 눌렀습니다.");
            return alert('경고 창 표시 잘 나옵니까');
        }
    }
});

new Vue({
    el: "#app4",
    data: {
        message: "HI"
    },
    watch: {
        message: function(data) {
            console.log("watch가 감시하면서 데이터가 바뀔때마다 써줘요: ", data);
        }
    }
})