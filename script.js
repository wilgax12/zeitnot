// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener("DOMContentLoaded", () => {
    // Tema değiştir butonuna tıklanıldığında tema değişimi yapacak işlev
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    themeToggleBtn.addEventListener("click", toggleTheme);

    // Yorum ekleme işlevi
    const commentForm = document.getElementById("comment-form");
    commentForm.addEventListener("submit", addComment);
});

// Tema değişim fonksiyonu
function toggleTheme() {
    document.body.classList.toggle("light-theme");
}

// Yorum ekleme fonksiyonu
function addComment(event) {
    event.preventDefault();  // Formun sayfayı yenilemesini engelle

    const commentInput = document.getElementById("comment-input");
    const commentsSection = document.querySelector(".comments-section");

    if (commentInput.value.trim() !== "") {
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = `<p><strong>Yeni Yorum:</strong> ${commentInput.value}</p>`;

        commentsSection.appendChild(newComment);
        commentInput.value = "";  // Yorum kutusunu temizle
    }
}

function addComment() {
    // Kullanıcı adı ve yorum bilgilerini al
    const username = document.getElementById('username').value;
    const commentText = document.getElementById('comment').value;

    // Eğer her iki alan da doluysa, yeni yorumu ekle
    if (username && commentText) {
        const commentSection = document.getElementById('commentsSection');
        
        // Yeni bir yorum öğesi oluştur
        const newComment = document.createElement('div');
        newComment.classList.add('comment');

        // Yeni yorumu içerecek HTML'i oluştur
        newComment.innerHTML = `<p><strong>${username}:</strong> ${commentText}</p>`;

        // Yeni yorumu yorumlar kısmına ekle
        commentSection.appendChild(newComment);

        // Formu sıfırla
        document.getElementById('username').value = '';
        document.getElementById('comment').value = '';
    } else {
        alert("Kullanıcı adı ve yorum alanları boş bırakılamaz!");
    }
}

