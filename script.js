document.addEventListener('DOMContentLoaded', () => {

    // 1. FAQ Accordion Alternável
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        const icon = item.querySelector('.faq-icon');

        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Fecha todos os outros
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const otherIcon = otherItem.querySelector('.faq-icon');
                if (otherIcon) otherIcon.textContent = '+';
            });

            // Alterna o atual
            if (!isActive) {
                item.classList.add('active');
                icon.textContent = '−';
            }
        });
    });

    // 2. Animação de Contagem dos Números
    const counters = document.querySelectorAll('.counter');
    let animated = false;

    const startCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const speed = target / 50;

            const updateCount = () => {
                count += speed;
                if (count < target) {
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, 30);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Dispara a animação dos números ao rolar até a seção
    window.addEventListener('scroll', () => {
        const section = document.querySelector('.counters-section');
        if (section) {
            const sectionPos = section.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;

            if (sectionPos < screenPos && !animated) {
                startCounters();
                animated = true;
            }
        }
    });

    // 3. Clique do Vídeo Placeholder
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', () => {
            alert('Aviso: Substitua este container pelo iframe do seu player de vídeo (Panda Video, YouTube ou Vimeo).');
        });
    }
});