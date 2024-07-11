 // Add your code here
function submitData(name, email) {
    let url = 'http://localhost:3000/users'

    let headers = {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
    }


    let body = JSON.stringify({
        name: name,
        email:email
    })


    return fetch(url, {
        method: 'POST',
        headers : headers,
        body: body
    }).then(res => res.json()).then((data) => {

        const id = data.id
        const idElement = document.createElement('p')
        idElement.textContent = `New ID: ${id}`
        document.body.appendChild(idElement)
    }).catch(
        (error) => {
            const errorMessage = error.message
            const errorElement = document.createElement('p')
            errorElement.textContent = errorMessage
            document.body.appendChild(errorElement)
        }
    )
}