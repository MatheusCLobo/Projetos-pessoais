# Versionamento do Study Hub

O projeto parte de um **repositório público existente**, `MatheusCLobo/Projetos-pessoais`. O histórico remoto já conta com commits anteriores à etapa intermediária; os commits desta atualização precisam ser realizados na conta do autor.

## Versões sugeridas para a entrega

- **v1.0 — Projeto base:** documentação da primeira etapa, estrutura inicial, arquivo `README.md` e site de apresentação.
- **v1.1 — Etapa intermediária:** organização das disciplinas e projetos, atualização visual do site, documentação do versionamento e instruções de integração.

Essas etiquetas descrevem o planejamento. Não significam que uma tag ou um commit já foi criado no GitHub.

## Comandos para publicar esta atualização

```bash
git clone https://github.com/MatheusCLobo/Projetos-pessoais.git
cd Projetos-pessoais
# copiar para esta pasta o CONTEÚDO da pasta Study_Hub_Intermediaria_Matheus_Lobo
git status
git add .
git commit -m "feat: integra study hub da etapa intermediaria"
git push origin main
```

**Para demonstrar uma alteração incremental**, após o primeiro envio, revise um parágrafo do site ou README e registre um segundo commit:

```bash
git add README.md index.html
git commit -m "docs: revisa descricao e navegacao do study hub"
git push origin main
```

Só execute o segundo commit se fizer alguma mudança real nesses arquivos. Confira o histórico na aba *Commits* do GitHub.

## Colaboração

Em trabalho em equipe, uma opção é criar uma branch `feature/...`, enviar a branch e abrir um *pull request* para revisão. Este projeto é individual, mas segue organização que facilita colaboração futura.
