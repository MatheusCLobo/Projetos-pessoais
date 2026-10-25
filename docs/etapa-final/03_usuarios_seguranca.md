# Gestão de usuários e segurança

## Contexto

O Study Hub e um site **estático** no GitHub Pages, não um sistema com contas proprias. A gestão de usuários e o controle de escrita sao realizados pelo **GitHub**, enquanto a leitura do site publicado e livre.

| Perfil | Acesso de leitura | Acesso de alteração |
| --- | --- | --- |
| Visitante da página pública | Sim | Não |
| Visitante do repositório público | Sim | Não, sem permissao |
| Proprietario autenticado | Sim | Sim, conforme configurações da conta |
| Colaborador convidado | Sim | Dependente do convite e permissões |

## Verificacoes praticas com o proprietário

1. Entrar no GitHub e confirmar o nome da conta proprietaria.
2. Abrir `Settings` do repositório e localizar `Collaborators` ou a área de acesso.
3. Conferir se existem colaboradores; não adicionar um usuário ficticio. Registrar resultado real.
4. Conferir que o repositório e público, mantendo no repositório apenas material que pode ser publicado.
5. Revisar as opções de segurança: alertas de segredos e dependencias, quando disponíveis.
6. Conferir na configuração pessoal do GitHub se a autenticação em dois fatores está habilitada, sem expor códigos na gravacao.
7. Verificar se existem regras de proteção de branch disponíveis para este tipo de repositório e conta; registrar o que foi configurado de verdade.

## Regras adotadas na documentação

- Principio do menor privilegio: não conceder edição sem necessidade.
- Não incluir dados sensíveis, tokens, chaves ou senhas em código e commits.
- Manter controle das versoes e revisar antes de publicar na branch principal.
- Corrigir e registrar vulnerabilidades sem publicar informações privadas.
- Usar recursos de segurança oferecidos pelo GitHub quando estiverem disponíveis e forem adequados ao plano.

## Resultado real da conferência - preencher

- Conta proprietaria: `MatheusCLobo` (identificada no repositório público)
- Visibilidade do repositório: público (identificado anteriormente; reconferir no dia)
- Colaboradores com acesso de escrita: [VERIFICAR]
- Dois fatores na conta: [VERIFICAR PRIVADAMENTE]
- Proteção ou regras da branch principal: [VERIFICAR]
- Alertas de segurança: [VERIFICAR]
- Arquivos sensíveis encontrados na revisão: [VERIFICAR]

**Limite honesto da implementação:** a página não autentica visitantes e não oferece papeis de usuário dentro do site. A segurança de publicação e colaboração e tratada no GitHub.
