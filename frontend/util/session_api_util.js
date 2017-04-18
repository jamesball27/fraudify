export const signUp = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const logIn = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const logOut = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
