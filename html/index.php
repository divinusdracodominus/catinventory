<?php
//print_r($_GET);  // for all GET variables
//print_r($_POST);
$ticket = $_GET["ticket"];
if($ticket == "" && $_SESSION["active"] != "true") {
}
http_response_code(302);
rt = '10500';
header('Location: https://sso.cecs.pdx.edu/login?service=http://10.218.201.127');
exit;
shell_exec("curl https://sso.cecs.pdx.edu/cas/serviceValidate?ticket=$ticket >> result.txt");
?>
