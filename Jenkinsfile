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