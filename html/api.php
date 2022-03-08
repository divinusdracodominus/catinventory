<?php
session_start();

$op = json_decode($_GET["request"]);
if($op->action == "create_table") {
  $name = $op->name;
  $fields = $op->fields;
  $access = $op->access;
  if($_SESSION["active"] != "true" && $_SESSION["access_level"] != "admin") {
    header("Location: https://sso.cecs.pdx.edu/cas/login?service=http://10.218.201.127");
    die();
  }
  
}
?>
