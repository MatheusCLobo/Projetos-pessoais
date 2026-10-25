# Uso do Google Gemini na implantação do Study Hub

**Data da consulta:** 25/10/2026  
**Ferramenta utilizada:** Google Gemini, pelo navegador  
**Projeto analisado:** Study Hub, portfólio estático em HTML, CSS e JavaScript hospedado no GitHub Pages

## Objetivo da consulta

Utilizei o Gemini como apoio para revisar o plano de implantação da etapa final do Bootcamp I. Expliquei que o Study Hub já existia, estava publicado pelo GitHub Pages e que a proposta da disciplina exigia abordar implantação, acesso, segurança, colaboração e testes. Pedi orientações aplicáveis a um projeto individual, sem inventar funcionalidades que o site não possui.

## Perguntas e temas apresentados

- Como manter a implantação do site estático usando GitHub e GitHub Pages.
- Quais riscos de segurança precisam ser considerados em um repositório público.
- Como revisar permissões de acesso, colaboradores e regras de proteção da branch principal.
- Como registrar versionamento, compartilhamento e eventuais contribuições.
- Quais testes manuais executar antes de considerar a entrega pronta.

## Resumo das orientações recebidas

A resposta do Gemini abordou a manutenção do GitHub Pages, a importância de confirmar o uso de HTTPS, a revisão de colaboradores e permissões, os cuidados para não publicar senhas ou tokens, o uso de branches e pull requests para alterações futuras e a necessidade de conferir a navegação, os links e o acesso ao projeto após a publicação.

**Importante:** essas orientações são sugestões da ferramenta. O Gemini não alterou automaticamente as configurações nem realizou testes por conta própria. As ações abaixo foram conferidas separadamente.

## O que foi efetivamente feito ou verificado

| Ponto | Resultado real em 25/10/2026 |
| --- | --- |
| Hospedagem | O site já estava publicado e continuou disponível no GitHub Pages. |
| HTTPS | A opção **Enforce HTTPS** foi vista marcada nas configurações do Pages. |
| Repositório | Repositório público na conta `MatheusCLobo`, branch principal `main`. |
| Colaboradores | Tela de colaboradores consultada; **nenhum colaborador adicional** listado. |
| Segurança da branch | Não havia regras clássicas de proteção nem rulesets configurados na verificação. Isso permanece uma melhoria possível, não algo já implantado. |
| Documentação | Foram publicados arquivos de implantação, segurança, compartilhamento, testes e roteiro da apresentação final. |
| Versionamento | Commits reais registraram a documentação final e uma correção de links. |
| Testes no navegador | Página aberta, menu Projetos utilizado e link do UniData testado após a correção. |

## Decisões e limitações

Mantive a estrutura existente em vez de criar um projeto diferente. Como o Study Hub é um site estático, não há cadastro, autenticação nem papéis de usuário próprios; o controle de edição acontece no GitHub. Não foi necessário convidar colaboradores fictícios. Um fluxo com branches e pull requests está documentado como prática recomendada para futuras alterações, mas não deve ser descrito como já executado nesta etapa.

A situação da autenticação em dois fatores (2FA) e dos alertas de segurança da conta **não foi confirmada** nesta revisão; por isso, não afirmo que esses itens estejam habilitados. O uso de IA serviu como orientação crítica, não como comprovação de segurança.
