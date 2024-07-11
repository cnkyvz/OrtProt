document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.imageAna img');
    let current = 0;

    function updateImages() {
        images.forEach((img, index) => {
            img.classList.remove('active', 'left', 'right');
            if (index === current) {
                img.classList.add('active');
            } else if (index === (current + 1) % images.length) {
                img.classList.add('right');
            } else if (index === (current - 1 + images.length) % images.length) {
                img.classList.add('left');
            }
        });
    }

    function nextImage() {
        current = (current + 1) % images.length;
        updateImages();
    }

    updateImages();
    setInterval(nextImage, 3000); // her 3 saniyede bir resim değişir

    // Şehir seçimi ve konum işlemlerini ele alacak fonksiyon
    selectCity.addEventListener('change', function() {
        const selectedCity = this.value;
        if (selectedCity === "İstanbul") { // Sadece "İstanbul" seçildiğinde işlemi gerçekleştir
            const coordinates1 = [41.017383978274474, 28.93026946763005]; // İstanbul 1. koordinatları
            const coordinates2 = [41.02211046788691, 29.045418554660873];
            const coordinates3 = [41.01027587715017, 28.899740283069576]; // İstanbul 2. koordinatları
            if (coordinates1 && coordinates2 && coordinates3) {
                map.setView(coordinates1, 10); // Haritayı 1. koordinata yakınlaştır

                // İlk konum işareti oluştur
                if (marker) {
                    map.removeLayer(marker);
                }
                marker = L.marker(coordinates1).addTo(map).bindPopup(`<b>Luxmed Protez</b><br/><a href="https://www.google.com/maps/dir/?api=1&destination=${coordinates1[0]},${coordinates1[1]}" target="_blank">Yol Tarifi</a>`).openPopup();

                // İkinci konum işareti oluştur
                if (marker2) {
                    map.removeLayer(marker2);
                }
                marker2 = L.marker(coordinates2).addTo(map).bindPopup(`<b>Proklinik - Altunizade</b><br/><a href="https://www.google.com/maps/dir/?api=1&destination=${coordinates2[0]},${coordinates2[1]}" target="_blank">Yol Tarifi</a>`).openPopup();
                if (marker3) {
                    map.removeLayer(marker3);
                }
                marker3 = L.marker(coordinates3).addTo(map).bindPopup(`<b>OttoBock - Merter</b><br/><a href="https://www.google.com/maps/dir/?api=1&destination=${coordinates3[0]},${coordinates3[1]}" target="_blank">Yol Tarifi</a>`).openPopup();
            } else {
                // Eğer geçersiz bir şehir seçildiyse, haritadaki işaretleri kaldır
                if (marker) {
                    map.removeLayer(marker);
                }
                if (marker2) {
                    map.removeLayer(marker2);
                }
                if (marker3) {
                    map.removeLayer(marker3);
                }
            }
        } else {
            // Sadece "İstanbul" seçilmediyse, haritadaki işaretleri kaldır
            if (marker) {
                map.removeLayer(marker);
            }
            if (marker2) {
                map.removeLayer(marker2);
            }
            if (marker3) {
                map.removeLayer(marker3);
            }
        }
    });
});






document.addEventListener('DOMContentLoaded', function() {
    // Detaylar butonu için kaydırma işlevi
    var detailsBtn = document.getElementById('detailsBtn');
    if (detailsBtn) {
        detailsBtn.addEventListener('click', function(event) {
            event.preventDefault();  // Varsayılan davranışı engelle

            // İlgili elementin yüksekliğini al
            var contentElement = document.querySelector('.contenAna2');
            if (contentElement) {
                var contentHeight = contentElement.offsetTop;

                // Biraz daha aşağı kaydırmak için bir ofset ekleyin
                var offset = -300; // İhtiyaca göre ayarlayabilirsiniz

                // Sayfayı yukarıdan contentHeight - offset mesafesine kaydır
                window.scrollTo({ top: contentHeight - offset, behavior: 'smooth' });
            }
        });
    }

    // Video butonu için modal işlevi
    var modal = document.getElementById('myModal');
    var btn = document.getElementById('videoBtn');
    var span = document.getElementsByClassName('close')[0];

    if (btn) {
        btn.onclick = function() {
            if (modal) {
                modal.style.display = 'block';
            }
        }
    }

    if (span) {
        span.onclick = function() {
            if (modal) {
                modal.style.display = 'none';
            }
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

//Detayları Öğrenin Butonu

document.addEventListener('DOMContentLoaded', function () {
    const detailsBtn = document.getElementById('detailsBtn');
    const targetHeader = document.querySelector('.article-3 h1');
    const offsetY = 95; // Sayfanın ne kadar aşağı inmesini istediğinizi burada belirtin (piksel cinsinden)

    detailsBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const targetOffsetTop = targetHeader.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: targetOffsetTop - offsetY, behavior: 'smooth' });
    });
});

//Robot Kol Hareketi

document.addEventListener('scroll', function() {
    const robotKolImage = document.querySelector('.robotKolImage');
    const scrollPosition = window.scrollY;
    const maxScrollPosition = 1200; // Maksimum kaydırma pozisyonu
    const maxRotateAngle = 90; // Maksimum dönüş açısı (90 derece)

    if (scrollPosition <= maxScrollPosition) {
        const rotateAngle = (scrollPosition / maxScrollPosition) * maxRotateAngle;
        robotKolImage.style.transform = `translate(-50%, -50%) rotate(${rotateAngle}deg)`;
    } else {
        robotKolImage.style.transform = `translate(-50%, -50%) rotate(${maxRotateAngle}deg)`;
    }
});

//Şifre Kutusu Göz açma kapama

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('togglePassword').addEventListener('click', function() {
        const passwordField = document.getElementById('password');
        const passwordFieldType = passwordField.getAttribute('type');

        if (passwordFieldType === 'password') {
            passwordField.setAttribute('type', 'text');
            this.src = 'Resimler/gozacik.png';
        } else {
            passwordField.setAttribute('type', 'password');
            this.src = 'Resimler/gozkapali.png';
        }
    });
});






