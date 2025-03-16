# TaPago Landing Page

Landing page moderna para o TaPago, um aplicativo de divisão de despesas.

## Configuração

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=sua_senha_de_app
DESTINATION_EMAIL=seu_email_pessoal@exemplo.com
```

**Nota sobre EMAIL_PASS**: Para Gmail, você precisa usar uma "Senha de App" e não sua senha normal:
1. Ative a autenticação de dois fatores na sua conta Google
2. Vá para Configurações > Segurança > Senhas de App
3. Gere uma nova senha de app para "Outro (Nome personalizado)"
4. Use esta senha no EMAIL_PASS

4. Execute o projeto:
```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`

## Tecnologias

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Nodemailer 