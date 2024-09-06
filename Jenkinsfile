pipeline {
    agent any

    environment {
        // Đặt biến môi trường nếu cần
        CYPRESS_API_URL = 'https://jsonplaceholder.typicode.com/posts'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Cài đặt Node.js và npm
                    def nodeHome = tool name: 'NodeJS', type: 'NodeJSInstallation'
                    env.PATH = "${nodeHome}/bin:${env.PATH}"
                }
                // Cài đặt các gói npm
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                // Chạy các bài kiểm tra Cypress
                sh 'npm run test'
            }
        }
    }

    post {
        always {
            // Lưu trữ kết quả kiểm tra
            archiveArtifacts artifacts: 'cypress/screenshots/**/*, cypress/videos/**/*'
        }
        success {
            // Thông báo khi kiểm tra thành công
            echo 'Tests passed!'
        }
        failure {
            // Thông báo khi kiểm tra thất bại
            echo 'Tests failed!'
        }
    }
}