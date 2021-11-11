window.onload = () => {
    const baseUrl = "http://localhost:3000";

    fetch(`${baseUrl}/movies`).then( response => {
        return response.json()
    }).then(response => {
        const divMovies = document.getElementById("divMovies");
        console.log(response)
        
        for(movie of response){ 
           
            divMovies.innerHTML += `
            <div class="card" style="width: 18rem">
                <img
                    class="card-img-top"
                    src= ${movie.poster}
                    alt="Card image cap"
                />
                <div class="card-body">
                    <h5 class="card-title"> ${movie.nome}</h5>
                    <p class="card-text">
                        ${movie.sinopse}
                    </p>
                    <a href="#" class="btn btn-primary">Assistir este filme</a>
                </div>
            </div>`
        }
    })


    document.getElementById("btn-cadastro-filme").onclick = () => {

            const movie = {
                nome: document.getElementById('nome').value,
                sinopse: document.getElementById('sinopse').value,
                ano_lancamento: document.getElementById('data_lancamento').value,
                faturamento: document.getElementById('faturamento').value,
                poster: document.getElementById('poster').value,
                genero: document.getElementById('genero_id').value,
                created_at: "10/11/2021",
                updated_at: "10/11/2021"
            }
            
            const params = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body:  JSON.stringify(movie)
            }
    
           fetch(`${baseUrl}/movies`, params).then(response => {
               return response.json();
           }).then(response => {
               console.log(response);
           }).catch(erro => {
               console.log(erro)
           })
        }
   
}