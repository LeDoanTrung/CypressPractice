pipeline {
    agent any

    environment {
        CYPRESS_API_URL = 'https://jsonplaceholder.typicode.com/posts'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    def nodeHome = tool name: 'NodeJS', type: 'NodeJSInstallation'
                    env.PATH = "${nodeHome}\\bin;${env.PATH}" // Đường dẫn đúng cho Windows
                }
                // Cài đặt các gói npm cho Windows
                bat 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                // Chạy các bài kiểm tra Cypress trên Windows
                bat 'npm run test'
            }
        }
    }

    post {
        always {
            // Lưu trữ kết quả kiểm tra
            archiveArtifacts artifacts: 'cypress/screenshots/**/*, cypress/videos/**/*'
        }
        success {
            echo 'Tests passed!'
        }
        failure {
            echo 'Tests failed!'
        }
    }
}
