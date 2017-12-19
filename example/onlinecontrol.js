var onoff = require('onoff'); 
var Gpio = onoff.Gpio,
  led_1 = new Gpio(4, 'out');
  led_2 = new Gpio(17, 'out');
  led_3 = new Gpio(27, 'out');
  led_4 = new Gpio(22, 'out');
  led_5 = new Gpio(14, 'out');
  led_6 = new Gpio(15, 'out');
  led_7 = new Gpio(18, 'out');
  led_8 = new Gpio(23, 'out');

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

// Third LED configuration
var config_3 = require('./config_3.json');
var thngId_3=config_3.thngId; 
var thngUrl_3='/thngs/'+thngId_3;
var thngApiKey_3=config_3.thngApiKey; 

// Fourth LED configuration
var config_4 = require('./config_4.json');
var thngId_4=config_4.thngId; 
var thngUrl_4='/thngs/'+thngId_4;
var thngApiKey_4=config_4.thngApiKey; 

// Fifth LED configuration
var config_5 = require('./config_5.json');
var thngId_5=config_5.thngId; 
var thngUrl_5='/thngs/'+thngId_5;
var thngApiKey_5=config_5.thngApiKey; 

// Sixth LED configuration
var config_6 = require('./config_6.json');
var thngId_6=config_6.thngId; 
var thngUrl_6='/thngs/'+thngId_6;
var thngApiKey_6=config_6.thngApiKey; 

// Seventh LED configuration
var config_7 = require('./config_7.json');
var thngId_7=config_7.thngId; 
var thngUrl_7='/thngs/'+thngId_7;
var thngApiKey_7=config_7.thngApiKey; 

// Eighth LED configuration
var config_8 = require('./config_8.json');
var thngId_8=config_8.thngId; 
var thngUrl_8='/thngs/'+thngId_8;
var thngApiKey_8=config_8.thngApiKey; 

var status_1=false;
var status_2=false;
var status_3=false;
var status_4=false;
var status_5=false;
var status_6=false;
var status_7=false;
var status_8=false;

var updateInterval_1;
var updateInterval_2;
var updateInterval_3;
var updateInterval_4;
var updateInterval_5;
var updateInterval_6;
var updateInterval_7;
var updateInterval_8;

var client_1 = mqtt.connect("mqtts://mqtt.evrythng.com:443", {
  username: 'authorization',
  password: thngApiKey_1 
});

var client_2 = mqtt.connect("mqtts://mqtt.evrythng.com:443", {
  username: 'authorization',
  password: thngApiKey_2 
});

var client_3 = mqtt.connect("mqtts://mqtt.evrythng.com:443", {
  username: 'authorization',
  password: thngApiKey_3 
});

var client_4 = mqtt.connect("mqtts://mqtt.evrythng.com:443", {
  username: 'authorization',
  password: thngApiKey_4 
});

var client_5 = mqtt.connect("mqtts://mqtt.evrythng.com:443", {
  username: 'authorization',
  password: thngApiKey_5 
});

var client_6 = mqtt.connect("mqtts://mqtt.evrythng.com:443", {
  username: 'authorization',
  password: thngApiKey_6 
});

var client_7 = mqtt.connect("mqtts://mqtt.evrythng.com:443", {
  username: 'authorization',
  password: thngApiKey_7 
});

var client_8 = mqtt.connect("mqtts://mqtt.evrythng.com:443", {
  username: 'authorization',
  password: thngApiKey_8 
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
  }, 500);
});

client_3.on('connect', function () {
  client_3.subscribe(thngUrl_3+'/properties/');
  client_3.subscribe(thngUrl_3+'/actions/all'); 
  updateProperty_3('livenow',true);
  if (! updateInterval_3) updateInterval_3 = setInterval(function(){
    updateProperties_3()
  }, 500);
});

client_4.on('connect', function () {
  client_4.subscribe(thngUrl_4+'/properties/');
  client_4.subscribe(thngUrl_4+'/actions/all'); 
  updateProperty_4('livenow',true);
  if (! updateInterval_4) updateInterval_4 = setInterval(function(){
    updateProperties_4()
  }, 500);
});

client_5.on('connect', function () {
  client_5.subscribe(thngUrl_5+'/properties/');
  client_5.subscribe(thngUrl_5+'/actions/all'); 
  updateProperty_5('livenow',true);
  if (! updateInterval_5) updateInterval_5 = setInterval(function(){
    updateProperties_5()
  }, 500);
});

