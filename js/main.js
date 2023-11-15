(() => {
  const headings = document.querySelectorAll('.footer__heading');
  headings.forEach((heading) => {
    heading.addEventListener('click', () => {
      const panel = heading.nextElementSibling;
      heading.classList.toggle('active');
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });
  });
})();
