<p align="center">
  <a href="https://romulobrasil.com" target="_blank" title="Acessar o site Rômulo Brasil">
    <img width="200" height="146" src="https://romulobrasil.com/img/logo.png"/>
  </a>
</p>

# Pure Mask JS (puremask.js)

Biblioteca de mascaras em inputs de forms desenvolvido em Javascript puro.

## Como Utilizar

Adicionar a class com nome de sua preferencia na tag input;
Adicionar data-mask (Ex.: data-mask="##/##/####");
Basta colocar uma class e modificar o data-mask de acordo com a sua preferencia de mascara em varios inputs diferentes.

```
<input type="text" class="sua-class" data-mask="##/##/#### ##:##" >
```

No footer:
Nós iremos inicializar chamar o plugin na tag script e depois chamar nossa função com dois paramentros, sendo o primeiro sua class e a segunda ativando o placeholder (se deixar em branco o segundo parametro ou setar false não ativará o placeholder).

```
<script src="puremask.min.js"></script>
<script>
  PureMask.format(".telefone", true);
</script>
```

### Alguns Exemplos:

```
Data com hora       : data-mask="##/##/#### ##:##"
Data                : data-mask="##/##/####"
Tempo               : data-mask="##:##:##"
Tempo com siglas    : data-mask="##h##m"
CEP                 : data-mask="#####-###"
Telefone com DDD    : data-mask="(##) ####-####"
CPF                 : data-mask="###.###.###-##"
CNPJ                : data-mask="##.###.###/####-##"
Dinheiro            : data-mask="###.###.###.###.###.###,##"
Mixed               : data-mask="AAA ###-###"
Placa de Carro      : data-mask="AAA ####"
Placa de Carro Nova : data-mask="AAA#A##"
```

## Placeholder

Caso queira colocar o data-mask como placeholder, basta adicionar o true como segundo paramentro.

### Como instalar com bower

```
bower install puremaskjs
```
