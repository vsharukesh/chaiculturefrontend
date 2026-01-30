document.addEventListener('DOMContentLoaded', function() {
    const productsSection = document.querySelector('.products');
    const floatingElements = document.createElement('div');
    floatingElements.className = 'floating-elements';
    productsSection.prepend(floatingElements);

    // Create floating elements
    const elementsCount = 15;
    const elements = [
        { emoji: '🍃', size: 'medium' },
        { emoji: '✨', size: 'small' },
        { emoji: '☕', size: 'large' },
        { emoji: '🌿', size: 'medium' },
        { emoji: '🌟', size: 'small' },
        { emoji: '🌱', size: 'medium' },
        { emoji: '💫', size: 'small' },
        { emoji: '🌾', size: 'large' },
        { emoji: '🌼', size: 'medium' },
        { emoji: '🌻', size: 'large' },
        { emoji: '🍂', size: 'medium' },
        { emoji: '🌺', size: 'small' },
        { emoji: '🌸', size: 'medium' },
        { emoji: '🌹', size: 'large' },
        { emoji: '🌷', size: 'small' }
    ];

    for (let i = 0; i < elementsCount; i++) {
        const element = document.createElement('div');
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        
        element.className = `floating-element floating-${randomElement.size}`;
        element.textContent = randomElement.emoji;
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.animationDelay = `${Math.random() * 5}s`;
        element.style.animationDuration = `${15 + Math.random() * 30}s`;
        element.style.fontSize = `${0.5 + Math.random() * 2}rem`;
        element.style.opacity = 0.2 + (Math.random() * 0.6);
        
        // Random rotation
        element.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        // Random movement direction
        const direction = Math.random() > 0.5 ? 1 : -1;
        element.style.setProperty('--direction', direction);
        
        floatingElements.appendChild(element);
    }

    // Add mousemove effect
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.documentElement.style.setProperty('--mouse-x', x);
        document.documentElement.style.setProperty('--mouse-y', y);
    });
});
