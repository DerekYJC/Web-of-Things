var onoff = require('onoff'); 
var Gpio = onoff.Gpio,
  led = new Gpio(4, 'out');

var mqtt = require('mqtt');
var config = require('./config.json');
var thngId=config.thngId; 
var thngUrl='/thngs/'+thngId;
var thngApiKey=config.thngApiKey; 

var status=false;
var updateInterval;

var client = mqtt.connect("mqtts://mqtt.evrythng.com:443", {
  username: 'authorization',
  password: thngApiKey 
});

client.on('connect', function () {
  client.subscribe(thngUrl+'/properties/');
  client.subscribe(thngUrl+'/actions/all'); 
  updateProperty('livenow',true);
  if (! updateInterval) updateInterval = setInterval(function(){
    updateProperties()
  }, 1000);
});

client.on('message', function(topic, message) {
  var resources = topic.split('/');
  console.log(resources);
  if (resources[1] && resources[1] === "thngs"){ 
    if (resources[2] && resources[2] === thngId){  
      if (resources[3] && resources[3] === "properties"){
        var property = JSON.parse(message);
        console.log(property);
	if (property[0].key === 'status'){
	  status = property[0].value;}
        console.log('Property was updated: '+property[0].key+'='+property[0].value); 
      } else if (resources[3] && resources[3] === "actions"){
        var action = JSON.parse(message);
        handleAction(action); 
      }
    }
  }
});

function handleAction(action) {
  switch(action.type) { 
    case '_setStatus':
      console.log('ACTION: _setStatus changed to: '+action.customFields.status); 
      status=Boolean(action.customFields.status);
      updateProperty ('status',status);
      /* Do something else too */
      break;
    case '_setLevel':
      console.log('ACTION: _setLevel changed to: '+action.customFields.level);
      break;
    default:
      console.log('ACTION: Unknown action type: '+action.type);
      break;
  }
}

function updateProperties() {

  if (status == true) {
      	var v = 1;
	led.write(v, function () {
          console.log("Current LED 1 state: " + status);
        });
  } else if (status == false) {
  	var v = 0;
	led.write(v, function () {
          console.log("Current LED 1 state: " + status);
        });
  }

}

function updateProperty(property,value) {
  client.publish(thngUrl+'/properties/'+property, '[{"value": '+value+'}]');
}

process.on('SIGINT', function() { 
  updateProperty('livenow',false);
  clearInterval(updateInterval);
	client.end();
  led.writeSync(0);
  led.unexport();
  console.log('Bye, Bye!');
  process.exit();
});