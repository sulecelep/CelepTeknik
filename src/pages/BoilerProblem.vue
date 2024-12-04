<template>
  <q-page>
    <div>
      <q-parallax :height="200" :speed="0.5">
        <template v-slot:media>
          <img src="images/img3.jpg" style="max-height: 750px" />
        </template>

        <div class="custom-title text-grey-3 text-h4">KOMBİ ARIZASI</div>
      </q-parallax>
    </div>
    <div class="custom-container">
      <div class="q-pa-md">
        <p class="text-bold text-grey-9 text-h6">
          <strong>Kombi Arızası</strong>
          <strong> ile İlgili Bilgilendirme Metni</strong>
        </p>
        <p class="text-grey-9 text-body1">
          <strong>Kombi arızaları</strong>, özellikle soğuk havalarda günlük
          yaşamı olumsuz etkileyen sorunlardan biridir. Bu tür arızalar
          genellikle kullanım hataları, düzenli bakım yapılmaması veya teknik
          parçaların yıpranması gibi nedenlerle ortaya çıkar.
        </p>
      </div>

      <div class="q-pa-md">
        <p class="text-bold text-grey-9 text-h6">
          <strong>En Sık Karşılaşılan Kombi Arızaları:</strong>
        </p>

        <q-list class="q-ma-none">
          <q-item class="q-pa-none text-body1 text-grey-9">
            <q-item-section>
              <p class="q-mt-sm">
                1. <strong>Sıcak Su Gelmiyor</strong>: Su akışı normal olmasına
                rağmen kombiden sıcak su alınamıyorsa, bu durum genellikle
                eşanjörlerde bir sorun olduğunu gösterir.
              </p>
              <p class="q-mt-sm">
                2. <strong>Petekler Isınmıyor</strong>: Kombi çalışıyor fakat
                petekler ısınmıyorsa, tesisatın havasının alınması ya da
                sirkülasyon pompasının kontrol edilmesi gerekebilir.
              </p>
              <p class="q-mt-sm">
                3. <strong>Kombi Hiç Çalışmıyor</strong>: Elektrik, gaz veya su
                bağlantılarında bir problem olabilir. Bu durumda teknik servisin
                kontrolü şarttır.
              </p>
              <p class="q-mt-sm">
                4. <strong>Kombi Sesli Çalışıyor</strong>: Kombiden gelen
                alışılmadık sesler, fan motoru, pompa ya da genleşme tankıyla
                ilgili bir sorun olduğuna işaret edebilir.
              </p>
              <p class="q-mt-sm">
                5. <strong>Basınç Sorunları</strong>: Kombi basıncının sürekli
                düşmesi ya da yükselmesi, su kaçağı veya genleşme tankındaki bir
                problemden kaynaklanabilir.
              </p>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <div class="q-pa-md">
        <p class="text-bold text-grey-9 text-h6">
          <strong>Kombi Arızalarında Ne Yapılmalı?</strong>
        </p>

        <q-list class="q-ma-none">
          <q-item class="q-pa-none text-body1 text-grey-9">
            <q-item-section>
              <p class="q-mt-sm">
                1. <strong>Cihazınızı Resetleyin</strong>: Kombinizin kullanma
                kılavuzunda belirtilen şekilde resetleme işlemi yapabilirsiniz.
                Ancak bu işlem genelde geçici bir çözümdür.
              </p>
              <p class="q-mt-sm">
                2.
                <strong>Bağlantıları Kontrol Edin</strong>: Elektrik, gaz ve su
                bağlantılarının açık ve düzgün çalıştığından emin olun.
              </p>
              <p class="q-mt-sm ">
                3.
                <strong>Kombi Servisi ile İletişime Geçin</strong>: Kombinizi
                daha fazla zarar görmeden profesyonel bir ekip tarafından
                kontrol ettirin.
              </p>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <div class="q-pa-md">
        <p class="text-bold text-grey-9 text-h6">
          <strong>Kombi Arızalarını Önlemek için İpuçları:</strong>
        </p>

        <q-list class="q-ma-none">
          <q-item class="q-pa-none text-body1 text-grey-9">
            <q-item-section>
              <p class="q-mt-sm">
                <q-icon name="check" />Yılda en az bir kez
                <strong>kombi bakımı</strong> yaptırın.
              </p>
              <p class="q-mt-sm">
                <q-icon name="check" />
                Tesisatın havasını düzenli olarak alın.
              </p>
              <p class="q-mt-sm">
                <q-icon name="check" />
                Kombiyi aşırı sıcaklık derecelerinde uzun süre çalıştırmaktan
                kaçının.
              </p>
              <p class="text-grey-9 text-body1 q-mt-sm">
                Kombi arızalarınızı ihmal etmeyerek, hem cihazınızın ömrünü
                uzatabilir hem de enerji tasarrufu sağlayabilirsiniz. Unutmayın,
                güvenliğiniz ve konforunuz için uzman desteği almak her zaman en
                doğru çözümdür.
              </p>
            </q-item-section>
          </q-item>
        </q-list>
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
