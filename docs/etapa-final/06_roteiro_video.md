# Roteiro do vídeo final — Study Hub / Bootcamp I

**Duração sugerida:** aproximadamente cinco minutos.  
**Objetivo:** apresentar a implantação, o uso do Gemini, as verificações de segurança, o versionamento e os testes reais.  
**Importante:** este é um vídeo NOVO, específico da entrega final, diferente do vídeo da etapa intermediária. As falas são sugestões para leitura ou adaptação em linguagem natural.

## 0:00–0:40 — Apresentação e continuidade do projeto

**Mostrar:** página inicial publicada do Study Hub.

**Falar:**

> Oi, eu sou Matheus Lobo, estudante de Engenharia da Computação no CEUB. Esse é o meu Study Hub, projeto que estou desenvolvendo durante o Bootcamp I. Na primeira etapa, organizei a proposta e a estrutura do portfólio. Na segunda, coloquei o site no ar, criei as pastas de disciplinas e projetos e organizei o repositório no GitHub. Nesta entrega final, o foco foi a implantação: conferir acessos, pensar em segurança, organizar o versionamento e testar o resultado. Eu mantive o mesmo projeto para mostrar a evolução entre as etapas.

## 0:40–1:25 — Estrutura e plano de implantação

**Mostrar:** página do repositório, pasta `docs/etapa-final` e arquivo `01_plano_implantacao.md`.

**Falar:**

> Aqui está o repositório do projeto. Ele reúne a página principal, os arquivos de estilo e JavaScript, além de áreas para disciplinas, projetos, certificados e currículo. Na última etapa, acrescentei uma pasta específica para documentar a implantação. Criei um plano com fases para conferir a publicação, os usuários, as permissões, o compartilhamento e os testes. Uma decisão importante foi não recomeçar o trabalho: aproveitei a estrutura existente e o histórico de commits. O site é estático e funciona pelo GitHub Pages, então não há banco de dados ou login próprio.

## 1:25–2:15 — Uso do Google Gemini

**Mostrar:** consulta real ao Gemini, se estiver acessível, e documento `02_uso_gemini.md`.

**Falar:**

> A atividade também pediu o uso do Google Gemini. Eu consultei a ferramenta para revisar a implantação do Study Hub e pedi orientações sobre segurança, permissões, organização e testes. Entre os cuidados recomendados estavam revisar quem pode alterar o repositório, conferir HTTPS, evitar publicar senhas ou tokens e usar branches e pull requests em mudanças futuras. Eu não tratei a resposta da IA como uma auditoria pronta. Comparei as recomendações com as configurações que realmente encontrei e registrei no documento tanto o que foi verificado quanto o que ficou como sugestão.

## 2:15–3:15 — Usuários e segurança

**Mostrar:** `SECURITY.md`, `03_usuarios_seguranca.md` e, se possível, telas `Settings > Pages`, `Collaborators` e `Rulesets`. Não mostrar senhas ou códigos.

**Falar:**

> Na parte de segurança, é importante explicar que a página não tem usuários cadastrados dentro do site. Qualquer pessoa pode visualizar o portfólio, mas editar os arquivos depende das permissões do GitHub. Eu conferi que o repositório é público, que não havia outros colaboradores com acesso e que a publicação estava configurada na branch principal. Também vi a opção de HTTPS ativada no GitHub Pages. Ao verificar a proteção da branch, percebi que não existiam regras nem rulesets configurados. Então isso entrou como uma melhoria futura; não vou apresentar uma configuração que não fiz. Também documentei os cuidados com credenciais e com as permissões de quem eventualmente contribuir no futuro.

## 3:15–4:00 — Versionamento e colaboração

**Mostrar:** histórico de commits, `CONTRIBUTING.md` e `04_compartilhamento.md`.

**Falar:**

> O versionamento ficou registrado no próprio GitHub. Dá para ver o commit em que publiquei a documentação final e outro em que corrigi links do site. Esses registros ajudam a acompanhar o que foi modificado. Também criei um documento de contribuição, explicando como uma pessoa poderia sugerir uma mudança, criar uma branch e abrir um pull request. Como a atividade é individual, eu não inventei colaboração de outras pessoas. Esse fluxo fica preparado como uma prática para a continuidade do projeto.

## 4:00–4:50 — Testes e correção encontrada

**Mostrar:** `05_testes.md`, depois site publicado; clicar em `Projetos` e em `Saiba mais` no UniData.

**Falar:**

> Nos testes, confirmei que a página inicial abria, que a apresentação estava organizada e que o menu Projetos levava à seção correta. Encontrei um problema real: quando eu abria a documentação do UniData, ela aparecia como texto puro, com marcações de Markdown. Corrigi os endereços desses arquivos no HTML para abrir a visualização formatada do GitHub. Depois publiquei a alteração e testei o UniData novamente, com sucesso. Os resultados estão anotados na documentação. Alguns testes complementares ainda podem ser feitos, como conferir o comportamento no celular e em uma janela anônima.

## 4:50–5:15 — Encerramento

**Mostrar:** voltar à página inicial do Study Hub.

**Falar:**

> Essa etapa me mostrou que publicar um projeto não é só fazer a página aparecer. Também é importante documentar decisões, saber quem pode alterar o conteúdo, acompanhar as versões e testar depois de cada atualização. O Study Hub continua sendo um portfólio em evolução, mas agora tem uma base organizada para receber novos projetos e materiais. Obrigado!

## Orientações para a gravação

- Preparar as abas do navegador antes de começar: site, repositório, documentos, Gemini e histórico de commits.
- Gravar a tela com narração e demonstrar a navegação verdadeira.
- Não mostrar dados privados nem afirmar que 2FA, proteção da branch ou colaboração externa foram ativados sem evidência.
- Publicar um vídeo novo no YouTube e guardar o link para o relatório PDF final.
