<?php
// Hata raporlamasını etkinleştir
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Oturum başlatma
session_start();

// Kullanıcı giriş yapmamışsa, formu gönderemez
if (!isset($_SESSION['logged_in']) || !$_SESSION['logged_in']) {
    echo "Lütfen önce giriş yapın.";
    exit();
}

// Oturumdan kullanıcı kimlik numarasını al
$kullanici_id = $_SESSION['kullanici_id'];

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

// POST yöntemiyle gönderilen veriyi al
$info = $_POST['info'];

// SQL enjeksiyon saldırılarına karşı koruma
$info = $mysqli->real_escape_string($info);

// Kullanıcının email adresini almak için SQL sorgusu
$email_query = "SELECT email FROM kullanıcılar WHERE kullanici_id='$kullanici_id'";
$email_result = $mysqli->query($email_query);

if ($email_result->num_rows > 0) {
    $email = $email_result->fetch_assoc()['email'];
} else {
    echo "Kullanıcı bulunamadı.";
    exit();
}

// Veriyi veritabanına eklemek için SQL sorgusunu hazırla
$insert_sql = "INSERT INTO bilgiler (kullanici_id, email, info) VALUES ('$kullanici_id', '$email', '$info')";

// Sorguyu çalıştır ve sonucu kontrol et
if ($mysqli->query($insert_sql) === TRUE) {
    echo "Bilgi başarıyla kaydedildi.";
    // İsteğe bağlı olarak başka bir sayfaya yönlendirme yapabilirsiniz
    // header("Location: somepage.html");
} else {
    echo "Error: " . $insert_sql . "<br>" . $mysqli->error;
}

// Bağlantıyı kapat
$mysqli->close();
?>
