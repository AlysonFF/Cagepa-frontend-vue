<template>
  <div class="centralizacao-total">
    <div class="card">
      <div class="card-body">
        <div class="return-logo-cagepa">
          <img src="../assets/logo-completa.png" alt="logo-cagepa" class="logo_cagepa">
        </div>
        <h5 class="card-title-servicos">Portal de serviços</h5>
        <p class="indicacao">Estes são os nossos serviços a sua disposição, para sua comodidade e eficiência.</p>
      </div>
      <div class="grid-container">

        <div class="grid-item">
          <a href="#"> <button>
            <img src="../assets/codigo-de-barras.svg" alt="segunda-via"><br>2ª via de conta
          </button></a>
        </div>

        <div class="grid-item">
          <a href="#"> <button>
            <img src="../assets/cartao.svg" alt="parcelamento-debito"><br>Parcelamento de débitos
          </button></a>
        </div>

        <div class="grid-item">
          <a href="#"> <button>
            <img src="../assets/declaracao.svg" alt="declaracao-anual"><br>Declaração anual de <br> quitação de débitos
          </button></a>
        </div>

        <div class="grid-item">
          <a href="#"> <button>
            <img src="../assets/solicitacao-servico.svg" alt="solicitao-servicos"><br>Solicitação de serviços
          </button></a>
        </div>

        <div class="grid-item">
          <a href="#"> <button>
            <img src="../assets/consultar-pagamento.svg" alt="consultar-pagamentos"><br>Consultar pagamentos
          </button></a>
        </div>

        <div class="grid-item">
          <a href="#"> <button>
            <img src="../assets/acompanhar-registro-de-atendimento.svg" alt="acompanhar-registro-atendimento"><br>Acompanhar registro de atendimento
          </button></a>
        </div>

        <div class="grid-item">
          <a href="#"> <button>
            <img src="../assets/consultar-historico-consumo.svg" alt="consultar-historicos"><br>Consultar histórico de <br> consumo
          </button></a>
        </div>

        <div class="grid-item">
          <a href="#"><button>
            <img src="../assets/alterar-vencimento-conta.svg" alt="altera-vencimento-conta"><br>Alterar vencimento da conta
          </button></a>
        </div>

        <div class="grid-item">
          <a href="#"> <button>
            <img src="../assets/recebimento-fatura-email.svg" alt="recimento-fatura-email"><br>Recebimento de fatura por e-mail
          </button></a>
        </div>

        <div class="grid-item">
          <a href="#"> <button>
            <img src="../assets/simulador-parcelamento.svg" alt="simulador-parcelamento"><br>Simulador de <br> parcelamento
          </button></a>
        </div>

        <div class="grid-item">
          <a href="#"> <button>
            <img src="../assets/emitir-contrato-adesao.svg" alt="emitir-contrato-adesao"><br>Emitir contrato de <br> adesão
          </button></a>
        </div>

      </div>
    </div>

    <br>

    <!-- SEGUNDO CARD -->
    <div class="card card-informacoes">
      <img src="../assets/thinkingEmoji.svg" alt="thinking-emoji">
      <p class="informacao">Precisa de ajuda? Acesse nosso FAQ e<br> encontre respostas rápidas e simples</p>
      <button class="btn-informacoes">Informações</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "servicosCagepe"
}
</script>

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
  width: 998px;
  height: 112px;
  align-items: center;
  display: flex;
}

.card-informacoes img{
  padding-left: 40px;
}

.card-informacoes .informacao{
  flex: 1;
  margin-right: 420px;
}


.btn-informacoes {
  border-radius: 4px;
  background: #005274;
  color: white;
  font-family: 'Inter', sans-serif;
  width: 150px;
  height: 45px;
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




/* CARD SERVIÇOS */

.grid-container a {
  text-decoration: none;
}

.grid-container button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  min-height: 100px;
  background-color: #F1F8FF;
  border: none;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  color: #1E293B;
}

.grid-container button:hover {
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.grid-container button:active {
  background-color: #dde0e8;
}

.grid-container  {

}

button img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto ;
  padding: 20px;
}

.grid-item {
  padding: 20px;
  font-size: 17px;
  text-align: center;
}

.tabela-servicos a {
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;

}

.card {
  background-color: white;
  width: 998px;
  height: 796px;
  margin:auto ;
  font-family: 'Inter', sans-serif;
  border-radius: 16px;
  padding-top: 1px;
}


.logo_cagepa {
  margin-top: 50px;
}


.card-title-servicos {
  color: #1E293BB2;
  font-size: 24px;
  text-align: left;
  padding-left: 50px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
}


.indicacao {
  color: #1E293BB2;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  padding-left: 50px;
}

::placeholder {
  color: #999B9D;
  left: 20px;
}

.return-logo-cagepa {
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>