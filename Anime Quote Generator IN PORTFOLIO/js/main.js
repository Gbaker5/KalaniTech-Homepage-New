//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  
  //const choice = document.querySelector('input').value
  const url = 'https://animechan.vercel.app/api/random'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.anime)
        console.log(data.character)
        console.log(data.quote)

        document.querySelector('h2').innerText = 'Anime:'+' '+data.anime
        document.querySelector('h3').innerText = '~'+'Character:'+' '+data.character+'~'
        document.querySelector('h4').innerText = '"' + data.quote + '"'
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

     
}

