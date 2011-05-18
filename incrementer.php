<?php
	do {
		$host = '127.0.0.1';
		$port = '8080';
		$fp = fsockopen("udp://$host", $port, $errno, $errstr);
		$json = json_encode(array('category'=>'play','timestamp'=>time(),'count'=>1,'value'=>1,'keys' =>array(123,321)));
		echo $json . "\n";
		if($fp)
			fwrite($fp, $json);
		fclose($fp);
		sleep(10);
	} while(1);
?>