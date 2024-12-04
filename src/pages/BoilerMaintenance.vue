<template>
  <q-page>
    <div>
      <q-parallax :height="200" :speed="0.5">
        <template v-slot:media>
          <img src="images/img3.jpg" style="max-height: 750px" />
        </template>

        <div class="custom-title text-grey-3 text-h4">KOMBİ BAKIMI</div>
      </q-parallax>
    </div>
    <div class="custom-container">
      <div class="q-pa-md">
        <p class="text-bold text-grey-9 text-h6">
          <strong>Kombi Bakımı</strong> <strong>Neden Önemlidir?</strong>
        </p>
        <p class="text-grey-9 text-body1">
          <strong>Kombi bakımı</strong>, evinizin ısınma ve sıcak su ihtiyacını
          karşılayan en önemli cihazlardan biri olan kombinizin verimli ve uzun
          ömürlü çalışmasını sağlamak için gereklidir. Düzenli kombi bakımı,
          enerji tasarrufu sağlamanın yanı sıra güvenliğinizi de artırır.
        </p>
      </div>
      <div class="q-pa-md">
        <p class="text-bold text-grey-9 text-h6">
          <strong>Kombi Bakımı</strong> <strong>Ne Zaman Yapılmalıdır?</strong>
        </p>
        <p class="text-grey-9 text-body1">
          Kombi bakımının yılda bir kez, özellikle kış ayları başlamadan önce
          yapılması önerilir. Bu sayede kombinizin performansı artar ve soğuk
          havalarda beklenmedik arızalarla karşılaşma ihtimaliniz azalır.
        </p>
      </div>

      <div class="q-pa-md">
        <p class="text-bold text-grey-9 text-h6">
          <strong>Kombi Bakımı Nasıl Yapılır?</strong>
        </p>
        <p class="text-grey-9 text-body1">
          Profesyonel bir <strong>kombi bakım</strong> hizmeti genellikle şu
          adımları içerir:
        </p>
        <q-list class="q-ma-none">
          <q-item class="q-pa-none text-body1 text-grey-9">
            <q-item-section>
              <p class="q-mt-sm">
                <q-icon name="check" /> <strong>Genel Temizlik</strong>: Kombi
                içindeki toz ve kirin temizlenmesi.
              </p>
              <p class="q-mt-sm">
                <q-icon name="check" /> <strong>Parça Kontrolleri</strong>:
                Brülör, fan, eşanjör ve pompa gibi parçaların kontrol edilmesi.
              </p>
              <p class="q-mt-sm">
                <q-icon name="check" /> <strong>Gaz Kaçağı Testi</strong>:
                Güvenliğinizi sağlamak için gaz kaçağı olup olmadığının
                kontrolü.
              </p>
              <p class="q-mt-sm">
                <q-icon name="check" /> <strong>Su Basıncı Ayarı</strong>:
                Kombinizin doğru basınçta çalıştığından emin olunması.
              </p>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <div class="q-pa-md">
        <p class="text-bold text-grey-9 text-h6">
          <strong>Kombi Bakımı</strong> <strong>Yaptırmanın Avantajları</strong>
        </p>

        <q-list class="q-ma-none">
          <q-item class="q-pa-none text-body1 text-grey-9">
            <q-item-section>
              <p class="q-mt-sm">
                <q-icon name="check" /> <strong>Enerji Tasarrufu</strong>:
                Verimli çalışan bir kombi daha az enerji tüketir.
              </p>
              <p class="q-mt-sm">
                <q-icon name="check" /> <strong>Uzun Ömür</strong>: Düzenli
                bakım, kombinizin ömrünü uzatır.
              </p>
              <p class="q-mt-sm">
                <q-icon name="check" /> <strong>Güvenlik</strong>: Olası gaz
                sızıntıları veya arızaların önüne geçilir.
              </p>
              <p class="q-mt-sm">
                <q-icon name="check" /> <strong>Daha Az Arıza</strong>: Bakım
                yapılan kombilerde arıza riski düşer.
              </p>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <div class="q-pa-md">
        <p class="text-bold text-grey-9 text-h6">
          <strong>Profesyonel Kombi Bakım Hizmeti Alın</strong>
        </p>
        <p class="text-grey-9 text-body1">
          Kombi bakımınızı işinde uzman teknik servislere yaptırarak hem
          cihazınızın performansını artırabilir hem de uzun vadede tasarruf
          edebilirsiniz. Unutmayın, ihmal edilen <strong>kombi bakımı</strong>
          daha yüksek enerji faturalarına ve olası güvenlik risklerine yol
          açabilir.
        </p>
        <p class="text-grey-9 text-body1">
          <strong>Kombi bakımı fiyatları</strong>, bakım işleminin kapsamına ve kombi modeline
          göre değişiklik gösterebilir. Detaylı bilgi almak için
          servisimizle iletişime geçebilirsiniz.
        </p>
      </div>
    </div>
  </q-page>
</template>

<script setup></script>

<style scoped>
.custom-title {
  font-family: "Arial Black", sans-serif; /* Kalın ve belirgin bir font */
  text-shadow: 2px 2px 4px rgba(107, 100, 100, 0.8); /* Yazıya gölge ekler */
  letter-spacing: 3px; /* Harfler arası boşluk artırılarak daha belirgin görünüm */
  background: rgba(77, 82, 190, 0.3);
  border-radius: 5px;
  padding: 8px;
}

.custom-container {
  margin-left: 200px;
  margin-right: 200px;
}

@media (max-width: 1200px) {
  .custom-container {
    margin-left: 100px;
    margin-right: 100px;
  }
}

@media (max-width: 800px) {
  .custom-container {
    margin-left: 50px;
    margin-right: 50px;
  }
}

@media (max-width: 600px) {
  .custom-container {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
