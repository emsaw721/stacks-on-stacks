
async function Logout() {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    });

    if(response.ok) {
        document.location.replace('/'); 
    } else {
        alert(response.statusText); 
    }
}

export default Logout; 

document.querySelector('#logout').addEventListener('click', logout);