self.addEventListener('message', function(e) {
  var data = e.data;
  switch (data.cmd) {
    case 'start':
      self.postMessage(data.msg + ' the worker is working' );
      break;
    case 'introduce':
      self.postMessage('How are you: ' + data.msg +'?');
      break;
    case 'stop':
      self.postMessage('WORKER HAS LEFT: ' + data.msg +
                       '. (buttons will no longer work)');
      self.close(); // Terminated
      break;
    default:
      self.postMessage('I do not understand: ' + data.msg);
  };
}, false);