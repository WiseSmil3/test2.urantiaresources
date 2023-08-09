window.addEventListener('DOMContentLoaded', (event) => {
    fetch('resources.json')
        .then(response => response.json())
        .then(data => {
            const resourcesElement = document.getElementById('resources');
            data.forEach(resource => {
                const resourceCard = document.createElement('div');
                resourceCard.classList.add('resource-card');
                resourceCard.innerHTML = `
                    <h2>${resource.name}</h2>
                    <p>${resource.description}</p>
                    <a href="${resource.url}" target="_blank">Go to resource</a>
                `;
                resourcesElement.appendChild(resourceCard);
            });
        });
});
