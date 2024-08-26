import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import minhaImagem from './assets/minhaImagem.png';

const formatPhoneNumber = (value) => {
  const cleaned = value.replace(/\D/g, '').slice(0, 11);
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return cleaned;
};

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePhoneNumber = (phone) => {
  return /^\(\d{2}\) \d{5}-\d{4}$/.test(phone);
};

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  });

  const [errors, setErrors] = useState({
    nome: '',
    email: '',
    telefone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'telefone') {
      setFormData({
        ...formData,
        [name]: formatPhoneNumber(value)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let valid = true;
    const newErrors = {
      nome: '',
      email: '',
      telefone: ''
    };

    if (!formData.nome) {
      newErrors.nome = 'O nome é obrigatório';
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = 'O e-mail é obrigatório';
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'E-mail inválido';
      valid = false;
    }
    if (!formData.telefone) {
      newErrors.telefone = 'O telefone é obrigatório';
      valid = false;
    } else if (!validatePhoneNumber(formData.telefone)) {
      newErrors.telefone = 'Telefone inválido';
      valid = false;
    }

    if (valid) {
      console.log(formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.content}>
        <div style={styles.formContainer}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Nome:</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Digite seu nome"
                style={styles.input}
              />
              {errors.nome && <div style={styles.error}>{errors.nome}</div>}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>E-mail:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu e-mail"
                style={styles.input}
              />
              {errors.email && <div style={styles.error}>{errors.email}</div>}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Telefone:</label>
              <div style={styles.phoneContainer}>
                <span style={styles.prefix}>+55 </span>
                <input
                  type="text"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(XX) XXXXX-XXXX"
                  style={styles.phoneInput}
                />
              </div>
              {errors.telefone && <div style={styles.error}>{errors.telefone}</div>}
            </div>
            <button type="submit" style={styles.button}>Enviar</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundImage: `url(${minhaImagem})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    color: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '50px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '60px',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '500px',
    marginTop: '-130px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    textAlign: 'left',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    marginBottom: '5px',
    textAlign: 'left',
    width: '100%',
    fontSize: '16px',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  phoneContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  prefix: {
    fontSize: '16px',
    color: '#ccc',
    marginRight: '8px',
  },
  phoneInput: {
    width: 'calc(140% - 100px)', 
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '12px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#333',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
  },
};

export default App;
