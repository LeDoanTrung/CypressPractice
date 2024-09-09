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
                bat 'npm test'
            }
        }
    }
}