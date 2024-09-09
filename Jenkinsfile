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
                script {
                    // Enable ANSI color in the console output
                    ansiColor('xterm') {
                        bat 'if exist "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\Cypress Pro\\mochawesome" rd /s /q "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\Cypress Pro\\mochawesome"'
                        
                        
                        // Check version
                        bat 'node -v'
                        bat 'npm -v'
                        bat 'echo %PATH%'
                        bat 'echo %NODE_PATH%'
                        bat 'type cypress.config.js'
                        bat 'type package.json' 

                        bat 'npm run test'
                    }
                }
                // Archive the Mochawesome report
                archiveArtifacts artifacts: 'mochawesome-report/*.html', allowEmptyArchive: true
            }
        }
    }
}