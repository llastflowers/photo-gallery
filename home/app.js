import renderCreatures from '../home/render-creatures.js';
import htmlToDOM from '../util/html-to-DOM.js';
import images from '../data/images.js';

const list = document.querySelector('.creatures');
const keywordFilter = document.querySelector('keyword-filter');

keywordFilter.addEventListener('change', () => {
    const filter = keywordFilter.nodeValue;
    let filteredCreatures = null;

    if (!filter) {
        filteredCreatures = images;
    }
    else {
        filteredCreatures = images.filter(image =>
        {
            return image.type === filter;
        });
    }

    render(filteredCreatures);
});

function render(creaturesToRender) {
    while (list.lastElementChild) {
        list.lastElementChild.remove();
    }

    creaturesToRender.forEach(image => {
        const html = renderCreatures(image);
        const dom = htmlToDOM(html);
        list.appendChild(dom);
    });
}