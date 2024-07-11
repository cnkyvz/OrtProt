<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$host = "localhost"; // MySQL sunucusunun adresi 
$username = "root"; // MySQL kullanıcı adı
$password = ""; // MySQL şifresi
$database = "prosthesis_users"; // Kullanılacak veritabanı adı

// Veritabanına bağlanma
$mysqli = new mysqli($host, $username, $password, $database);

// Bağlantı hata kontrolü
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
    exit();
}

// POST yöntemiyle gönderilen verileri al
$email = $_POST['email'];
$password = $_POST['password'];

// SQL sorgu
$sql = "INSERT INTO kullanıcılar (email, password) VALUES ('$email', '$password')";

// Sorgu çalıştır ve sonuc kontrol
if ($mysqli->query($sql) === TRUE) {
    echo "Kayıt başarıyla oluşturuldu.";
} else {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
}

// Bağlantıyı kapat
$mysqli->close();
?>
