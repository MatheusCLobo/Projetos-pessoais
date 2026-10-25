# Gestão de usuários e segurança — verificações da entrega final

**Data da revisão:** 25/10/2026  
**Conta proprietária:** `MatheusCLobo`  
**Repositório:** [Projetos-pessoais](https://github.com/MatheusCLobo/Projetos-pessoais)

## Modelo de usuários do projeto

O Study Hub é um site **estático**, publicado no GitHub Pages. O site não possui sistema próprio de login, cadastro ou controle de usuários. Visitantes podem visualizar o conteúdo público, enquanto a alteração dos arquivos depende de permissões na plataforma GitHub.

| Perfil | Pode ler? | Pode alterar o repositório diretamente? |
| --- | --- | --- |
| Visitante do site | Sim | Não |
| Visitante do repositório público | Sim | Não, somente por ser visitante |
| Proprietário autenticado | Sim | Sim, conforme a autorização da conta |
| Colaborador convidado | Sim | Depende da permissão concedida |

## Verificações realizadas em 25/10/2026

| Configuração | Resultado observado |
| --- | --- |
| Visibilidade do repositório | **Público**, para apresentação acadêmica e portfólio. |
| Proprietário | `MatheusCLobo`. |
| Colaboradores adicionais | **Nenhum** na tela `Settings > Collaborators`. |
| GitHub Pages | Publicação a partir da branch `main`, diretório raiz. |
| HTTPS | Opção **Enforce HTTPS** marcada em `Settings > Pages`. |
| Proteção clássica da branch | **Nenhuma regra configurada** na tela `Settings > Branches`. |
| Rulesets | **Nenhum ruleset configurado** na tela `Settings > Rulesets`. |
| Autenticação em dois fatores (2FA) da conta | **Não verificada** nesta revisão; não afirmar ativação. |
| Alertas de segurança e proteção de segredos | **Não verificados** nesta revisão. |

## Cuidados e políticas documentadas

1. Não publicar senhas, chaves privadas, tokens nem dados pessoais confidenciais em arquivos do repositório.
2. Manter somente acessos de escrita necessários; não convidar pessoas apenas para simular colaboração.
3. Revisar alterações antes do commit e registrar mensagens que expliquem as modificações.
4. Para alterações futuras maiores, considerar uma branch separada e revisão por pull request.
5. Revisar regras de proteção de branch e configurações de segurança disponíveis no GitHub, sem declarar como ativado o que ainda não foi configurado.
6. Conferir a autenticação em dois fatores nas configurações pessoais da conta, em ambiente privado.
7. Caso uma credencial seja exposta, revogar ou substituir essa credencial; apenas apagar o texto do repositório pode não ser suficiente por causa do histórico Git.

## Conclusão honesta

O controle de alterações é feito pelo GitHub, sem usuários internos do Study Hub. Foram conferidos o acesso público, a ausência de colaboradores adicionais, a publicação pela `main` e o HTTPS. A ausência de regras de proteção da branch foi registrada como limitação atual. A checagem das configurações pessoais de 2FA e de todos os alertas de segurança ficou fora do escopo verificado nesta sessão.
