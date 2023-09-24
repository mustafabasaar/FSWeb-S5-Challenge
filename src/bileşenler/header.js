const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const header = document.createElement("div");
  header.classList.add("header");
  const date = document.createElement("span");
  date.classList.add("date");
  date.textContent = tarih;
  header.appendChild(date);
  const h1 = document.createElement("h1");
  h1.textContent = baslik;
  header.appendChild(h1);
  const span = document.createElement("span");
  span.classList.add("temp");
  span.textContent = yazi;
  header.appendChild(span);

  return header;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
  const headerelement = Header("Teknoloji Zamanı", "30 Nisan", "65°");
  const headerblock = document.querySelector(secici);
  headerblock.appendChild(headerelement);
};

export { Header, headerEkleyici };
