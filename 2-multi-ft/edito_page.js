const $application = document.getElementById("application");

const humains = {
    name: 'Mes collègues',
    variants: [
        {
            uid: 'edito_benjamin',
            poste: 'DEV',
            nom: 'Benjamin Mercier',
            surnom: 'Junior',
            image: '',
            equipe: 'EDITO',
        },
        {
            uid: 'edito_florian',
            poste: 'DEV',
            nom: 'Florian Lacour',
            surnom: 'Lacourse',
            image: '',
            equipe: 'EDITO',
        },
        {
            uid: 'edito_anais',
            poste: 'BA',
            nom: 'Anais Durieux',
            surnom: 'La baronne',
            image: '',
            equipe: 'EDITO',
        },
        {
            uid: 'edito_alexandre',
            poste: 'QA',
            nom: 'Alexandre Boidin',
            surnom: 'Alweix',
            image: '',
            equipe: 'EDITO',
        },
        {
            uid: 'edito_douglas',
            poste: 'QA',
            nom: 'Douglas Six',
            surnom: 'Doug',
            image: '',
            equipe: 'EDITO',
        },
        {
            uid: 'archi_antoine',
            poste: 'Architecte',
            nom: 'Antoine Millecamps',
            surnom: 'Grand chef',
            image: '',
            equipe: 'ARCHI',
        }
    ],
}

const etat = {
    uid: 'edito_alexandre',
}

function renderImage(uid)
{
    return `<img src='./img/image_`+((uid).length%3)+`.png' width="auto" height="400px"/>`
}

function renderOption(variant) {
    const active = (etat.uid === variant.uid ? true : false);
    disabled = '';
    if(active)
    {
        disabled = 'disabled'
    }
    return `
      <button type="button" ${disabled} data-uid="${variant.uid}">
        <b>${variant.nom}</b>
      </button>
    `;
  }

function renderPage()
{
    const variant = humains.variants.find( v => etat.uid === v.uid);

    $application.innerHTML = `
        <h1>CDD Ecomm</h1>
        <h2 id="name">
            ${variant.nom}
        </h2>
        <div id="photo">
            ${renderImage(etat.uid)}
        </div>
        <div>
            ${variant.nom} (ou ${variant.surnom} pour les intimes) est ${variant.poste} au sein de la FT ${variant.equipe}.
        </div>
        <div id="lesCollegues">
            <p>Ses collègues sont: </p>
            <div id="options">
                    ${humains.variants.map(renderOption).join('')}
            </div>
        </div>
        <checkout-panier uid='xray-gamma-delta-0xDEADBEEF-${variant.uid}'></checkout-panier>
    `;
}

function addListeners()
{
    const $btns = document.querySelectorAll('#options button');
    Array.prototype.forEach.call($btns, $btn => {
        $btn.addEventListener('click', handleClickOption);
    });
}

function removeListeners()
{
    const $btns = document.querySelectorAll('#options button');
    Array.prototype.forEach.call($btns, $btn => (
       $btn.removeEventListener('click', handleClickOption)
  ));
}

function handleClickOption(e)
{
    const uid = e.currentTarget.getAttribute('data-uid');
    etat.uid = uid;
    rerender();
}

function rerender() {
    removeListeners();
    renderPage();
    addListeners();
  }

renderPage();
addListeners();