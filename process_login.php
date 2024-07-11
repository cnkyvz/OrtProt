<?php
// Hata raporlamayı etkinleştir
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Oturum başlatma
session_start();

// Formun gönderilip gönderilmediğini kontrol et
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Veritabanı bağlantısı için gerekli bilgiler
    $host = "localhost";
    $username = "root";
    $password = "";
    $database = "prosthesis_users";

    // Veritabanına bağlanma
    $mysqli = new mysqli($host, $username, $password, $database);

    // Bağlantı hata kontrolü
    if ($mysqli->connect_errno) {
        echo "Failed to connect to MySQL: " . $mysqli->connect_error;
        exit();
    }

    // POST yöntemiyle gönderilen verileri al
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    // Eğer email veya password boşsa hata ver
    if (empty($email) || empty($password)) {
        echo "Email ve şifre alanları boş olamaz.";
        exit();
    }

    // SQL enjeksiyon saldırılarına karşı koruma
    $email = $mysqli->real_escape_string($email);
    $password = $mysqli->real_escape_string($password);

    // Kullanıcının veritabanında olup olmadığını kontrol etmek için SQL sorgusunu hazırla
    $sql = "SELECT * FROM kullanıcılar WHERE email='$email' AND password='$password'";

    // Sorguyu çalıştır ve sonucu kontrol et
    $result = $mysqli->query($sql);

    // Oturumu güncelle
    $_SESSION['logged_in'] = false;

    // Sonuçları kontrol et
    if ($result->num_rows > 0) {
        $_SESSION['logged_in'] = true;
        $user = $result->fetch_assoc();
        $_SESSION['kullanici_id'] = $user['kullanici_id']; // Kullanıcı kimliğini oturuma kaydedin
        // Giriş başarılıysa index.html sayfasına yönlendirme yap
        header("Location: LoginPageFile/realogin_index.html");
        exit();
    } else {
        echo "Giriş başarısız. Lütfen kullanıcı adı ve şifrenizi kontrol edin.";
    }

    // Bağlantıyı kapat
    $mysqli->close();
} else {
    echo "Form gönderilmedi.";
}
?>
