const input = document.createElement('input');
input.type = 'text';
const paragraf = document.createElement('p');

document.body.append(input, paragraf);

input.addEventListener('input', () => {
  setTimeout(() => {
    paragraf.textContent = input.value;
  }, 300);
});
