chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction',
  });
  chrome.runtime.onMessage.addListener((msg, sender, response) => {
      if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
      var domInfo = {
        total: document.querySelectorAll('*').length,
        inputs: document.querySelectorAll('input').length,
        buttons: document.querySelectorAll('button').length,
      };
    response(domInfo);
    }
  });