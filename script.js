document.addEventListener('DOMContentLoaded', function() {
    let arr = [];
    const library = document.querySelector('.library');
    let id=0;

    function addBook(id,image,name, description, author, date) {
        const book = {
            id:id,
            name: name,
            image:image,
            description: description,
            author: author,
            date: date,
            info: function() {
                const container = document.createElement('div');
                container.classList.add('container')

                
                
                const nameElement = document.createElement('h1');
                const descriptionElement = document.createElement('h2');
                const authorElement = document.createElement('h3');
                const dateElement = document.createElement('h4');
                const imageElement=document.createElement('img')
                const btn=document.createElement('button')

                btn.innerText='Delete'
                btn.classList.add('delete')
                btn.addEventListener('click', function() {
                    const bookIndex = arr.findIndex(b => b.id === id);
                    if (bookIndex !== -1) {
                        arr.splice(bookIndex, 1);
                    }
                    library.removeChild(container);
                    library.removeChild(btn)
                });



                nameElement.textContent = `Name: ${this.name}`;
                descriptionElement.textContent = `Description: ${this.description}`;
                authorElement.textContent = `Author: ${this.author}`;
                dateElement.textContent = `Date: ${this.date}`;
                imageElement.src=this.image;
                imageElement.classList.add('imagi')
                
                library.appendChild(container)
                library.appendChild(btn)

                container.appendChild(imageElement)
                container.appendChild(nameElement);
                container.appendChild(descriptionElement);
                container.appendChild(authorElement);
                container.appendChild(dateElement);
            }
        };
        arr.push(book);
        book.info();
    }

    const form = document.querySelector('.form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.querySelector('.name').value;
        const description = document.querySelector('.description').value;
        const author = document.querySelector('.author').value;
        const date = document.querySelector('.date').value;
        const image=document.querySelector('.image').value

        id++;
        addBook(id,image,name, description, author, date);
        form.reset();
        console.log(arr)
    });
});



