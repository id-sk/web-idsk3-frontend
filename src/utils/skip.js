export const handleSkip = (event) => {
    event.preventDefault();

    const mainElement = document.querySelector('main');

    if (mainElement) {
        mainElement.setAttribute('tabIndex', '-1');

        mainElement.focus();

        mainElement.addEventListener('blur', () => {
            mainElement.removeAttribute('tabIndex');
        }, { once: true });
    }
};