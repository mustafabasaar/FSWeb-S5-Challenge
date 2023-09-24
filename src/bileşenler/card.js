import axios from "axios";
const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const { anabaslik, yazarFoto, yazarAdi } = makale;
  const card = `
    <div class="headline">${anabaslik}</div>
    <div class="author">
      <div class="img-container">
        <img src=${yazarFoto}>
      </div>
      <span>${yazarAdi} tarafından</span>
    </div>
  `;

  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card");
  cardWrapper.innerHTML = card;
  return cardWrapper;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const subjectAPI = null;
  const cardContainer = document.querySelector(secici);
  axios
    .get(`http://localhost:5001/api/makaleler`)
    .then(function (response) {
      const allArticles = response.data.makaleler;

      Object.keys(allArticles).map((article) => {
        allArticles[article].map((item) => {
          console.log("item", item);
          const card = Card(item);
          cardContainer.appendChild(card);
        });
      });
    })
    .catch(function (error) {
      cardContainer.textContent = "Bir hata oluştu, sunucuya bağlanılamadı.";
      console.log(error);
    });
};
export { Card, cardEkleyici };
