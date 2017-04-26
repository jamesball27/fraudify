export const fetchSearchResults = (search_term) => (
  $.ajax({
    method: 'GET',
    url: '/api/search',
    data: { search: { search_term } }
  })
);
