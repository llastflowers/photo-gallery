export default function renderCreatures(image) {
    const html = /*html*/`
        <li>
            <img src="${image.url}" title="${image.description}">
            <h2>${image.title}</h2>
            <p>Horns: ${image.horns}</p>
        </li>
    `;

    return html;
}