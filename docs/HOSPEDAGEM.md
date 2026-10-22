# Hospedagem do sistema independente
Preparação; nenhum serviço contratado ou publicado.
Opção: Render Web Service pago com disco persistente. Código em repositório privado, sem pasta data e sem credenciais.
Build: npm ci --include=dev && npm run build
Start: node server/index.mjs
Variáveis: NODE_ENV=production, HOST=0.0.0.0, DATA_DIR=/var/data, NODE_VERSION=24.13.0, APP_ORIGIN=https://ENDERECO-EXATO-DO-SERVICO (sem barra final).
Disco persistente montado em /var/data. Uma instância, sem escalonamento horizontal com SQLite local.
Criar administrador pelo terminal do serviço: node scripts/admin.mjs (senha digitada no terminal, nunca no código).
Não executar setup no build: disco só está disponível durante execução.
Para levar dados atuais, parar servidor local e transferir pasta data de modo privado ao disco do serviço; não enviar banco ao repositório. Não criar outro administrador se migrar banco existente.
Validar login, isolamento entre clientes, fotos, backup/restauração e persistência após reinício antes de uso real. Definir backup externo periódico; snapshots do provedor não substituem exportação testada.
A limitação de tentativas por IP usa endereço da conexão: atrás de proxy pode bloquear vários usuários juntos. Revisar com proxy confiável antes de produção; não confiar indiscriminadamente em X-Forwarded-For.
URL pode ser compartilhada; dados exigem login. Domínio próprio opcional. Hospedagem paga depende da escolha/conta do proprietário. Ainda não há conta de hospedagem conectada nesta conversa.
Referências: https://render.com/docs/disks e https://render.com/docs/web-services
