function result(value, force = false) {
      if (isNaN(value) && !force) return;
      document.getElementById('out')
        .innerText = value;
    }
    
    function calc(sel) {
      var a, b;
      a = parseInt(document.calk.first.value);
      b = parseInt(document.calk.second.value);
      document.calk.second.classList.remove('error');
      switch (sel.getElementsByTagName('option')[sel.selectedIndex].value) {
        case '+':
          result(a + b);
          break;
        case '-':
          result(a - b);
          break;
        case '*':
          result(a * b);
          break;
        case "/":
          if (b === 0) {
            document.calk.second.classList.add('error');
            result('Делить на ноль нельзя', true);
          } else {
            result(a / b);
          }
          break;
        default:
          result("неверный символ", true)
          break;
      }
    }

    function proverka(input) {
      var value = input.value;
      var rep = /0/;
      if (rep.test(value)) {
        submitButton.disabled = 1;
        input.value = value;
        document.calk.second.classList.add('error');
      }
    }

    function onInput() {
      calc(document.calk.sel);
    }

    document.calk.first.addEventListener('input', onInput);
    document.calk.second.addEventListener('input', onInput);
    document.calk.sel.addEventListener('change', onInput);
    onInput();

    function f1(){
        var q = $('#four').val();
        $.getJSON("http://ip-api.com/json/" + q + "?callback=?", 
            function(data) {
            var table_body = "";
            $.each(data, function(k, v) {
                table_body += "<tr><td>" + k + "</td><td><b>" + v + "</b></td></tr>";
            });
            $("#GeoResults").html(table_body);
        });
    }

    function f2(){
        var q = $('#fice').val();
        var resultElement = document.getElementById('getResult1');
        resultElement.innerHTML='';
            axios.get("http://ip-api.com/json/" + q + "?callback=?")
                .then(function (response) {
                console.log(response)
                resultElement.innerHTML = generateSuccessHTMLOutput(response);
            })
                .catch(function (error) {
                resultElement.innerHTML = generateSuccessHTMLOutput(error);
            });
    }

    function generateSuccessHTMLOutput(response){
        return response.data
    }