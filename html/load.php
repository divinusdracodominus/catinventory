<?php
$servername = "localhost";
$username = "combscat";
$password = "combspass2432";
$dbname = "inventory";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
$result = null;
echo "about to connect\n";
if ($conn->connect_error) {
   $result->status = "Failure";
   $result->error = $conn->connect_error;
   echo json_encode($result);
   die();
}

echo "about to submit query\n";
$sql = "SELECT * FROM inventory";
$result = $conn->query($sql);
$result->elements = [];
if ($result->num_rows > 0) {
   // output data of each row
   while($row = $result->fetch_assoc()) {
     echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
     $result->elements.push($row); 
   }
}else{
    echo "results are empty\n";
}
$result->status = "Ok";
echo json_encode($result);
$conn->close();
?>
