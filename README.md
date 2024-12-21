# Cadastro de Colaboradores

Este é um projeto simples de formulário de cadastro de colaboradores, criado para fins de estudo e prática de JavaScript. O projeto utiliza o Vite como bundler para simplificar o desenvolvimento e a execução do código.

## Funcionalidades do Formulário
1. Validações nos campos:
   - Nome completo
   - E-mail
   - Data de nascimento
   - Cargo
   - Salário
2. Exibição de mensagens de erro específicas abaixo de cada campo inválido.
3. Impede o envio do formulário até que todos os campos estejam corretos.
4. Mostra os dados validados no console em formato JSON.
5. Adiciona uma máscara ao campo de salário (ex.: `R$ 1.000,00`).
6. Assegura acessibilidade com uso adequado de labels e mensagens claras de erro.

## Tecnologias Utilizadas
- **Vite** (Vanilla JS)
- **HTML5**
- **CSS3**
- **JavaScript**

## Requisitos
- Node.js (versão 16 ou superior)
- npm (ou yarn)

## Como Rodar o Projeto

### 1. Clone o Repositório
```bash
git clone https://github.com/seu-usuario/cadastro-colaboradores.git
cd cadastro-colaboradores
```

### 2. Instale as Dependências
Use npm ou yarn para instalar as dependências necessárias.
```bash
npm install
# ou
yarn install
```

### 3. Execute o Servidor de Desenvolvimento
Inicie o servidor de desenvolvimento do Vite.
```bash
npm run dev
# ou
yarn dev
```

O projeto será executado e você poderá acessá-lo no navegador através do seguinte link:
```
http://localhost:5173
```

### 4. Compilação para Produção
Para compilar os arquivos para produção, execute:
```bash
npm run build
# ou
yarn build
```
Os arquivos finais estarão disponíveis na pasta `dist`.

### 5. Servir os Arquivos de Produção
Para servir os arquivos de produção localmente, você pode usar o comando:
```bash
npm run preview
# ou
yarn preview
```
O servidor será iniciado, e o site poderá ser acessado novamente pelo navegador.

## Estrutura de Arquivos
```
├── public/              # Arquivos estáticos
├── src/                 # Código fonte
│   ├── assets/        # Estilos e imagens
│   └── main.js       # Arquivo principal do projeto
└── index.html          # Estrutura principal do HTML
```