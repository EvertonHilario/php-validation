### DecoupledLaravelReact
Este é um projeto web completo (Fullstack) construído com uma arquitetura desacoplada (decoupled), utilizando Laravel para o backend (API) e React para o frontend (interface do usuário).


### Setup inicial do ambiente de desenvolvimento com Docker

## Pré-requisitos

Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.

---

## Passos de Configuração

Siga os passos abaixo, executando cada comando no terminal na raiz do seu projeto Laravel (onde o `docker-compose.yml` está localizado).

---

### 1. Construir e Iniciar os Contêineres Docker

Este comando irá construir as imagens Docker (se necessário) e iniciar os serviços definidos no seu `docker-compose.yml` em segundo plano.

```bash
docker compose up --build -d
```

- `up`: Inicia os serviços definidos no `docker-compose.yml`.
- `--build`: Força a reconstrução das imagens dos serviços antes de iniciá-los, garantindo que você tenha a versão mais recente do seu código no contêiner.
- `-d`: Executa os contêineres em modo "detached" (segundo plano), liberando seu terminal.

---

### 2. Instalar Dependências do Composer

Acesse o contêiner da aplicação (laravel-app) e instale as dependências PHP do seu projeto Laravel.

```bash
docker compose exec api composer install
```

- `exec app`: Executa o comando dentro do serviço api (seu contêiner Laravel).
- `composer install`: Instala as dependências PHP definidas no arquivo `composer.json` do seu projeto.

---

### 3. Instalar Dependências do NPM

Acesse o contêiner da aplicação e instale as dependências JavaScript/CSS (Node.js) do seu projeto.

```bash
docker compose exec app npm install
```

- `npm install`: Instala as dependências de frontend definidas no arquivo `package.json`.

---

### 4. Compilar Assets do Frontend

Compile os assets do frontend (JavaScript e CSS) usando o script de build do NPM.

```bash
docker compose exec app npm run build
```

- `npm run build`: Executa o script build configurado no seu `package.json` para otimizar e compilar seus assets para produção.

---

### 5. Executar Migrações do Banco de Dados

Execute as migrações do Laravel para criar as tabelas necessárias no seu banco de dados.

```bash
docker compose exec api php artisan migrate
```

- `php artisan migrate`: Executa todas as migrações de banco de dados pendentes do Laravel, criando ou atualizando a estrutura do seu banco de dados.

---

### 6. Gerar a Chave da Aplicação Laravel (APP_KEY)

Gere a chave de segurança da sua aplicação Laravel. Esta chave é crucial para a segurança de sessões, criptografia e outras funcionalidades.

```bash
docker compose exec api php artisan key:generate
```

- `php artisan key:generate`: Gera uma chave aleatória e a define automaticamente no seu arquivo `.env`, garantindo a segurança da sua aplicação.

---

### 7. Rodar Seeders do Banco de Dados
Popule o banco de dados com dados iniciais, se necessário, utilizando as seeders do Laravel.

```bash
docker compose exec api php artisan db:seed
```

- `php artisan db:seed`: Executa todas as classes de seeder configuradas para popular seu banco de dados com dados de teste ou iniciais.

### 8. Rodar Testes da API
Execute os testes automatizados para a API Laravel para garantir que as funcionalidades do backend estão operando corretamente.

```bash
docker compose exec api php artisan test
```

- `php artisan test`: Executa os testes unitários e de funcionalidade configurados no seu projeto Laravel.

### 9. Iniciar o Servidor de Desenvolvimento Laravel

Finalmente, inicie o servidor de desenvolvimento embutido do Laravel. Este comando manterá o terminal ocupado enquanto o servidor estiver ativo.

```bash
docker compose exec api php artisan serve --host=0.0.0.0 --port=8000
```

- `php artisan serve`: Inicia o servidor de desenvolvimento do Laravel.
- `--host=0.0.0.0`: Permite que o servidor seja acessível de fora do contêiner (via localhost na sua máquina).
- `--port=8000`: Define a porta em que o servidor será executado dentro do contêiner, mapeada para a porta 8000 da sua máquina.

---

### 10. Iniciar o Servidor de Desenvolvimento Node
Finalmente, inicie o servidor de desenvolvimento do Node. Este comando manterá o terminal ocupado enquanto o servidor estiver ativo.

```bash
docker compose exec app npm run dev
```

- `npm run dev`: Executa o script dev definido no arquivo package.json do seu projeto Node.js.
