// Edit styles of custom input.type=file
export const uploadFile = () => {
  document.querySelector('#file').click();
};
export const changeLabel = () => {
  if (document.querySelector('#file').value) {
    document.querySelector('#custom-text').innerHTML = document.querySelector('#file').value;
  }
};

// Check if inputs are valid
const validate = (regex, err, node1) => (node2) => {
  const span = document.querySelector(`#format-${err}`);
  if (!node2) {
    if (node1.value.match(regex)) {
      span.hidden = true;
      return node1.classList.remove('error');
    }
    span.hidden = false;
    return node1.classList.add('error');
  }
  return (node3) => {
    if (new RegExp(/(.jpeg|.jpg)$/).test(node1.value)) {
      span.hidden = true;
      node2.classList.remove('error');
      node3.classList.remove('error');
    } else {
      span.hidden = false;
      node2.classList.add('error');
      node3.classList.add('error');
    }
  };
};

export default validate;
