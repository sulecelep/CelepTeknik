<template>
  <q-page>
   
      <div>
        <q-parallax :height="200" :speed="0.5">
          <template v-slot:media>
            <img src="images/img3.jpg" style="max-height: 750px" />
          </template>

          <div class="custom-title text-grey-3 text-h4">PETEK TEMİZLİĞİ</div>
        </q-parallax>
      </div>
      <div class="custom-container">
      <div class="q-pa-md">
        <p class="text-bold text-grey-9 text-h6">
          <strong>Petek Temizliği</strong> Nedir ve Neden Önemlidir?
        </p>
        <p class="text-grey-9 text-body1">
          <strong>Petek temizliği</strong> kalorifer sistemlerinin daha verimli
          çalışmasını sağlamak ve enerji tasarrufu yapmak için yapılan önemli
          bir bakım işlemidir. Zamanla peteklerin içinde biriken kireç, tortu ve
          çamur gibi maddeler ısı iletimini engelleyerek ısınma sorunlarına yol
          açar. Bu durum hem yüksek faturalara hem de ısınma performansının
          düşmesine neden olur.
        </p>
      </div>
      <div class="q-pa-md">
        <p class="text-bold text-grey-9 text-h6">
          <strong>Petek Temizliği</strong> Ne Zaman Yapılmalıdır?
        </p>
        <p class="text-grey-9 text-body1">
          <strong>Petek temizliği</strong> genellikle 2 yılda bir yapılmalıdır.
          Ancak aşağıdaki belirtileri fark ediyorsanız, bir uzmandan yardım
          almanın zamanı gelmiş demektir:
        </p>

        <q-list class="q-ma-none">
          <q-item class="q-pa-none text-body1 text-grey-9">
            <q-item-section>
              <p class="q-mt-sm">
                <q-icon name="check" /> Peteklerin alt kısmı soğuk, üst kısmı
                sıcaksa,
              </p>
              <p class="q-mt-sm">
                <q-icon name="check" /> Kombi yüksek sıcaklıkta çalışmasına
                rağmen yeterince ısınma sağlanamıyorsa,
              </p>
              <p class="q-mt-sm">
                <q-icon name="check" /> Isınma maliyetleriniz artmışsa.
              </p>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <div class="q-pa-md">
        <p class="text-bold text-grey-9 text-h6">
          <strong>Petek Temizliği Nasıl Yapılır?</strong>
        </p>
        <p class="text-grey-9 text-body1">
          <strong>Petek temizliği</strong> profesyonel cihazlar ve özel
          kimyasallar kullanılarak yapılır. İşlem sırasında peteğin içindeki tüm
          kirli su ve tortular temizlenir. Bu sayede peteklerin ısı iletimi
          artar, kombi daha az enerji harcayarak daha fazla ısı sağlar.
        </p>
      </div>

      <div class="q-pa-md">
        <p class="text-bold text-grey-9 text-h6">
          <strong>Petek Temizliği Faydaları</strong>
        </p>
        <p class="text-grey-9 text-body1">
          <strong>Petek temizliği</strong> genellikle 2 yılda bir yapılmalıdır.
          Ancak aşağıdaki belirtileri fark ediyorsanız, bir uzmandan yardım
          almanın zamanı gelmiş demektir:
        </p>

        <q-list class="q-ma-none">
          <q-item class="q-pa-none text-body1 text-grey-9">
            <q-item-section>
              <p class="q-mt-sm">
                1. <strong>Enerji Tasarrufu</strong>: Kombiniz daha az enerji
                harcayarak daha fazla ısınma sağlar.
              </p>
              <p class="q-mt-sm">
                2. <strong>Daha Eşit Isınma</strong>: Peteklerinizin tamamı eşit
                şekilde ısınır.
              </p>
              <p class="q-mt-sm">
                3. <strong>Uzun Ömürlü Kullanım</strong>: Petekler ve kombinizin
                ömrü uzar.
              </p>
              <p class="q-mt-sm">
                4. <strong>Daha Az Arıza</strong>: Kombiniz ve kalorifer
                tesisatınız daha az sorun çıkarır.
              </p>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="q-pa-md">
        <p class="text-bold text-grey-9 text-h6">
          <strong>Profesyonel Petek Temizliği Hizmeti</strong>
        </p>
        <p class="text-grey-9 text-body1">
          <strong>Petek temizliği</strong> profesyonel bir işlem olduğundan, bu
          işi alanında uzman bir ekibe yaptırmanız önemlidir. Yanlış uygulamalar
          tesisata zarar verebilir ve daha büyük maliyetlere yol açabilir.
        </p>

        <p class="text-grey-9 text-body1">
          Siz de kış aylarında sıcak bir evin tadını çıkarmak ve enerji
          faturalarınızı düşürmek için düzenli
          <strong>petek temizliği</strong> yaptırmayı ihmal etmeyin!
        </p>
        <p class="text-grey-9 text-body1">
          <strong>Petek temizliği</strong> hizmeti için hemen bizimle iletişime
          geçin ve kışa hazırlıklı olun!
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