client_6.on('connect', function () {
  client_6.subscribe(thngUrl_6+'/properties/');
  client_6.subscribe(thngUrl_6+'/actions/all'); 
  updateProperty_6('livenow',true);
  if (! updateInterval_6) updateInterval_6 = setInterval(function(){
    updateProperties_6()
  }, 500);
});

client_7.on('connect', function () {
  client_7.subscribe(thngUrl_7+'/properties/');
  client_7.subscribe(thngUrl_7+'/actions/all'); 
  updateProperty_7('livenow',true);
  if (! updateInterval_7) updateInterval_7 = setInterval(function(){
    updateProperties_7()
  }, 500);
});

client_8.on('connect', function () {
  client_8.subscribe(thngUrl_8+'/properties/');
  client_8.subscribe(thngUrl_8+'/actions/all'); 
  updateProperty_8('livenow',true);
  if (! updateInterval_8) updateInterval_8 = setInterval(function(){
    updateProperties_8()
  }, 500);
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

client_3.on('message', function(topic, message) {
  var resources_3 = topic.split('/');
  console.log(resources_3);
  if (resources_3[1] && resources_3[1] === "thngs"){ 
    if (resources_3[2] && resources_3[2] === thngId_3){  
      if (resources_3[3] && resources_3[3] === "properties"){
        var property_3 = JSON.parse(message);
        console.log(property_3);
	if (property_3[0].key === 'status'){
	  status_3 = property_3[0].value;}
        console.log('[LED 3] Property was updated: '+property_3[0].key+'='+property_3[0].value); 
      } else if (resources_3[3] && resources_3[3] === "actions"){
        var action_3 = JSON.parse(message);
        handleAction_3(action_3); 
      }
    }
  }
});

client_4.on('message', function(topic, message) {
  var resources_4 = topic.split('/');
  console.log(resources_4);
  if (resources_4[1] && resources_4[1] === "thngs"){ 
    if (resources_4[2] && resources_4[2] === thngId_4){  
      if (resources_4[3] && resources_4[3] === "properties"){
        var property_4 = JSON.parse(message);
        console.log(property_4);
	if (property_4[0].key === 'status'){
	  status_4 = property_4[0].value;}
        console.log('[LED 4] Property was updated: '+property_4[0].key+'='+property_4[0].value); 
      } else if (resources_4[3] && resources_4[3] === "actions"){
        var action_4 = JSON.parse(message);
        handleAction_4(action_4); 
      }
    }
  }
});

client_5.on('message', function(topic, message) {
  var resources_5 = topic.split('/');
  console.log(resources_5);
  if (resources_5[1] && resources_5[1] === "thngs"){ 
    if (resources_5[2] && resources_5[2] === thngId_5){  
      if (resources_5[3] && resources_5[3] === "properties"){
        var property_5 = JSON.parse(message);
        console.log(property_5);
	if (property_5[0].key === 'status'){
	  status_5 = property_5[0].value;}
        console.log('[LED 5] Property was updated: '+property_5[0].key+'='+property_5[0].value); 
      } else if (resources_5[3] && resources_5[3] === "actions"){
        var action_5 = JSON.parse(message);
        handleAction_5(action_5); 
      }
    }
  }
});

client_6.on('message', function(topic, message) {
  var resources_6 = topic.split('/');
  console.log(resources_6);
  if (resources_6[1] && resources_6[1] === "thngs"){ 
    if (resources_6[2] && resources_6[2] === thngId_6){  
      if (resources_6[3] && resources_6[3] === "properties"){
        var property_6 = JSON.parse(message);
        console.log(property_6);
	if (property_6[0].key === 'status'){
	  status_6 = property_6[0].value;}
        console.log('[LED 6] Property was updated: '+property_6[0].key+'='+property_6[0].value); 
      } else if (resources_6[3] && resources_6[3] === "actions"){
        var action_6 = JSON.parse(message);
        handleAction_6(action_6); 
      }
    }
  }
});

client_7.on('message', function(topic, message) {
  var resources_7 = topic.split('/');
  console.log(resources_7);
  if (resources_7[1] && resources_7[1] === "thngs"){ 
    if (resources_7[2] && resources_7[2] === thngId_7){  
      if (resources_7[3] && resources_7[3] === "properties"){
        var property_7 = JSON.parse(message);
        console.log(property_7);
	if (property_7[0].key === 'status'){
	  status_7 = property_7[0].value;}
        console.log('[LED 7] Property was updated: '+property_7[0].key+'='+property_7[0].value); 
      } else if (resources_7[3] && resources_7[3] === "actions"){
        var action_7 = JSON.parse(message);
        handleAction_7(action_7); 
      }
    }
  }
});

client_8.on('message', function(topic, message) {
  var resources_8 = topic.split('/');
  console.log(resources_8);
  if (resources_8[1] && resources_8[1] === "thngs"){ 
    if (resources_8[2] && resources_8[2] === thngId_8){  
      if (resources_8[3] && resources_8[3] === "properties"){
        var property_8 = JSON.parse(message);
        console.log(property_8);
	if (property_8[0].key === 'status'){
	  status_8 = property_8[0].value;}
        console.log('[LED 8] Property was updated: '+property_8[0].key+'='+property_8[0].value); 
      } else if (resources_8[3] && resources_8[3] === "actions"){
        var action_8 = JSON.parse(message);
        handleAction_8(action_8); 
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

function handleAction_3(action_3) {
  switch(action_3.type) { 
    case '_setStatus':
      console.log('ACTION: [LED 3] _setStatus changed to: '+action_3.customFields.status); 
      status_3=Boolean(action_3.customFields.status);
      updateProperty_3 ('status',status_3);
      /* Do something else too */
      break;
    case '_setLevel':
      console.log('ACTION: [LED 3] _setLevel changed to: '+action_3.customFields.level);
      break;
    default:
      console.log('ACTION: [LED 3] Unknown action type: '+action_3.type);
      break;
  }
}

function handleAction_4(action_4) {
  switch(action_4.type) { 
    case '_setStatus':
      console.log('ACTION: [LED 4] _setStatus changed to: '+action_4.customFields.status); 
      status_4=Boolean(action_4.customFields.status);
      updateProperty_4 ('status',status_4);
      /* Do something else too */
      break;
    case '_setLevel':
      console.log('ACTION: [LED 4] _setLevel changed to: '+action_4.customFields.level);
      break;
    default:
      console.log('ACTION: [LED 4] Unknown action type: '+action_4.type);
      break;
  }
}

function handleAction_5(action_5) {
  switch(action_5.type) { 
    case '_setStatus':
      console.log('ACTION: [LED 5] _setStatus changed to: '+action_5.customFields.status); 
      status_5=Boolean(action_5.customFields.status);
      updateProperty_5 ('status',status_5);
      /* Do something else too */
      break;
    case '_setLevel':
      console.log('ACTION: [LED 5] _setLevel changed to: '+action_5.customFields.level);
      break;
    default:
      console.log('ACTION: [LED 5] Unknown action type: '+action_5.type);
      break;
  }
}

function handleAction_6(action_6) {
  switch(action_6.type) { 
    case '_setStatus':
      console.log('ACTION: [LED 6] _setStatus changed to: '+action_6.customFields.status); 
      status_6=Boolean(action_6.customFields.status);
      updateProperty_6 ('status',status_6);
      /* Do something else too */
      break;
    case '_setLevel':
      console.log('ACTION: [LED 6] _setLevel changed to: '+action_6.customFields.level);
      break;
    default:
      console.log('ACTION: [LED 6] Unknown action type: '+action_6.type);
      break;
  }
}

function handleAction_7(action_7) {
  switch(action_7.type) { 
    case '_setStatus':
      console.log('ACTION: [LED 7] _setStatus changed to: '+action_7.customFields.status); 
      status_7=Boolean(action_7.customFields.status);
      updateProperty_7 ('status',status_7);
      /* Do something else too */
      break;
    case '_setLevel':
      console.log('ACTION: [LED 7] _setLevel changed to: '+action_7.customFields.level);
      break;
    default:
      console.log('ACTION: [LED 7] Unknown action type: '+action_7.type);
      break;
  }
}

function handleAction_8(action_8) {
  switch(action_8.type) { 
    case '_setStatus':
      console.log('ACTION: [LED 8] _setStatus changed to: '+action_8.customFields.status); 
      status_8=Boolean(action_8.customFields.status);
      updateProperty_8 ('status',status_8);
      /* Do something else too */
      break;
    case '_setLevel':
      console.log('ACTION: [LED 8] _setLevel changed to: '+action_8.customFields.level);
      break;
    default:
      console.log('ACTION: [LED 8] Unknown action type: '+action_8.type);
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

function updateProperties_3() {

  if (status_3 == true) {
      	var v = 1;
	led_3.write(v, function () {
          console.log("Current LED 3 state: " + status_3);
        });
  } else if (status_3 == false) {
  	var v = 0;
	led_3.write(v, function () {
          console.log("Current LED 3 state: " + status_3);
        });
  }

}

function updateProperties_4() {

  if (status_4 == true) {
      	var v = 1;
	led_4.write(v, function () {
          console.log("Current LED 4 state: " + status_4);
        });
  } else if (status_4 == false) {
  	var v = 0;
	led_4.write(v, function () {
          console.log("Current LED 4 state: " + status_4);
        });
  }

}

function updateProperties_5() {

  if (status_5 == true) {
      	var v = 1;
	led_5.write(v, function () {
          console.log("Current LED 5 state: " + status_5);
        });
  } else if (status_5 == false) {
  	var v = 0;
	led_5.write(v, function () {
          console.log("Current LED 5 state: " + status_5);
        });
  }

}

function updateProperties_6() {

  if (status_6 == true) {
      	var v = 1;
	led_6.write(v, function () {
          console.log("Current LED 6 state: " + status_6);
        });
  } else if (status_6 == false) {
  	var v = 0;
	led_6.write(v, function () {
          console.log("Current LED 6 state: " + status_6);
        });
  }

}

function updateProperties_7() {

  if (status_7 == true) {
      	var v = 1;
	led_7.write(v, function () {
          console.log("Current LED 7 state: " + status_7);
        });
  } else if (status_7 == false) {
  	var v = 0;
	led_7.write(v, function () {
          console.log("Current LED 7 state: " + status_7);
        });
  }

}

function updateProperties_8() {

  if (status_8 == true) {
      	var v = 1;
	led_8.write(v, function () {
          console.log("Current LED 8 state: " + status_8);
        });
  } else if (status_8 == false) {
  	var v = 0;
	led_8.write(v, function () {
          console.log("Current LED 8 state: " + status_8);
        });
  }

}

function updateProperty_1(property,value) {
  client_1.publish(thngUrl_1+'/properties/'+property, '[{"value": '+value+'}]');
}

function updateProperty_2(property,value) {
  client_2.publish(thngUrl_2+'/properties/'+property, '[{"value": '+value+'}]');
}

function updateProperty_3(property,value) {
  client_3.publish(thngUrl_3+'/properties/'+property, '[{"value": '+value+'}]');
}

function updateProperty_4(property,value) {
  client_4.publish(thngUrl_4+'/properties/'+property, '[{"value": '+value+'}]');
}

function updateProperty_5(property,value) {
  client_5.publish(thngUrl_5+'/properties/'+property, '[{"value": '+value+'}]');
}

function updateProperty_6(property,value) {
  client_6.publish(thngUrl_6+'/properties/'+property, '[{"value": '+value+'}]');
}

function updateProperty_7(property,value) {
  client_7.publish(thngUrl_7+'/properties/'+property, '[{"value": '+value+'}]');
}

function updateProperty_8(property,value) {
  client_8.publish(thngUrl_8+'/properties/'+property, '[{"value": '+value+'}]');
}

process.on('SIGINT', function() { 
  updateProperty_1('livenow',false);
  updateProperty_2('livenow',false);
  updateProperty_3('livenow',false);
  updateProperty_4('livenow',false);
  updateProperty_5('livenow',false);
  updateProperty_6('livenow',false);
  updateProperty_7('livenow',false);
  updateProperty_8('livenow',false);
  clearInterval(updateInterval_1);
	client_1.end();
  clearInterval(updateInterval_2);
	client_2.end();
  clearInterval(updateInterval_3);
	client_3.end();
  clearInterval(updateInterval_4);
	client_4.end();
  clearInterval(updateInterval_5);
	client_5.end();
  clearInterval(updateInterval_6);
	client_6.end();
  clearInterval(updateInterval_7);
	client_7.end();
  clearInterval(updateInterval_8);
	client_8.end();
  led_1.writeSync(0);
  led_1.unexport();
  led_2.writeSync(0);
  led_2.unexport();
  led_3.writeSync(0);
  led_3.unexport();
  led_4.writeSync(0);
  led_4.unexport();
  led_5.writeSync(0);
  led_5.unexport();
  led_6.writeSync(0);
  led_6.unexport();
  led_7.writeSync(0);
  led_7.unexport();
  led_8.writeSync(0);
  led_8.unexport();
  console.log('Bye, Bye!');
  process.exit();
});