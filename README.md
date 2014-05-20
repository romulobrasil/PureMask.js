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

Adicionar a class com nome de sua preferencia;
Adicionar data-mask (Ex.: data-mask="##/##/####");

```
<input type="text" class="sua-class" data-mask="##/##/#### ##:##" >
```

E também no footer:
Função com dois paramentros sendo a primeira sua class e a segunda ativando o placeholder (se deixar em branco o segundo parametro e setar false não ativará o placeholder). 

```
<script>
    PureMask.format(".telefone", true);    
    PureMask.format(".cpf", true);    
</script>
```

### Alguns Exemplos:

```
Data com hora    : data-mask="##/##/#### ##:##"
Data             : data-mask="##/##/####"
Tempo            : data-mask="##:##:##"
Tempo com siglas : data-mask="##h##m"
CEP              : data-mask="#####-###"
Telefone com DDD : data-mask="(##) ####-####"
CPF              : data-mask="###.###.###-#"
CNPJ             : data-mask="##.###.###/####-##"
Dinheiro         : data-mask="###.###.###.###.###.###,##"
Mixed            : data-mask="AAA ###-###"
Placa de Carro   : data-mask="AAA ####"
```
