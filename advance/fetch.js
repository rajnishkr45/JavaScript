
async function getAllUser() {
    try {
        const response = await fetch("https://api.github.com/users/rajnishrj");
        const data = response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getAllUser()