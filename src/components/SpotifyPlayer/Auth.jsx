const client_id = 'a64d7ebd73b54a95b9a9dfdbcddd8ae2';
const client_secret = '217635506b8d4d0983bc426cde6eab9f';

const AuthOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
    },
    body: new URLSearchParams({
        grant_type: 'client_credentials'
    })
};
fetch('https://accounts.spotify.com/api/token', AuthOptions)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

export default AuthOptions;

