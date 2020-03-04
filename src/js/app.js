const container = document.querySelector('.container');
const buttonCollapse = document.querySelector('#collapse-button');
const collapsible = document.createElement('div');
collapsible.classList.add('collapsible', 'collapsed');
collapsible.textContent = 'Tourette syndrome is a neurodevelopmental disorder which begins during childhood or adolescence. It is characterized by tics (video shown) such as blinking, coughing, sniffing, or facial movements that are a somewhat suppressible response to an unwanted urge. Once considered rare, Tourette\'s occurs in about 1% of people under eighteen, although many go undiagnosed or never seek medical care. There is no specific test for diagnosis and Tourette\'s is not always correctly identified because most cases are mild.';
container.appendChild(collapsible, buttonCollapse.nextSibling);

function toggleCollapse() {
  collapsible.classList.toggle('collapsed');
  collapsible.removeEventListener('transitionend', toggleCollapse);
}

buttonCollapse.addEventListener('click', () => {
  if (collapsible.classList.contains('collapsed')) {
    toggleCollapse();
    collapsible.style.maxHeight = `${collapsible.scrollHeight}px`;
  } else {
    collapsible.style.maxHeight = 0;
    collapsible.addEventListener('transitionend', toggleCollapse);
  }
});
