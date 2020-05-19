(() => {
  'use strict'; // strict mode

  const lineup = [{
      titel: 'Chameleon - Chroma series',
      undertitel: 'Chroma Lupines in Arne Quinze\'s garden',
      location: 'Sculpture — Studio, Sint-Martens-Latem, Belgium',
      picture1: '/arne-quinze/static/images/art1.jpg',
      picture2: '/arne-quinze/static/images/art2.jpg',
      picture3: '/arne-quinze/static/images/art3.jpg',
      picture4: '',
    },
    {
      titel: 'Mojave & Sparsiflorus — Chroma series',
      undertitel: 'Arne Quinze\'s garden hosts a series of Chroma Lupines',
      location: 'Sculpture — Studio, Sint-Martens-Latem, Belgium',
      picture1: '/arne-quinze/static/images/4.jpg',
      picture2: '/arne-quinze/static/images/5.jpg',
      picture3: '/arne-quinze/static/images/6.jpg',
      picture4: '/arne-quinze/static/images/7.jpg',
    },
    {
      titel: 'In dialogue with Calatrava',
      undertitel: 'Sculpture exhibition docu film',
      location: 'Documentary — Valencia, Spain',
      picture1: '/arne-quinze/static/images/8.jpg',
      picture2: '/arne-quinze/static/images/9.jpg',
      picture3: '/arne-quinze/static/images/10.jpg',
      picture4: '/arne-quinze/static/images/11.jpg',
    },
    {
      titel: 'Lulu',
      undertitel: 'Lupine sculptures',
      location: 'Sculpture — Studio, Sint-Martens-Latem, Belgium',
      picture1: '/arne-quinze/static/images/13.jpg',
      picture2: '/arne-quinze/static/images/14.jpg',
      picture3: '/arne-quinze/static/images/15.jpg',
      picture4: '/arne-quinze/static/images/16.jpg',
    },
    {
      titel: 'The Twelve Months',
      undertitel: 'My Secret Garden docu film',
      location: 'Documentary',
      picture1: '/arne-quinze/static/images/19.jpg',
      picture2: '/arne-quinze/static/images/20.jpg',
      picture3: '/arne-quinze/static/images/21.jpg',
      picture4: '',
    },
    {
      titel: 'Alpine',
      undertitel: 'My Secret Garden Lupines',
      location: 'Sculpture',
      picture1: '/arne-quinze/static/images/22.jpg',
      picture2: '/arne-quinze/static/images/23.jpg',
      picture3: '/arne-quinze/static/images/24.jpg',
      picture4: '/arne-quinze/static/images/25.jpg',
    },
  ]

  // Select the HTML element with id="students"
  const lineupElement = document.getElementById('box');
  if (lineupElement !== null) {

    let tempStr = '';
    lineup.forEach(lineup => {
      tempStr += `
      <div class="wrapper wrapper--footer">
                    <div class="g-fb-container">
                        <div class="g-fb-row container">
                            <div class="g-fb-col-3 art_text">
                            <a href=""><p>${lineup.titel}</p>
                            </a>
                            <h3> ${lineup.undertitel}</p>
                            <h3> ${lineup.location}</h3>
                            </div>
                            <div class="g-fb-col-2 art_image">
                            <img src="${lineup.picture1}"></img>
                            </div>
                            <div class="g-fb-col-2 art_image">
                            <img src="${lineup.picture2}"></img>
                            </div>
                            <div class="g-fb-col-2 art_image">
                            <img src="${lineup.picture3}"></img>
                            </div>
                            <div class="g-fb-col-2 art_image">
                            <img src="${lineup.picture4}"></img>
                            </div>
                            
                        </div>
                      </div>
        </div>
      `;
    });
    lineupElement.innerHTML = tempStr;
  }
})();