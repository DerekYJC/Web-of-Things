var onoff = require('onoff'); 
var Gpio = onoff.Gpio,
  led_1 = new Gpio(4, 'out');
  led_2 = new Gpio(17, 'out');

var mqtt = require('mqtt');

// First LED configuration
var config_1 = require('./config_1.json');
var thngId_1=config_1.thngId; 
var thngUrl_1='/thngs/'+thngId_1;
var thngApiKey_1=config_1.thngApiKey; 

// Second LED configuration
var config_2 = require('./config_2.json');
var thngId_2=config_2.thngId; 
var thngUrl_2='/thngs/'+thngId_2;
var thngApiKey_2=config_2.thngApiKey; 

var status_1=false;
var status_2=false;

var updateInterval_1;
var updateInterval_2;

var client_1 = mqtt.connect("mqtts://mqtt.evrythng.com:443", {
  username: 'authorization',
  password: thngApiKey_1 
});

var client_2 = mqtt.connect("mqtts://mqtt.evrythng.com:443", {
  username: 'authorization',
  password: thngApiKey_2 
});

client_1.on('connect', function () {
  client_1.subscribe(thngUrl_1+'/properties/');
  client_1.subscribe(thngUrl_1+'/actions/all'); 
  updateProperty_1('livenow',true);
  if (! updateInterval_1) updateInterval_1 = setInterval(function(){
    updateProperties_1()
  }, 1000);
});

client_2.on('connect', function () {
  client_2.subscribe(thngUrl_2+'/properties/');
  client_2.subscribe(thngUrl_2+'/actions/all'); 
  updateProperty_2('livenow',true);
  if (! updateInterval_2) updateInterval_2 = setInterval(function(){
    updateProperties_2()
  }, 1000);
});

client_1.on('message', function(topic, message) {
  var resources_1 = topic.split('/');
  console.log(resources_1);
  if (resources_1[1] && resources_1[1] === "thngs"){ 
    if (resources_1[2] && resources_1[2] === thngId_1){  
      if (resources_1[3] && resources_1[3] === "properties"){
        var property_1 = JSON.parse(message);
        console.log(property_1);
	if (property_1[0].key === 'status'){
	  status_1 = property_1[0].value;}
        console.log('[LED 1] Property was updated: '+property_1[0].key+'='+property_1[0].value); 
      } else if (resources_1[3] && resources_1[3] === "actions"){
        var action_1 = JSON.parse(message);
        handleAction_1(action_1); 
      }
    }
  }
});

client_2.on('message', function(topic, message) {
  var resources_2 = topic.split('/');
  console.log(resources_2);
  if (resources_2[1] && resources_2[1] === "thngs"){ 
    if (resources_2[2] && resources_2[2] === thngId_2){  
      if (resources_2[3] && resources_2[3] === "properties"){
        var property_2 = JSON.parse(message);
        console.log(property_2);
	if (property_2[0].key === 'status'){
	  status_2 = property_2[0].value;}
        console.log('[LED 2] Property was updated: '+property_2[0].key+'='+property_2[0].value); 
      } else if (resources_2[3] && resources_2[3] === "actions"){
        var action_2 = JSON.parse(message);
        handleAction_2(action_2); 
      }
    }
  }
});

function handleAction_1(action_1) {
  switch(action_1.type) { 
    case '_setStatus':
      console.log('ACTION: [LED 1] _setStatus changed to: '+action_1.customFields.status); 
      status_1=Boolean(action_1.customFields.status);
      updateProperty_1 ('status',status_1);
      /* Do something else too */
      break;
    case '_setLevel':
      console.log('ACTION: [LED 1] _setLevel changed to: '+action_1.customFields.level);
      break;
    default:
      console.log('ACTION: [LED 1] Unknown action type: '+action_1.type);
      break;
  }
}

function handleAction_2(action_2) {
  switch(action_2.type) { 
    case '_setStatus':
      console.log('ACTION: [LED 2] _setStatus changed to: '+action_2.customFields.status); 
      status_2=Boolean(action_2.customFields.status);
      updateProperty_2 ('status',status_2);
      /* Do something else too */
      break;
    case '_setLevel':
      console.log('ACTION: [LED 2] _setLevel changed to: '+action_2.customFields.level);
      break;
    default:
      console.log('ACTION: [LED 2] Unknown action type: '+action_2.type);
      break;
  }
}

function updateProperties_1() {

  if (status_1 == true) {
      	var v = 1;
	led_1.write(v, function () {
          console.log("Current LED 1 state: " + status_1);
        });
  } else if (status_1 == false) {
  	var v = 0;
	led_1.write(v, function () {
          console.log("Current LED 1 state: " + status_1);
        });
  }

}

function updateProperties_2() {

  if (status_2 == true) {
      	var v = 1;
	led_2.write(v, function () {
          console.log("Current LED 2 state: " + status_2);
        });
  } else if (status_2 == false) {
  	var v = 0;
	led_2.write(v, function () {
          console.log("Current LED 2 state: " + status_2);
        });
  }

}

function updateProperty_1(property,value) {
  client_1.publish(thngUrl_1+'/properties/'+property, '[{"value": '+value+'}]');
}

function updateProperty_2(property,value) {
  client_2.publish(thngUrl_2+'/properties/'+property, '[{"value": '+value+'}]');
}

process.on('SIGINT', function() { 
  updateProperty_1('livenow',false);
  updateProperty_2('livenow',false);
  clearInterval(updateInterval_1);
	client_1.end();
  clearInterval(updateInterval_2);
	client_2.end();
  led_1.writeSync(0);
  led_1.unexport();
  led_2.writeSync(0);
  led_2.unexport();
  console.log('Bye, Bye!');
  process.exit();
});