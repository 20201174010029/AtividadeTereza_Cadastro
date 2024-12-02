const registerForm = document.getElementById('registerForm');
const messageBox = document.getElementById('message');

registerForm.addEventListener('submit', async (event) => {

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const userData = {
    name,
    email,
    password
  };

  try {
    const response = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    const data = await response.json();

    if (response.status === 201) {
      messageBox.innerHTML = `<p style="color: green;">${data.message}</p>`;
      registerForm.reset();
    } else {
      messageBox.innerHTML = `<p style="color: red;">${data.message}</p>`;
    }
  } catch (error) {
    messageBox.innerHTML = `<p style="color: red;">Erro ao tentar cadastrar o usuário.</p>`;
    console.error('Erro ao enviar requisição:', error);
  }
});
