<template>
    <div class="centralizacao-total">
      <div class="card">
        <div class="card-body">
          <button type="button" class="btn-voltar" @click="goBack"><i class="fa-solid fa-arrow-left fa-2xl"></i></button>
          <div class="return-logo-cagepa">
            <img src="../assets/logo-completa.png" alt="logo-cagepa" class="logo_cagepa">
          </div>
          <h5 class="card-title">Cadastro de senha</h5>
          <form>
            <div class="form-group">
              <label for="username" class="information-label">CPF/CNPJ</label>
              <input type="text" class="form-control" id="username" placeholder="Insira seu CPF/CNPJ">
            </div>
            <div class="form-group">
              <label for="matricula" class="information-label">Matrícula</label>
              <input type="text" class="form-control" id="matricula" placeholder="Insira sua matrícula">
            </div>
            <div class="form-group">
              <label for="password-crie" class="information-label">Senha</label>
              <input type="password" class="form-control" id="password-crie" placeholder="Crie uma senha">
            </div>
            <div class="form-group">
              <label for="password" class="information-label">Repita a senha</label>
              <input type="password" class="form-control" id="password" placeholder="Repita a senha criada">
            </div>
            <br>
            <button type="submit" class="btn-entrar" @click="userRegister">Cadastrar</button>
            <br>
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
import CardLogin from "@/components/CardLogin.vue";
    export default {
      components:{
        CardLogin
      },

      methods:{
        goBack (){
          this.$router.push('/')
        },

        userRegister(){
          this.$router.push('/')
          this.$notify({
            title: "CADASTRO REALIZADO",
            text: "Sua senha foi cadastrada com sucesso, você já pode entrar com seu CPF/CNPJ e senha.",
          });
        }

      },

      name:'pagina-cadastro',
    }
</script>

<style scoped>
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
height: 632px;
margin:auto ;
font-family: 'Inter', sans-serif;
border-radius: 16px;
padding-top: 1px;
}

.logo_cagepa {
margin-top: -10px;
}

.form-group {
  margin-bottom: 10px;
color: #1E293B;
}

.form-control {
border-radius: 6px;
background: white;
border: 1px solid rgba(0, 0, 0, 0.15);
width: 325px;
height: 42px;
padding-left: 20px;

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
