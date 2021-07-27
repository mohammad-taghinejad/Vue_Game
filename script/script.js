new Vue({
    el: '#app',
    data: {
        title: 'فکر کردی میتونی ازم تخفیف بگیری ؟؟؟',
        damage: 100,
        goodImage: './img/1.jpg',
        badImage: './img/2.jpg',
        kick: 'C:/Users/Mohammad/Desktop/vue%20project/013/sound/PUNCH.mp3',
        finalKick: 'C:/Users/Mohammad/Desktop/vue%20project/013/sound/attack.mp3'
    },
    methods: {
        damageDown() {
            if (this.damage >= 0) {
                this.damage -= 20;
                this.title = 'تلاشتو بکن اما این منم که میبرم' + ' ' + this.damage + ' ' + 'درصد دیگه جون دارم هنوز' ;
            }
            if (this.damage == 0) {
                this.title = 'لعنتی، تو خیلی قوی ای  و منو بردی اینم کد تخفیفت Yalda1400';
            }
        },
        playSound(sound) {
            if (sound && this.damage >= 0) {
                let audio = new Audio(sound);
                audio.play();
            }
        }
    },
    computed: {

    },
    watch: {

    }

});