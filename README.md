<p align="center">
  <a href="http://romulobrasil.com">
    <img height="220" width="300" src="http://romulobrasil.com/wp-content/themes/romulobrasil.com/img/logo.png"/>
  </a>
</p>


Pure Mask JS (puremask.js)
==========

Biblioteca de mascaras em inputs de forms desenvolvido em Javascript puro. 


## Como Utilizar

Para utilizar basta chamar o arquivo .js do plugin no footer:

```
<script src="puremask.min.js"></script>
```

Adicionar a class puremask; Adicionar data-mask (Ex.: data-mask="##/##/####"), assim podendo personalizar sua mascara, lembrando que não é possível ultilizar parênteses (), mas espaços, dois-pontos, barras e pontos pode.

```
<input type="text" class="puremask" data-mask="##/##/#### ##:##" >
```

### Alguns Exemplos:

```
Data com hora = "##/##/#### ##:##"; 
Data = "##/##/####";
```
