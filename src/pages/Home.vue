<template>
  <q-page>
    <div >
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="/images/slider1.jpg">
          <div class="overlay-container">
            <div class="text-overlay">
              <p class="text-bold text-h6">
                Kombinizin Performansını Artırın!
              </p>
              <p class="text-body1">
                Düzenli bakım ile kombinizden maksimum verim alın.
              </p>
            </div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="2" img-src="/images/slider2.jpg">
          <div class="overlay-container">
            <div class="text-overlay">
              <p class="text-bold text-h6">
                Sıcak Bir Kış İçin Peteklerinizi Temizletin!
              </p>
              <p class="text-body1">
                Zamanında bakım ile ısınma sorunlarına veda edin.
              </p>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>

      <div class="q-mt-lg" align="center">
        <q-card
          class="my-card text-white"
          style="
            background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
            width: 350px;
          "
          :style="cardStyle"
        >
          <q-card-section>
            <div class="text-h5"><strong>CELEP KOMBİ SERVİSİ</strong></div>
            <p class="text-body1 q-mt-md"><strong>Kombi Bakım/Onarımı ve Petek Temizliği İçin Bize Ulaşın</strong></p>
            <q-chip
              square
              class="q-mt-sm cursor-pointer"
              color="deep-orange"
              text-color="white"
              clickable
              @click="callPhone"
              icon="call"
              size="lg"
            >
              0539 667 63 53
            </q-chip>
          </q-card-section>
        </q-card>
      </div>

      <div></div>

      <div class="q-mt-xl custom-container">
        <div class="row">
          <div class="col-12 col-sm-4 q-mb-md" align="center">
            <q-img
            
              src="images/img5.jpg"
              style="max-width: 400px; max-height: 250px"
            />
          </div>
          <div class="col-12 col-sm-1 q-pa-none"></div>
          <div class="col-12 col-sm-7 q-pa-none">
            <p class="text-h5 text-bold text-grey-8 q-px-sm">
              Petek Temizliği Nedir ve Neden Önemlidir?
            </p>
            <p
              class="text-grey-8 text-justify q-px-sm"
              style="font-size: large"
            >
              <strong>Petek temizliği</strong>, kombi ve radyatör sistemlerinin
              verimli çalışması için yapılan düzenli bir bakım işlemidir.
              Zamanla peteklerin içerisinde kireç, tortu ve çamur gibi
              kalıntılar birikir. Bu birikintiler, ısının düzgün dağılmasını
              engelleyerek hem enerji israfına hem de ısınma problemlerine yol
              açar. Düzenli <strong>petek temizliği</strong> ile hem enerji
              tasarrufu sağlanır hem de kombi sisteminizin ömrü uzar.
            </p>
          </div>
        </div>
      </div>
    </div>
    <h6 align="center" class="text-bold text-grey-8 q-ma-none">
      NELER YAPIYORUZ?
    </h6>

    <div class="custom-container">
      <div class="row flex flex-center">
        <div class="col-12 col-sm-4 q-pa-md">
          <q-card class="my-card no-shadow">
      <q-img src="images/img2.jpg">
        <div class="absolute-bottom text-h6">
          Kombi Arıza
        </div>
      </q-img>

      <q-card-section class="q-px-none">
        <div class="text-justify text-grey-9 text-body1">
            <strong>Kombi arızaları</strong>, özellikle soğuk havalarda günlük
            yaşamı olumsuz etkileyen sorunlardan biridir. Bu tür arızalar
            genellikle kullanım hataları, düzenli bakım yapılmaması veya teknik
            parçaların yıpranması gibi nedenlerle ortaya çıkar.
          </div>
      </q-card-section>
    </q-card>
        </div>
        <div class="col-12 col-sm-4 q-pa-md">
          <q-card class="my-card no-shadow">
      <q-img src="images/img1.jpg">
        <div class="absolute-bottom text-h6">
          Kombi Bakımı
        </div>
      </q-img>

      <q-card-section class="q-px-none">
        <div class="text-justify text-grey-9 text-body1">
            <strong>Kombi bakımı</strong>, evinizin ısınma ve sıcak su
            ihtiyacını karşılayan en önemli cihazlardan biri olan kombinizin
            verimli ve uzun ömürlü çalışmasını sağlamak için gereklidir. Düzenli
            kombi bakımı, enerji tasarrufu sağlamanın yanı sıra güvenliğinizi de
            artırır.
          </div>
      </q-card-section>
    </q-card>
        </div>
        <div class="col-12 col-sm-4 q-pa-md">
          <q-card class="my-card no-shadow">
      <q-img src="images/img3.jpg">
        <div class="absolute-bottom text-h6">
          Petek Temizliği
        </div>
      </q-img>

      <q-card-section class="q-px-none">
        <div class="text-justify text-grey-9 text-body1">
            <strong>Petek temizliği</strong>, kalorifer sistemlerinin daha verimli çalışmasını
            sağlamak ve enerji tasarrufu yapmak için yapılan önemli bir bakım
            işlemidir. Peteklerin içinde biriken kireç, tortu ve çamur
            gibi maddeler ısı iletimini engelleyerek ısınmayı azaltır.
          </div>
      </q-card-section>
    </q-card>
        </div>
       
      </div>
    </div>





    <!-- <div class="custom-container">
      <div class="row flex flex-center">
        <div class="col-12 col-md-4 q-pa-md">
          <q-img src="images/img3.jpg">
            <div class="text-subtitle2 flex flex-center">
              <strong>PETEK TEMİZLİĞİ</strong>
            </div>
          </q-img>
          <div class="text-h6 text-grey-9 q-mt-md flex flex-center">
            <strong>PETEK TEMİZLİĞİ</strong>
          </div>
          <div class="text-justify text-grey-9 text-body1">
            <strong>Petek temizliği</strong>, kalorifer sistemlerinin daha verimli çalışmasını
            sağlamak ve enerji tasarrufu yapmak için yapılan önemli bir bakım
            işlemidir. Zamanla peteklerin içinde biriken kireç, tortu ve çamur
            gibi maddeler ısı iletimini engelleyerek ısınma sorunlarına yol
            açar.
          </div>
        </div>
        <div class="col-12 col-md-4 q-pa-md">
          <q-img src="images/img1.jpg">
            <div class="text-subtitle2 flex flex-center">
              <strong>KOMBİ BAKIMI</strong>
            </div>
          </q-img>
          <div class="text-h6 text-grey-9 q-mt-md flex flex-center">
            <strong>KOMBİ BAKIMI</strong>
          </div>
          <div class="text-justify text-grey-9 text-body1">
            <strong>Kombi bakımı</strong>, evinizin ısınma ve sıcak su
            ihtiyacını karşılayan en önemli cihazlardan biri olan kombinizin
            verimli ve uzun ömürlü çalışmasını sağlamak için gereklidir. Düzenli
            kombi bakımı, enerji tasarrufu sağlamanın yanı sıra güvenliğinizi de
            artırır.
          </div>
        </div>
        <div class="col-12 col-md-4 q-pa-md">
          <q-img src="images/img2.jpg">
            <div class="text-h6 text-subtitle2 flex flex-center">
              <strong>KOMBİ ARIZASI</strong>
            </div>
          </q-img>
          <div class="text-h6 text-grey-9 q-mt-md flex flex-center">
            <strong>KOMBİ ARIZASI</strong>
          </div>
          <div class="text-justify text-grey-9 text-body1">
            <strong>Kombi arızaları</strong>, özellikle soğuk havalarda günlük
            yaşamı olumsuz etkileyen sorunlardan biridir. Bu tür arızalar
            genellikle kullanım hataları, düzenli bakım yapılmaması veya teknik
            parçaların yıpranması gibi nedenlerle ortaya çıkar.
          </div>
        </div>
       
      </div>
    </div> -->

    <!-- <div class="custom-container">
      <div class="row flex flex-center">
        <div class="col-12 col-md-4 q-pa-md">
          <q-img src="images/img1.jpg">
            <div class="text-subtitle2 flex flex-center">
              <strong>KOMBİ BAKIMI</strong>
            </div>
          </q-img>
        </div>
        <div class="col-12 col-md-4 q-pa-md">
          <q-img src="images/img2.jpg">
            <div class="text-subtitle2 flex flex-center">
              <strong>KOMBİ ARIZASI</strong>
            </div>
          </q-img>
        </div>
        <div class="col-12 col-md-4 q-pa-md">
          <q-img src="images/img3.jpg">
            <div class="text-subtitle2 flex flex-center">
              <strong>PETEK TEMİZLİĞİ</strong>
            </div>
          </q-img>
        </div>
      </div>
    </div> -->
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";

