'use strict';

function getDataFromApi(artist, title, callback) {
  const BASE_URL = `https://api.lyrics.ovh/v1/${artist}/${title}`;
  $.ajax({
    type:'GET',
    url: `${BASE_URL}`,
    dataType: 'json',
    success: callback
  });
}

function displaySearchData(data) {
  // const results = JSON.stringify(data.lyrics).replace(/\\n/g, "<br>").replace(/\\r/g, "");;
  // $('.js-search-results').html(results);
  $('.js-search-results').html(data.lyrics);
}

function watchSubmit() {
  $('.js-search-form').submit(function(event) {
    event.preventDefault();
    const queryArtist = $('.js-query-artist').val();
    const queryTitle = $('.js-query-title').val();
    $('.js-query-artist').val('');
    $('.js-query-title').val('');
    getDataFromApi(queryArtist, queryTitle, displaySearchData);
  });
}

$(watchSubmit);
