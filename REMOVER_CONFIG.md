# 🔒 Remoção de Arquivos Sensíveis

## ⚠️ Importante: Segurança

Se você já commitou arquivos de configuração com credenciais, execute os seguintes comandos para removê-los do histórico:

```bash
# Remover arquivos de configuração do controle de versão
git rm --cached backend/config.env
git rm --cached backend/config.atlas.env

# Commit das mudanças
git commit -m "Remove arquivos de configuração sensíveis"

# Se você já fez push, force o push (CUIDADO!)
# git push --force-with-lease
```

## 📝 Arquivos que NÃO devem ser versionados:

- `backend/config.env` - Contém credenciais reais
- `backend/config.atlas.env` - Contém credenciais do Atlas
- `.env` - Variáveis de ambiente
- `*.log` - Logs do sistema
- `node_modules/` - Dependências

## ✅ Arquivos que DEVEM ser versionados:

- `backend/config.example.env` - Exemplo de configuração
- `package.json` - Dependências do projeto
- `README.md` - Documentação
- Código fonte

## 🛡️ Boas Práticas:

1. **Nunca commite credenciais** no repositório
2. **Use arquivos de exemplo** para configuração
3. **Documente** como configurar o ambiente
4. **Use variáveis de ambiente** para configurações sensíveis

---

**✅ O .gitignore está configurado corretamente para proteger suas credenciais!** 