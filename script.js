// İlgili HTML elementlerini seçme
const aboutText = document.querySelector('.about-p');
const translateButton = document.querySelector('.translate-link');

// Türkçe ve İngilizce metinleri saklama
const englishText = aboutText.innerHTML;
const turkishText = `Merhaba! Ben Görkem, İzmir, Türkiye merkezli,26 yaşında bir front-end geliştiriciyim. Alanımda neredeyse 2 yıllık deneyime sahip olmamla birlikte, <span class="orange">HTML</span>, <span class="orange">CSS</span> ve <span class="orange">JavaScript</span> becerilerimi geliştirmeye adadım. Şu anda <span class="orange">React</span> de ustalaşma sürecindeyim, geliştirme yeteneklerimi artırmak için. <br><br>

Çekirdek web teknolojilerindeki uzmanlığımın yanı sıra, <span class="orange">Tailwind CSS</span>,<span class="orange"> Bulma </span>, <span class="orange">Bootstrap</span> ve <span class="orange">SASS</span> - <span class="orange">SCSS</span> gibi çerçeveleri kullanma konusunda uzmanlığım var; bu sayede geliştirme sürecini hızlandırıp görsel açıdan etkileyici kullanıcı arayüzleri oluşturabiliyorum. Kullanıcıları büyüleyen dinamik ve duyarlı web deneyimleri oluşturma konusunda özellikle tutkulu olduğumu belirtmeliyim.<br><br>

İş etiğimin temel taşı işbirliğidir ve yaratıcılığın ve yeniliğin geliştiği takım ortamlarında başarılı olurum. <span class="orange">Git</span> gibi versiyon kontrol sistemlerine ve <span class="orange">GitHub</span> gibi platformlara olan aşinalığım, projeleri etkin bir şekilde yönetmemi ve işbirlikçi çabalarla etkili bir şekilde katkıda bulunmamı sağlar.<br><br>

Front-end geliştirme alanındaki sürekli öğrenme ve büyümeye bağlıyım ve etkili projelere katkıda bulunma fırsatı ve becerilerimi daha da genişletme fikri beni heyecanlandırıyor.`
function translateText(e) {
    e.preventDefault();
    if (aboutText.innerHTML === englishText) {
        aboutText.innerHTML = turkishText;
        aboutText.style.padding = '20px';
        aboutText.style.marginTop = '30px';
        aboutText.style.marginLeft = '10px';
    } else {
        aboutText.innerHTML = englishText;
        

    }
}

// Tıklama olayını dinleme
translateButton.addEventListener('click', translateText);
