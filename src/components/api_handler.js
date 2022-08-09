const checkValues = async () => {
  const form = new FormData(document.forms[0]);
  const token = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then((response) => response.json())
    .then((data) => data.token);
  await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
    method: 'POST',
    body: form,
    headers: {
      Token: token,
    },
  })
    .then((response) => response.json()).then((data) => {
      if (data.success) {
        alert(data.message);
      } else {
        console.log(data);
      }
    })
    .catch((error) => { alert(error.message); });
};
export default checkValues;
