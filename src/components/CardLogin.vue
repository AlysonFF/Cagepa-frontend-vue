<template>
  <div class="centralizacao-total">
    <div class="card">
      <div class="card-body">
        <button type="button" class="btn-voltar"><i class="fa-solid fa-arrow-left fa-2xl"></i></button>
        <div class="return-logo-cagepa">
          <img src="../assets/logo-completa.png" alt="logo-cagepa" class="logo_cagepa">
        </div>
        <h5 class="card-title">Login</h5>
        <form>
          <div class="form-group">
            <label for="username" class="information-label">CPF/CNPJ</label>
            <input type="text" class="form-control" id="username" placeholder="Insira seu CPF/CNPJ">
          </div>
          <div class="form-group password-input">
            <label for="password" class="information-label">Senha</label>
            <input type="password" class="form-control" id="password" placeholder="Insira sua senha">
          </div>
          <br>
          <div class="form-check">
            <input type="checkbox" class="fa" id="remember-me">
            <label class="form-check-label remember-label" for="remember-me">Lembrar CPF/CNPJ</label>
            <a href="#" class="link-esqueceu-senha">Esqueceu a senha ?</a>
          </div>
          <br>
          <button type="submit" class="btn-entrar" @click="usuarioEntrou">Entrar</button>
          <br>
          <p class="indicacao">Caso seja sua primeira vez <img src="../assets/pointingEmoji.svg" alt="pointing-emoji">
          </p>
          <button type="button" class="btn-criar" @click="createPassword">Cadastre uma senha</button>
        </form>
      </div>
    </div>
    <br><br>

    <!-- SEGUNDO CARD -->
    <div class="card card-informacoes">
      <img src="../assets/thinkingEmoji.svg" alt="thinking-emoji">
      <p class="informacao">Precisa de ajuda? Acesse nosso FAQ e encontre respostas rápidas e simples</p>
      <button class="btn-informacoes">Informações</button>
    </div>
  </div>
</template>



<script>
export default {
  name: 'Login',
  props: {
    msg: String
  },
  methods: {
    createPassword(){
      this.$router.push('/cadastro')
    },
    usuarioEntrou(){
      this.$route.push('/servicos')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


/*:root {*/
/*  --azul-claro: #1E293B;*/
/*  --cinza-claro: #999B9D;*/
/*  --azul-escuro: #1E293B;*/
/*  --azul-botoes: #005274;*/
/*  --cinza-indicacao: #1E293BB2;*/
/*  --cor-borda: 1px solid rgba(0, 0, 0, 0.15);*/
/*  --branco: white;*/
/*}*/


/*.centralizacao-total {*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  flex-direction: column;*/

/*  background-image: url("@/assets/fundo.jpg");*/
/*  background-size: cover;*/
/*  background-position: center center;*/
/*  background-repeat: no-repeat;*/
/*}*/


/* CARD INFORMAÇÔES */

.card.card-informacoes {
  width: 577px;
  height: 112px;
  align-items: center;
  display: flex;
}

.card-informacoes img{
  padding-left: 40px;
}

.card-informacoes .informacao{
  flex: 1;
  margin-right: 10px;
}


.btn-informacoes {
  border-radius: 4px;
  background: #005274;
  color: white;
  font-family: 'Inter', sans-serif;
  width: 139px;
  height: 40px;
  border: none;
  cursor: pointer;
  padding: 8px 17px;
  margin-right: 50px;
}

.informacao {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
}




/* CARD LOGIN */

.card {
    background-color: white;
    width: 576px;
    height: 603px;
    margin:auto ;
    font-family: 'Inter', sans-serif;
    border-radius: 16px;
    padding-top: 1px;
  }

.logo_cagepa {
  margin-top: -10px;
}

  .form-group {
    margin-bottom: 20px;
    color: #1E293B;
  }

  .form-group.password-input {
    margin-bottom: 0px;
  }

  .form-control {
    border-radius: 6px;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.15);
    width: 325px;
    height: 42px;
    padding-left: 20px;

  }

  .form-check {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

  }

  input[type = "checkbox"]{
    appearance: none;
    -webkit-appearance: none;
    height: 25px;
    width: 25px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.15);

  }

  input[type = "checkbox"]:after{
    content: "\f00c";
    color: white;
    display: none;
  }

input[type="checkbox"]:checked{
  background-color: #13406C;
}

input[type="checkbox"]:checked:after{
  display: block;
}

.form-check-label.remember-label {
  margin-right: 90px;
}

  .btn-entrar {
    border-radius: 4px;
    background: #005274;
    color: white;
    font-family: 'Inter', sans-serif;
    width: 348px;
    height: 40px;
    border: none;
    cursor: pointer;
  }

  .card-title {
    color: #1E293BB2;
    font-size: 18px;
    text-align: left;
    padding-left: 116px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
  }

  .btn-criar {
    background: white;
    color: #1E3A8A;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    border: 1px solid #1E3A8A;
    border-radius: 4px;
    width: 348px;
    height: 40px;
  }

  .btn-criar:hover {
    background: #f5f5f5;
    cursor: pointer;
  }


  .indicacao {
    color: #1E293BB2;
    font-size: 14px;
    font-weight: 600;
  }

  .form-check-label {
    width: 111px;
    height: 15px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #1E293B;
    flex: none;
    order: 1;
    flex-grow: 0;
  }

  .link-esqueceu-senha {
    font-size: 12px;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    color: #005274;
    order: 2;
  }

  ::placeholder {
    color: #999B9D;
    left: 20px;
  }

.form-control::placeholder {
  padding-left: 20px;
}

label {
  display: block;
  font-size: 14px;
  padding-left: 10px;

}

.information-label {
  display: flex;
  justify-content: start;
  margin-left: 105px;
  margin-bottom: 8px;
  font-size: 12px;
}

.btn-voltar{
  background: transparent;
  color: #005274;
  border: none;
  margin-top: 50px;
  margin-right: 450px;
  cursor: pointer;
}

.return-logo-cagepa {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
