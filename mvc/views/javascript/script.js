document.querySelector('#add_more_input').addEventListener('click', (e) => {
  const formControlLength = document.querySelectorAll(
    '#images_input_container .form-control'
  ).length
  if (formControlLength < 6) {
    const div = document.createElement('div')
    div.classList.add('form-group')

    div.innerHTML = `<input type="string" class="form-control" placeholder="Enter image url ${
      formControlLength + 1
    }" id="image_url_${formControlLength + 1}" name="image_url_${
      formControlLength + 1
    }" required="" value="">`

    document.querySelector('#images_input_container').appendChild(div)

    document.querySelector('#images-length').value = formControlLength + 1
  } else {
    alert("Can't add more than 6 images.")
  }
})
