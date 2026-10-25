# Segurança do Study Hub

Este e um projeto acadêmico público, composto por uma página estática no GitHub Pages e documentos de portfólio.

## Modelo de acesso

- **Visitantes:** podem consultar o site e os arquivos públicos do repositório; não podem alterar os arquivos apenas por visita.
- **Proprietario:** controla publicação, convites a colaboradores e modificações no repositório por sua conta GitHub.
- **Colaboradores:** só recebem permissao de escrita quando forem convidados e aceitarem um convite. Não e necessário convidar usuários apenas para comprovar a atividade individual.
- **GitHub Pages:** e público; não oferece login ou permissao individual de leitura para está página estática.

## Regras de segurança

1. Nunca publicar senhas, tokens, chaves de API, documentos pessoais de terceiros ou informações medicas reais.
2. Ativar a autenticação de dois fatores na conta GitHub e manter senha unica (verificação deve ser feita pelo titular da conta).
3. Revisar colaboradores em `Settings > Collaborators` ou equivalente, mantendo somente acessos necessários.
4. Fazer alterações com commits descritivos; para mudancas mais relevantes, preferir branch e pull request com revisão.
5. Verificar links e scripts antes da publicação; evitar dependencias de terceiros desnecessarias.
6. Confirmar se a configuração do Pages pública a branch correta; publicar somente conteúdo adequado para leitura pública.
7. Caso um segredo seja exposto, removê-lo do repositório e **revogar/rotacionar** a credencial no servico afetado. Apagar apenas o arquivo não torna o segredo seguro.

## Limites e verificação

Este arquivo **documenta as praticas recomendadas**, não e prova de que todos os ajustes de configuração foram ativados. O status real de 2FA, permissões, regras de branch e verificações deve ser registrado nos testes da etapa final. Não e correto declarar controle de login do PortfolioHUB porque o site não o implementa.

Para comunicar uma vulnerabilidade, contate o proprietário por canal privado; não publique senhas ou detalhes sensíveis em issues públicas.
