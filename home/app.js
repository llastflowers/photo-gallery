import renderCreatures from '../home/render-creatures.js';
import htmlToDOM from '../util/html-to-DOM.js';
import images from '../data/images.js';

const list = document.querySelector('.creatures');

images.forEach(image => {
    const htmlString = renderCreatures(image);
    const dom = htmlToDOM(htmlString);
    list.appendChild(dom);
});

// const keywordFilter = document.querySelector('keyword-filter');

// keywordFilter.addEventListener('change', () => {
    
//     const filter = keywordFilter.value;
//     let filteredCreatures = null;

//     if (!filter) {
//         filteredCreatures = images;
//     }
//     else {
//         filteredCreatures = images.filter(image =>
//         {
//             if (image.type === filter) {
//                 return true;
//             } else {
//                 return false;
//             }
//         });
//     }

//     render(filteredCreatures);
// });

// function render(creaturesToRender) {
//     while (list.lastElementChild) {
//         list.lastElementChild.remove();
//     }

//     creaturesToRender.forEach(image => {
//         const html = renderCreatures(image);
//         const dom = htmlToDOM(html);
//         list.appendChild(dom);
//     });
// }