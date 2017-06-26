var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  	var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    
    $.ajax({
  		dataType: 'json',
        url: url + countryName,
  		data: null,
        method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
  countriesList.empty();
    resp.forEach(function(item){
   	$('<li>').text('nazwa angielska: ' + item.name).appendTo(countriesList);
    $('<li>').text('nazwa w języku lokalnym: ' + item.nativeName).appendTo(countriesList);
    $('<li>').text('stolica: ' + item.capital).appendTo(countriesList);
    $('<li>').text('kontynent: ' + item.region).appendTo(countriesList);
       
    });
}
