# Testes do Study Hub — entrega final

**Data da execução:** 25/10/2026  
**Ambiente observado:** navegador Microsoft Edge no computador, site GitHub Pages e telas de configuração do GitHub.  
**Cuidado:** os testes marcados como realizados foram observados ou conferidos de fato; itens pendentes não são apresentados como aprovados.

| Teste | Resultado | Evidência / observação |
| --- | --- | --- |
| Abrir o site público por HTTPS | **Aprovado** | Página inicial do Study Hub carregou com layout e conteúdo visíveis no navegador. |
| Verificar layout da página inicial | **Aprovado** | Cabeçalho, apresentação, painel de diretórios e botões exibidos corretamente no print. |
| Navegar pelo menu `Projetos` | **Aprovado** | Clique levou à seção Projetos acadêmicos com quatro cartões visíveis. |
| Abrir documentação pelo botão `Saiba mais` do UniData | **Aprovado após correção** | Inicialmente abriu Markdown como texto puro pelo Pages; depois do ajuste abriu o `README.md` formatado no GitHub. |
| Corrigir links dos READMEs e documentos Markdown | **Concluído** | Nove endereços `href` foram alterados para links `github.com/.../blob/main/...`. Commit `1694495`. |
| Conferir existência dos arquivos de destino dos links | **Aprovado** | Os arquivos Markdown das três disciplinas, três projetos e os documentos `planejamento.md` e `versionamento.md` foram localizados no repositório. Não equivale a clicar manualmente em todos os links. |
| Confirmar arquivos de implantação | **Aprovado** | Pasta `docs/etapa-final` com nove arquivos e documentos `SECURITY.md` e `CONTRIBUTING.md` na raiz; commit `0cdb45e`. |
| Confirmar versionamento | **Aprovado** | Histórico com os commits de documentação e correção do site na `main`. |
| Conferir acesso dos colaboradores | **Conferido** | Tela `Settings > Collaborators` mostrou zero colaboradores adicionais. |
| Conferir HTTPS no GitHub Pages | **Conferido** | Opção `Enforce HTTPS` marcada na configuração do Pages. |
| Conferir proteção da `main` | **Conferido, com limitação** | Não havia branch protection rules nem rulesets. A proteção não foi configurada. |
| Utilizar Google Gemini no planejamento | **Realizado** | Consulta sobre implantação, acessos, segurança e testes; registro em `02_uso_gemini.md`. |
| Validação automatizada local anterior | **Realizada** | Resultados de verificações estáticas em `08_validacao_local.md`; não substitui o teste no navegador. |
| Abrir o site em janela anônima | **Não verificado nesta sessão** | Teste complementar sugerido para validar acesso totalmente deslogado. |
| Testar menu em largura de celular | **Não verificado nesta sessão** | Teste complementar de responsividade. |
| Confirmar status exato do último deployment nas Actions | **Não verificado nesta sessão** | A página foi observada funcionando após a atualização, mas o log do job não foi inspecionado. |
| Conferir 2FA pessoal, alertas e ausência absoluta de segredos | **Não verificado integralmente** | Requer revisão privada e/ou auditoria apropriada; não afirmar validação completa. |
| Publicar apresentação final nova no YouTube | **Pendente até a gravação** | Informar link no relatório após publicar. |

## Problema identificado e correção

Durante o teste, o link `Saiba mais` do UniData levava a um arquivo Markdown exibido diretamente pelo GitHub Pages. Nesse endereço, o navegador mostrava `#` e `**` como texto, sem o visual formatado do GitHub. A correção foi mudar os endereços dos arquivos `.md` para páginas de visualização do GitHub com `/blob/main/`. Depois do commit `1694495`, o UniData foi novamente acessado e apareceu formatado corretamente.

## Conclusão parcial dos testes

O Study Hub está acessível e os testes manuais da página inicial, da navegação para Projetos e do link do UniData foram aprovados. A documentação e os commits estão disponíveis no GitHub. Permanecem como melhorias: teste responsivo e em janela anônima, revisão dos recursos de segurança que não foram checados e eventual proteção da branch `main`.
