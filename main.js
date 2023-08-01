import { exibirTUDO } from "./api.mjs";


exibirTUDO().then(resultado => {
  document.querySelector('#app').innerHTML = resultado;
});