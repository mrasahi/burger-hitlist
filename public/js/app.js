document.getElementById('addBurger').addEventListener('click', event => {
    event.preventDefault()
    axios.post('/api/burgers', {burger_name: document.getElementById('burger_name').value})
        .then(res => {
            console.log(res.data)
            let burgerElem = document.createElement('li')
            burgerElem.className = 'list-group-item'
            burgerElem.dataset.id = res.data
            burgerElem.dataset.name =  document.getElementById('burger_name').value
            burgerElem.innerHTML = document.getElementById('burger_name').value
            document.getElementById('notDevoured').append(burgerElem)
            document.getElementById('burger_name').value = ''
        })
        .catch(err => {console.log(err)})
})


document.addEventListener('click', event => {
    if (event.target.classList.contains('list-group-item') && event.target.parentNode.id === 'notDevoured') {
        console.log('list group item clicked')
        console.log(event.target.dataset.id)
        console.log(event.target.dataset.name)
        axios.put(`/api/burgers/${event.target.dataset.id}`, {devoured: true} )
            .then(res => {
                let burgerElem = document.createElement('li')
                burgerElem.className = 'list-group-item'
                burgerElem.dataset.id = event.target.dataset.id
                burgerElem.innerHTML = event.target.dataset.name
                document.getElementById('devoured').append(burgerElem)
                event.target.remove()
            })
            .catch(err => {console.log(err)})
    }
})