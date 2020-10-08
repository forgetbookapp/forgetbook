
const callback = callback => {
    console.log(callback)
  };
  
  chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
          case "deleteCount":
              console.log('message.contents: '+message.contents)
              document.getElementById("delete#").innerHTML = 'Processed '+String(message.contents)+' actions';
              sendResponse();
              break;
          case "sendCount":
              console.log('message.contents: '+message.contents)
              document.getElementById("activity#").innerHTML = 'Left off on action #: '+String(message.contents) + '</br></br>(Use the number '+String(message.contents)+' in \'Actions to skip:\' to start where you left off)';
              sendResponse();
              break;
          default:
              console.log("Unrecognised message: ", message);
        }
    }
  );
  let StartDeleteBtn = document.getElementById('StartDeleteBtn');
  StartDeleteBtn.onclick = function() {
  
    var quantity = document.getElementById("quantity").value;
  
    var speed = document.getElementById('speeds').value;
  
    var photos = document.getElementById('photos').value;
  
  
  chrome.tabs.executeScript(
    {code:'terminator.terminate('+quantity+', '+speed+', '+photos+');'}
  );
  
  };  
  let StopDeleteBtn = document.getElementById('StopDeleteBtn');
  StopDeleteBtn.onclick = function() {
  chrome.tabs.executeScript(
    {code:'location.reload();'}
  );
  };  