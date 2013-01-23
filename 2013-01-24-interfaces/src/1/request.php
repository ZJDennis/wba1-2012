<?php
$body = array(array("Marke" => "Volkswagen","Farbe" => "Gruen","Preis" => "20"),array("Marke" => "Opel","Farbe" => "Rot","Preis" => "70"));
$head = getallheaders();
$meth = ($_SERVER['REQUEST_METHOD'] == "GET")?true:false;
if(isset($_SERVER['HTTP_ACCEPT'])){
$accp = $_SERVER['HTTP_ACCEPT'];
}else{$accp = "";}
switch($accp){
	case "text/html":
		if($meth){
			$response = "<div id='resp_head'><span>Request der am Server angekommen ist ( hier im Response-Body zur&uuml;ck gegeben  )</span><br>REQUEST_METHOD: ".$_SERVER['REQUEST_METHOD']."<br>";
			foreach($head as $k => $v){
				$response = $response.$k." : ".$v."</br>";
			}
			$response = $response."</div><div id='resp_body'><span>Response-Body</span><br><br>";
			foreach($body as $v){
				$response = $response."<table><tr><td>Marke</td><td>".$v['Marke']."</td></tr><tr><td>Farbe</td><td>".$v['Farbe']."</td></tr></table>";}
			$response = $response."</div>";
		}else{
			$response = "<div id='resp_head'>REQUEST_METHOD: ".$_SERVER['REQUEST_METHOD']."<br>";
			foreach($head as $k => $v){$response = $response.$k." : ".$v."</br>";}
			$response = $response."</div><br><br>200 (OK)<br>";
		}
		break;
	case "text/xml":case "application/xml":
		header("Content-Type: text/xml");
		if($meth){
			$response = "<?xml version='1.0'?><root><Kopfdaten id='resp_head'><span>Request der am Server angekommen ist ( hier im Response-Body zurück gegeben )</span><br />REQUEST_METHOD: ".$_SERVER['REQUEST_METHOD']."<br />";
			foreach($head as $k => $v){
				$response = $response."<p>".$k." : ".$v."</p>";
			}
			$response = $response."</Kopfdaten><Rumpf id='resp_body'><span>Response-Body</span>";
			foreach($body as $v){
				$response = $response."<table>";
				$response = $response."<tr><td>Marke</td><td>".$v['Marke']."</td></tr>";
				$response = $response."<tr><td>Preis</td><td>".$v['Preis']."</td></tr>";
				$response = $response."</table>";
			}
			$response = $response."</Rumpf></root>";
		}else{
			$response = "REQUEST_METHOD: ".$_SERVER['REQUEST_METHOD']."<br>200 (OK)<br><br>";
			foreach($head as $k => $v){$response = $response.$k." : ".$v."</br>";}
		}
	break;
	case "application/json":
		if($meth){
			$head['REQUEST_METHOD']=$_SERVER['REQUEST_METHOD']; 
			$body[] = array("Marke" => "BMW","Farbe" => "Blau","Preis" => "Maximal 50 Cent");
			$response = array($head,$body);
			$response = json_encode(array("data" => $response));
		}else{
			$head['REQUEST_METHOD']=$_SERVER['REQUEST_METHOD'];
			$body = array("Status"=>"200 OK");
			$response = array($head,$body);
			$response = json_encode(array("data" => $response));
		}
	break;
	default:
		$response = " False Accept Type given!";
	break;}
header("WBA-Medieninfo: Apple ist Kacke!");
echo $response;
?>