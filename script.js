function toggleEliminated(card){
  card.classList.toggle('eliminated')
}

let cards = [
    {
      name: 'Sakura',
      image: 'images/characters_01.jpg'
    },
    {
      name: 'Tsubasa',
      image: 'images/characters_02.jpg'
    },
    {
      name: 'Kaito',
      image: 'images/characters_03.jpg'
    },
    {
      name: 'Aoi',
      image: 'images/characters_04.jpg'
    },
    {
      name: 'Ran',
      image: 'images/characters_05.jpg'
    },
    {
      name: 'Ichigo',
      image: 'images/characters_06.jpg'
    },
    {
      name: 'Yume',
      image: 'images/characters_07.jpg'
    },
    {
      name: 'Hikari',
      image: 'images/characters_08.jpg'
    },
    {
      name: 'Juri',
      image: 'images/characters_09.jpg'
    },
    {
      name: 'Mahiru',
      image: 'images/characters_10.jpg'
    },
    {
      name: 'Sumire',
      image: 'images/characters_11.jpg'
    },
    {
      name: 'Laura',
      image: 'images/characters_12.jpg'
    },
    {
      name: 'Mikan',
      image: 'images/characters_13.jpg'
    },
    {
      name: 'Mizuki',
      image: 'images/characters_14.jpg'
    },
    {
      name: 'Asahi',
      image: 'images/characters_15.jpg'
    },
    {
      name: 'Nina',
      image: 'images/characters_16.jpg'
    },
    {
      name: 'Yuzu',
      image: 'images/characters_17.jpg'
    },
    {
      name: 'Towa',
      image: 'images/characters_18.jpg'
    },
    {
      name: 'Fuwa',
      image: 'images/characters_19.jpg'
    },
    {
      name: 'Sophie',
      image: 'images/characters_20.jpg'
    }
  ] 

  function selectRandomCard(){
    let random = Math.random() * 19 
    let random2 = Math.round(random)
    console.log(random2)
    console.log(cards[random2])
    document.querySelector('.mysteryimg')
    document.querySelector('.mysteryimg').innerHTML = cards[random2].name
    document.querySelector('.mysteryperson').src = cards[random2].image
    

  }

console.log(selectRandomCard())