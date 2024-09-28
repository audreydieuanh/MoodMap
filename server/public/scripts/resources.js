const renderResources = async () => {
    try {
        const response = await fetch('/resources');

        // Check if the response is okay
        if (!response.ok) {
            throw new Error(`Failed to fetch resources: ${response.statusText}`);
        }

        const data = await response.json();
        const mainContent = document.getElementById('main-content');

        // Check if data is an array and has resources
        if (data && Array.isArray(data) && data.length > 0) {
            data.map(resource => {
                const card = document.createElement('div');
                card.classList.add('card', 'p-4', 'bg-light-blue', 'rounded-lg', 'shadow-md');

                const topContainer = document.createElement('div');
                topContainer.classList.add('top-container', 'bg-light-blue-200', 'h-32', 'rounded-t-lg');
                topContainer.style.backgroundImage = `url(${resource.image})`;

                const bottomContainer = document.createElement('div');
                bottomContainer.classList.add('bottom-container', 'p-2', 'bg-white', 'rounded-b-lg');

                const resourceName = document.createElement('h3');
                resourceName.classList.add('text-pink-500');
                resourceName.textContent = resource.title;
                bottomContainer.appendChild(resourceName);

                const resourceDescription = document.createElement('p');
                resourceDescription.classList.add('text-gray-700');
                resourceDescription.textContent = resource.description;
                bottomContainer.appendChild(resourceDescription);

                const learnMore = document.createElement('a');
                learnMore.href = `/resources/${resource.id}`;
                learnMore.classList.add('text-lavender-500', 'hover:underline');
                learnMore.textContent = 'Learn More >';
                bottomContainer.appendChild(learnMore);

                card.appendChild(topContainer);
                card.appendChild(bottomContainer);
                mainContent.appendChild(card);
            });
        } else {
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'No resources found.';
            mainContent.appendChild(errorMessage);
        }
    } catch (error) {
        console.error('Error loading resources:', error); // Log the error
        const mainContent = document.getElementById('main-content');
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'An error occurred while loading the resources. Please try again later.';
        mainContent.appendChild(errorMessage);
    }
};

renderResources();

const renderResource = async () => {
    const requestID = parseInt(window.location.href.split('/').pop());
    const response = await fetch(`/resources`);
    const data = await response.json();

    const resourceContent = document.getElementById('resource-content');
    let resource;
    if (data) {
        resource = data.find(resource => resource.id === requestID);
        document.getElementById('image').src = resource.image;
        document.getElementById('name').textContent = resource.title;
        document.getElementById('type').textContent = resource.type;
        document.getElementById('target-audience').textContent = resource.targetAudience;
        document.getElementById('description').textContent = resource.description;
        document.title = `Resource - ${resource.title}`;
    } else {
        const errorMessage = document.createElement('h2');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'Resource not found.';
        resourceContent.appendChild(errorMessage);
    }
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
    window.location.href = '../404.html'
  }
  else {
    renderResource();
  }

