pipeline {
    agent any

    environment {
        CYPRESS_API_URL = 'https://jsonplaceholder.typicode.com/posts'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Cài đặt Node.js và thiết lập đường dẫn
                    def nodeHome = tool name: 'NodeJS 20', type: 'NodeJSInstallation'
                    env.PATH = "${nodeHome}\\bin;${env.PATH}" // Đường dẫn đúng cho Windows
                }
                // Kiểm tra Node.js và npm đã được cài đặt chưa
                bat 'node -v' // In ra phiên bản Node.js để kiểm tra
                bat 'npm -v'  // In ra phiên bản npm để kiểm tra
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
