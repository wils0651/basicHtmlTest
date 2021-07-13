
(function() {
    var httpRequest;
    //document.getElementById("ajaxButton").addEventListener('click', makeRequest);

    function makeRequest(url) {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = alertContents;
        //httpRequest.open('GET', 'assets/test.xml');
        httpRequest.open('GET', url);
        httpRequest.send();
    }

    function alertContents() {
        try {
          if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var xmldoc = httpRequest.responseXML;
                var root_node = xmldoc.getElementsByTagName('root').item(0);
                alert(root_node.firstChild.data);
            } else {
              alert('There was a problem with the request.');
            }
          }
        }
        catch( e ) {
          alert('Caught Exception: ' + e.description);
        }
    }
      
})();
  