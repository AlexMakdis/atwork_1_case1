(() => {
  'use strict'; // strict mode

  const lineup = [{
      titel: 'Strelitzia construction',
      undertitel: 'Behind the scenes of the workshop',
      description: `Strelitzia is Latin for the commonly known crane flower, or 'bird of paradise', a plant...`,
      picture1: '/arne-quinze/static/images/atelier_1.jpg',
      
    },
    {
      titel: 'Rough construction video — The Beautiful Dreamer',
      undertitel: 'Creation and installation of a new sculpture in Paris',
      description: 'Arne Quinze finds it very important to develop our cities in closer relation to nature, and this...',
      picture1: '/arne-quinze/static/images/atelier_2.gif',
      
    },
    {
      titel: 'Finishing a public art installation in Paris',
      undertitel: 'Le Beau Rêveur',
      description: 'Inspired by an active romanticism, Arne Quinze continues his journey with this public sculpture...',
      picture1: '/arne-quinze/static/images/atelier_3.jpg',
      
    },
    {
      titel:'Le Beau Rêveur B/W' ,
      undertitel: 'Building a new sculpture in Paris',
      description: 'We are at the construction site of ‘The Beautiful Dreamer’ in Porte de Versailles, Paris....',
      picture1: '/arne-quinze/static/images/atelier_4.jpg',
    
    },
    {
      titel: 'Spray-painting The Beautiful Dreamer',
      undertitel: 'Natural Chaos sculpture for Paris',
      description: `Only one month left before heading to Paris for the setup of 'The Beautiful Dreamer'. The...`,
      picture1: '/arne-quinze/static/images/atelier_5.jpg',
      
    },
    {
      titel: 'Programming and testing Amazonia',
      undertitel: 'Bioluminescent Natural Chaos',
      description: `The idea for Amazonia emerged no less than 3 years ago after a series of travels through the...`,
      picture1: '/arne-quinze/static/images/atelier_6.gif',
    
    },
  ]

  // Select the HTML element with id="students"
  const lineupElement = document.getElementById('box');
  if (lineupElement !== null) {

    let tempStr = '';
    lineup.forEach(lineup => {
      tempStr += `

                            <div class="g-fb-col-4 atelier_box">
                            <img src="${lineup.picture1}"></img>
                            <h3>${lineup.undertitel}</h3>
					                  <h2>${lineup.titel}</h2>
					                  <p>${lineup.description}</p>
					                  <p><a class="is-link">Learn more</a></p>
				
                            </div>
      `;
    });
    lineupElement.innerHTML = tempStr;
  }
})();