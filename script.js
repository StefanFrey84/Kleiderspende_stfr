function chooseBtn() {
    abholung = document.getElementById('abholung')
    adresse = document.getElementById('adresse')
        
    if(abholung.checked){
        adresse.style.display = 'block'
        document.getElementById('btnFertigAbgabe').style.display = 'none'
        sessionStorage.setItem('abholung', 'aktiv')
    }else{
        adresse.style.display = 'none'
        document.getElementById('btnFertigAbgabe').style.display = 'block'
        sessionStorage.setItem('abholung', 'inaktiv') 
    }
}

function beiAbholungEinblenden(){
  message2 = document.getElementById('message2')

  if(sessionStorage.getItem('abholung') == 'aktiv'){
    message2.style.display = 'block'
    }
}  

function fertigBtnAbgabe(){
  sessionStorage.setItem('lieferOrt', document.getElementById('lieferOrt').value);
  sessionStorage.setItem('hosen', document.getElementById('hosen').value);
  sessionStorage.setItem('pullover', document.getElementById('pullover').value);
  sessionStorage.setItem('jacken', document.getElementById('jacken').value);
  sessionStorage.setItem('schuhe', document.getElementById('schuhe').value);
  sessionStorage.setItem('sonstigeKleidung', document.getElementById('sonstigeKleidung').value);
  window.location = 'final.html'  
 
}

function fertigBtnAbholung(){ 
  sessionStorage.setItem('lieferOrt', document.getElementById('lieferOrt').value);
  sessionStorage.setItem('hosen', document.getElementById('hosen').value);
  sessionStorage.setItem('pullover', document.getElementById('pullover').value);
  sessionStorage.setItem('jacken', document.getElementById('jacken').value);
  sessionStorage.setItem('schuhe', document.getElementById('schuhe').value);
  sessionStorage.setItem('sonstigeKleidung', document.getElementById('sonstigeKleidung').value);
  sessionStorage.setItem('termin', document.getElementById('input').value)
  sessionStorage.setItem('anrede', document.getElementById('inputAnrede').value);
  sessionStorage.setItem('vorname', document.getElementById('inputVorname').value);
  sessionStorage.setItem('nachname', document.getElementById('inputNachname').value);
  sessionStorage.setItem('email', document.getElementById('inputEmail').value);
  sessionStorage.setItem('strasse', document.getElementById('inputStrasse').value);
  sessionStorage.setItem('hausnummer', document.getElementById('inputHausnummer').value);
  sessionStorage.setItem('plz', document.getElementById('inputPLZ').value);
  sessionStorage.setItem('stadt', document.getElementById('inputStadt').value);
  anrede = sessionStorage.getItem('anrede');
  vorname = sessionStorage.getItem('vorname');
  nachname = sessionStorage.getItem('nachname');
  email = sessionStorage.getItem('email');
  strasse = sessionStorage.getItem('strasse');
  hausnummer = sessionStorage.getItem('hausnummer');
  plz = sessionStorage.getItem('plz');
  stadt = sessionStorage.getItem('stadt');
  summary = document.getElementById('summary')

  if(vorname == ''|| nachname == '' || anrede == 'Choose...'|| email == ''|| strasse == ''|| hausnummer == '' || plz == '' || stadt == ''){
    summary.innerHTML = 'Bitte alle Felder ausfüllen';
  }else if(!plz.startsWith('75')){
      summary.innerHTML = 'Leider liegt Ihre Region außerhalb unserer Abholzone';
  }else{
    window.location = 'final.html';
    
  }

}



