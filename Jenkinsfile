pipeline {
    agent any
    
    tools { nodejs "node" }
    
    stages {
        stage('Build') {
            steps {
                git 'https://github.com/LeDoanTrung/CypressPractice'
                bat 'if exist node_modules rd /s /q node_modules'
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                script {
                    // Enable ANSI color in the console output
                    ansiColor('xterm') {
                        bat 'if exist mochawesome-report rd /s /q mochawesome-report'
                        bat 'if exist results rd /s /q results'
                        
                        // Check version
                        bat 'node -v'
                        bat 'npm -v'
                        bat 'echo %PATH%'
                        bat 'echo %NODE_PATH%'
                        bat 'type cypress.json'
                        bat 'type package.json' 

                        bat 'npm run test:mocha-reporter'
                        bat 'npm run merge-reports'
                        bat 'npm run build-report'
                    }
                }
                // Archive the Mochawesome report
                archiveArtifacts artifacts: 'mochawesome-report/*.html', allowEmptyArchive: true
            }
        }
    }
}