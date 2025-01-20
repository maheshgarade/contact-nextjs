@echo off
:: Navigate to the backend directory
echo Starting Backend Server...
cd backend

:: Check if node_modules exists
if not exist node_modules (
    echo Installing backend dependencies...
    npm install
)

:: Start the backend server using nodemon or npm run dev
echo Running backend server...
start cmd /k "nodemon src/server.ts || npm run dev"

:: Navigate back to the root directory
cd ..

:: Navigate to the frontend directory
echo Starting Frontend Server...
cd frontend

:: Check if node_modules exists
if not exist node_modules (
    echo Installing frontend dependencies...
    npm install
)

:: Start the frontend server using npm run dev or next dev --turbopack
echo Running frontend server...
start cmd /k "npm run dev || next dev --turbopack"

:: Navigate back to the root directory
cd ..

echo Servers started. Press any key to exit.
pause
