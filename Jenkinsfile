pipeline{  
  environment {
    registry = "<Your-registry-username>/node-helloworld"
    registryCredential = '<dockerhub_credentials_id_in_jenkins>'
    dockerImage = ''
  }
  agent any
    stages {
        stage('Build'){
           steps{
              script{
                sh 'echo bruh'
              } 
           }   
        }
    }
}