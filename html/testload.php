<?php
// this file is reponsible for grabbing the contents
// of the inventory table in order to display it to the UI
$servername = "localhost";
$username = "combscat";
$password = "combspass2432";
$dbname = "inventory";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
 if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect_error);
   }
   $sql = "SELECT * FROM inventory";
   $result = $conn->query($sql);
   $elements = array();
   if ($result->num_rows > 0) {
     // output data of each row
       while($row = $result->fetch_assoc()) {
	 array_push($elements, $row); 
   }
  } else {
    echo "0 results";
  }
echo json_encode($elements);
$conn->close();
?>
