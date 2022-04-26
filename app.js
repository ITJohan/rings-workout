const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log(formData);
  const formProps = Object.fromEntries(formData);
  console.log(formProps);
});
