<?php
$servername = "localhost";
$username = "combscat";
$password = "combspass2432";
$dbname = "inventory";

$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error) {
    die("connection failed: ". $conn->connect_error);
}
$name = $_POST["name"];
// grab values from post fields (matching names on input fields)
$catagory = $_POST["catagory"];
$location = $_POST["location"];
$dep = $_POST["department"];
$purchase_date = $_POST["purchase_date"];
$quantity = $_POST["quantity"];
$minquantity = $_POST["minquantity"];

$sql = "insert into inventory (name,catagory,location,department,purchase_date,quantity,minquantity) VALUES ('$name','$catagory', '$location','$dep','$purchase_date','$quantity','$minquantity')";
if($conn->query($sql) === TRUE) {
    // if successful go back to frontend view
    header("Location: http://10.218.201.127:3000");
}else{
  echo "Error: " . $conn->error;
}
?>
