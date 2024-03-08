let originalText = document.getElementById("translate").innerText;

function translateText() {
    const text = document.getElementById("translate").innerText;
    const sentences = text.split(". ");

    if (text === originalText) {
        let translatedText = "";
        
        sentences.forEach(sentence => {
            const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=tr&dt=t&q=" + encodeURIComponent(sentence);

            fetch(url)
            .then(response => response.json())
            .then(data => {
                const translatedSentence = data[0][0][0];
                translatedText += translatedSentence + ". ";
                document.getElementById("translate").innerText = translatedText;
            })
            .catch(error => console.error("Hata oluştu: ", error));
        });
    } else {
        document.getElementById("translate").innerText = originalText;
    }
}