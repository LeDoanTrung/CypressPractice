pipeline {
    agent any
    
    tools { nodejs "node" }
    
    stages {
        stage('Build') {
            steps {
                git 'https://github.com/LeDoanTrung/CypressPractice'
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                        bat 'if exist results rd /s /q results'
                        bat 'if exist mochawesome.json del mochawesome.json'
                        
                       bat 'npm run test:mocha-reporter'
                       bat 'npm run merge-reports'
                       bat 'npm run build-report'
            }
        }
    }
}