const slide = ref(1);
const autoplay = ref(true);

const cardStyle = ref({
  transform: "translate(0px, 0px)",
});

const handleMouseMove = (event) => {
  const card = event.currentTarget;
  const cardRect = card.getBoundingClientRect();
  const centerX = cardRect.left + cardRect.width / 2;
  const centerY = cardRect.top + cardRect.height / 2;

  const deltaX = (event.clientX - centerX) / 15;
  const deltaY = (event.clientY - centerY) / 15;

  cardStyle.value = {
    transform: `translate(${deltaX}px, ${deltaY}px)`,
  };
};

const resetPosition = () => {
  cardStyle.value = {
    transform: "translate(0px, 0px)",
  };
};

const callPhone = () => {
  window.location.href = "tel:05396676353";
};
</script>

<style scoped>
.custom-container {
  margin-left: 200px;
  margin-right: 200px;
}
.overlay-container {
  position: relative;
  height: 100%;
  width: 100%;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 5%;
  width: 40%; /* Sol tarafın genişliği */
  height: 50%;
  background-color: rgba(76, 74, 74, 0.5); /* %70 şeffaf siyah arka plan */
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Metni dikey ortala */
  padding: 20px; /* Metin kenar boşluğu */
  box-sizing: border-box;
}

.my-card {
  transition: transform 0.1s ease-out;
  will-change: transform;
}

.hover-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}
/* Mobil ekranlarda (max-width: 768px) metni alt tarafa yerleştir */
@media (max-width: 1300px) {
  .custom-container {
    margin-left: 100px;
    margin-right: 100px;
  }
}
@media (max-width: 1000px) {
  .custom-container {
    margin-left: 20px;
    margin-right: 20px;
  }
}

@media (max-width: 600px) {
  .custom-container {
    margin-left: 10px;
    margin-right: 10px;
  }
}
.card-image {
  max-width: 150px;
}
.column {
  flex-direction: column;
}
@media (max-width: 768px) {
  .text-overlay {
    width: 100%; /* Tam genişlik */
    height: 40%; /* Alt kısmın yüksekliği */
    top: auto;
    bottom: 10%; /* Alt kısma yerleştir */
    left: 0;
    justify-content: flex-end; /* Metni alt kısma hizala */
  }
}

@media (max-width: 520px) {
  .text-overlay {
    width: 100%; /* Tam genişlik */
    height: 60%; /* Alt kısmın yüksekliği */
    top: auto;
    bottom: 10%; /* Alt kısma yerleştir */
    left: 0;
    justify-content: flex-end; /* Metni alt kısma hizala */
  }
}
</style>
