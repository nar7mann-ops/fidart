const worksBtn = document.getElementById('worksBtn');
const worksSection = document.getElementById('worksSection');

worksBtn.addEventListener('click', () => {
  worksBtn.style.display = "none"; // скрыть кнопку после нажатия
  worksSection.classList.remove('hidden');
  setTimeout(() => {
    worksSection.classList.add('visible');
  }, 50);
});