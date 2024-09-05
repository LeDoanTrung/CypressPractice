pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                // Cài đặt các package cần thiết
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                // Chạy các test với mocha-reporter
                sh 'npm run test:mocha-reporter'
            }
        }
        stage('Merge Reports') {
            steps {
                // Gộp các báo cáo
                sh 'npm run merge-reports'
            }
        }
        stage('Build Report') {
            steps {
                // Xây dựng báo cáo cuối cùng
                sh 'npm run build-report'
            }
        }
    }

    post {
        always {
            // Luôn lưu báo cáo sau khi hoàn thành
            archiveArtifacts artifacts: 'mochawesome-report/*.html', allowEmptyArchive: true
        }
    }
}
