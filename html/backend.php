<?php
echo "starting server";
$servername = "localhost";
$dbuser = "combscat";
$dbpasswd  = "combspass2432";
$database = "inventory";
$action = $_GET["action"];
echo "got action: " . $action;
$conn = new mysqli($servername, $dbuser, $dbpasswd, $database);
if($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
if($action == "load") {
  $table = $_GET["table"];
  $sql = "SELECT source,output,quantity,home from adapters"; 
  $result = $conn->query($sql);
  $elements = array();
  while($row = $result->fetch_assoc()) {
    array_push($elements, $row); 
  }
  $res = json_encode($elements);
  echo $res;
}
echo "<h1>No action specified</h1>";
$conn->close();
?>
