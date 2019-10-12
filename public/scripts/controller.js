// basic functionalities
function connectFunc(){
  // console.log("Connecting..");
  displayMessage("Connecting..");  
  // client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
  client = mqtt.connect(document.getElementById('broker').value)
  // console.log(document.getElementById('broker').value);
  displayMessage(document.getElementById('broker').value);

  client.on("connect", function(){
    // console.log("Successfully connected");
    displayMessage("Successfully connected");
  })

  client.on("message", function (topic, payload) {
    // console.log([topic, payload].join(": "));
    // console.log("Received { topic: " + topic + "; payload: " + payload + " }");
    displayMessage("Received { topic: " + topic + "; payload: " + payload + " }");
    // client.end();
  })
}

// function disconnectFunc(){
//   // console.log("subscribe");
//   // client.subscribe("mqtt/demo");
//   // client = mqtt.connect(document.getElementById('broker').value)
//   // console.log("Subscribe { topic: " + document.getElementById('sub-topic').value + " }");
//   displayMessage(document.getElementById('broker').value + " has been disconnected.")
// }

function publishFunc(){
  // console.log("publish");
  // client.publish("mqtt/demo", "hello world!");
  client.publish(document.getElementById('pub-topic').value, document.getElementById('pub-payload').value)
  // console.log("Published { topic: " + document.getElementById('pub-topic').value + "; payload: " + document.getElementById('pub-payload').value + " }");
  displayMessage("Published { topic: " + document.getElementById('pub-topic').value + "; payload: " + document.getElementById('pub-payload').value + " }");
  // console.log(document.getElementById('pub-topic').value);
  // console.log(document.getElementById('pub-payload').value);
}

// function unpublishFunc(){
//   // console.log("publish");
//   // client.publish("mqtt/demo", "hello world!");
//   client.unpublish(document.getElementById('pub-topic').value, document.getElementById('pub-payload').value)
//   // console.log("Published { topic: " + document.getElementById('pub-topic').value + "; payload: " + document.getElementById('pub-payload').value + " }");
//   displayMessage("Unpublished { topic: " + document.getElementById('pub-topic').value + " }");
//   // console.log(document.getElementById('pub-topic').value);
//   // console.log(document.getElementById('pub-payload').value);
// }

function subscribeFunc(){
  // console.log("subscribe");
  // client.subscribe("mqtt/demo");
  client.subscribe(document.getElementById('sub-topic').value);
  // console.log("Subscribe { topic: " + document.getElementById('sub-topic').value + " }");
  displayMessage("Subscribe { topic: " + document.getElementById('sub-topic').value + " }")
}

// function unsubscribeFunc(){
//   // console.log("subscribe");
//   // client.subscribe("mqtt/demo");
//   client.unsubscribe(document.getElementById('sub-topic').value);
//   // console.log("Subscribe { topic: " + document.getElementById('sub-topic').value + " }");
//   displayMessage("Unsubscribe { topic: " + document.getElementById('sub-topic').value + " }");
// }

function displayMessage(message) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(message);
  node.appendChild(textnode);
  document.getElementById("messages").appendChild(node);
}