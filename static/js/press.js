(() => {
  'use strict'; // strict mode

  const lineup = [{
      titel: 'The Beautiful Dreamer — ParisStrelitzia construction',
      undertitel: 'The first permanent public art sculpture by Arne Quinze in France',
      description: `“Arne Quinze continues his journey to reshape our cities into more human environments with this...`,
      picture1: '/arne-quinze/static/images/press_1.jpg',
      
    },
    {
      titel: 'General — 2019',
      undertitel: 'Arne Quinze press release',
      description: '“My Secret Garden Valencia” presents a series of six public sculptures that will enter into...',
      picture1: '/arne-quinze/static/images/press_2.jpg',
      
    },
    {
      titel: 'General — 2019',
      undertitel: 'Arne Quinze press release',
      description: 'Arne Quinze keeps on contesting the greyness and dullness of the environments we live in. After...',
      picture1: '/arne-quinze/static/images/press_3.jpg',
      
    },
    {
      titel:'Bäng Magazin meets Arne Quinze' ,
      undertitel: 'Printed press — Austria',
      description: 'The people from Bäng magazine, an Austrian lifestyle magazine, together with Günther Egger, an...',
      picture1: '/arne-quinze/static/images/press_4.jpg',
    
    },
    {
      titel: 'Cidade Matarazzo',
      undertitel: 'Printed press — Interviews by Jean Nouvel, Philippe Starck, Campana brothers and Arne Quinze',
      description: `At the heart of São Paulo, the Cidade Matarazzo is planned for completion by 2020. The project...`,
      picture1: '/arne-quinze/static/images/press_5.jpg',
      
    },
    {
      titel: 'Spanish television Àpunt: Arne Quinze in Valencia',
      undertitel: 'Television news interview',
      description: `"La Ciutat de les Arts i de les Ciències acull l'exposició escultòrica "My secret garden", sis...`,
      picture1: '/arne-quinze/static/images/youtube.png',
    
    },
  ]

  // Select the HTML element with id="students"
  const lineupElement = document.getElementById('box');
  if (lineupElement !== null) {

    let tempStr = '';
    lineup.forEach(lineup => {
      tempStr += `

                            <div class="g-fb-col-4 press_box">
                            <img src="${lineup.picture1}"></img>
                            <h3>${lineup.undertitel}</h3>
					                  <h2>${lineup.titel}</h2>
					                  <p>${lineup.description}</p>
					                  <p><a class="is-link">download article</a></p>
				
                            </div>
      `;
    });
    lineupElement.innerHTML = tempStr;
  }
})();