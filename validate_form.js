function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (name === '' || email === '' || password === '' || myfile === '') {
        alert('Tous les champs doivent être remplis');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return false;
    }

    alert('Enregistrement réussi');
    return true;
}
