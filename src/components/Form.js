import React, { useEffect } from 'react';
import checkValues from './api_handler';
import validate, { uploadFile, changeLabel } from './validation';

/* eslint-disable */
const name = /^[a-z ,.'-]+$/i;
const email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const phone = /^[\+]{0,1}380([0-9]{9})$/;
/* eslint-enable */

function Form() {
  useEffect(() => {
    const form = document.forms[0];
    const nameNode = form[0];
    const emailNode = form[1];
    const phoneNode = form[2];
    const fileNode = form[7];
    const fileButton = document.querySelector('#custom-button');
    const fileText = document.querySelector('.file-input');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      checkValues();
    });
    form.addEventListener('change', async () => {
      if (nameNode.value && emailNode.value && phoneNode.value && fileNode.value && !nameNode.classList.contains('error') && !emailNode.classList.contains('error') && !phoneNode.classList.contains('error') && !fileNode.classList.contains('error')) {
        document.querySelector('.form-btn').disabled = false;
      } else {
        document.querySelector('.form-btn').disabled = true;
      }
    });
    nameNode.addEventListener('change', () => {
      validate(name, 'name', nameNode)();
    });
    emailNode.addEventListener('change', () => {
      validate(email, 'email', emailNode)();
    });
    phoneNode.addEventListener('change', () => {
      validate(phone, 'phone', phoneNode)();
    });
    fileNode.addEventListener('change', () => {
      validate(null, 'file', fileNode)(fileButton)(fileText);
    });
  }, []);

  return (
    <div className="form">
      <h1>Working with POST request</h1>
      <form>
        <input type="text" name="name" className="text-inpt" placeholder="Your name" required />
        <span className="format" id="format-name" hidden="hidden">Name cannot be  blank</span>
        <br />
        <input type="email" name="email" className="text-inpt" placeholder="Email" required />
        <span className="format" id="format-email" hidden="hidden">Invalid email</span>
        <br />
        <input type="phone" name="phone" className="text-inpt" placeholder="Phone" required />
        <br />
        <span className="format" id="format-phone" hidden="hidden">Invalid Phone number</span>
        <p id="radio-title">Select your position</p>
        <label htmlFor="position_id">
          <input type="radio" name="position_id" value={1} required />
          Frontend developer
        </label>
        <br />
        <label htmlFor="position_id">
          <input type="radio" name="position_id" value={2} required />
          Backend developer
        </label>
        <br />
        <label htmlFor="position_id">
          <input type="radio" name="position_id" value={3} required />
          Designer
        </label>
        <br />
        <label htmlFor="position_id">
          <input type="radio" name="position_id" value={4} required />
          QA
        </label>
        <br />
        <div className="file-input">
          <input onChange={() => changeLabel()} name="photo" type="file" id="file" accept="image/png, image/jpeg" hidden="hidden" required />
          <button onClick={() => uploadFile()} type="button" id="custom-button">Upload</button>
          <span id="custom-text">Upload your photo</span>
        </div>
        <span className="format" id="format-file" hidden="hidden">Photo should be of .jpeg or .jpg format</span>
        <button type="submit" className="form-btn" disabled>Sign up</button>
      </form>
    </div>
  );
}
export default Form;
