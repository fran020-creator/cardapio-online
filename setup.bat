@echo off
echo ========================================
echo    Cardapio Online - Setup Script
echo ========================================
echo.

echo [1/4] Instalando dependencias do frontend...
npm install
if %errorlevel% neq 0 (
    echo ❌ Erro ao instalar dependencias do frontend
    pause
    exit /b 1
)

echo [2/4] Instalando dependencias do backend...
cd backend
npm install
if %errorlevel% neq 0 (
    echo ❌ Erro ao instalar dependencias do backend
    pause
    exit /b 1
)
cd ..

echo [3/4] Verificando MongoDB...
echo Por favor, certifique-se de que o MongoDB esta rodando.
echo Se nao estiver, execute 'mongod' em outro terminal.
echo.
pause

echo [4/4] Iniciando aplicacao...
echo.
echo ✅ Setup concluido!
echo.
echo Para executar o projeto:
echo 1. Backend: cd backend && npm run dev
echo 2. Frontend: npm run dev
echo.
echo URLs:
echo - Frontend: http://localhost:5173
echo - Backend: http://localhost:3001
echo.
pause 