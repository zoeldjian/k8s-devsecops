pipeline {
  agent any

  stages {

    stage('Git Checkout') {
      steps {
        git branch: 'main', url: 'https://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@github.com/zoeldjian/k8s-devsecops.git'
      }
    }
    
    stage('SonarQube - SAST') {
      steps {
        withSonarQubeEnv('SonarQube') {
        sh "mvn sonar-scanner -Dsonar.projectKey=golang-sirka -Dsonar.sources=. -Dsonar.host.url=http://18.141.173.8:9000 -Dsonar.login=39d66a37284974d1fee8d8f3f43d8b59dec00bb4" 
        }
       timeout(time: 2, unit: 'MINUTES') {
         script {
           waitForQualityGate abortPipeline: true
        }
      }  
    }
  }

//     stage('Docker Build and Push') {
//       steps {
//           gitCommit = sh(returnStdout: true, script: "git rev-parse HEAD").trim()
//           docker.withRegistry("https://218649523932.dkr.ecr.ap-southeast-1.amazonaws.com", "ecr:ap-southeast-1:jenkins-aws-creds") {
//             docker.build("'''+ serviceContainerRepo +'''").push("${gitCommit}-${BUILD_ID}")
//       }
//     }
//    }

    stage ('Vulnerability Scan - Docker') {
      steps {
          sh "bash trivy-docker-image-scan.sh"
      }
    }

    stage('Kubernetes Deployment - DEV') {
      steps {
        withKubeConfig([credentialsId: 'kubeconfig']) {
          sh "sed -i 's#replace#siddharth67/numeric-app:${GIT_COMMIT}#g' k8s_deployment_service.yaml"
          sh "kubectl apply -f k8s_deployment_service.yaml"
        }
      }
    }
  }
}

// node {
//         stage ('Prepare code') {
//             checkout([$class: "GitSCM",
//             branches: [[name: "${params.Branch}"]],
//             extensions: [],
//             /*userRemoteConfigs: [[url: "https://github.com/zoeldjian/'''+ serviceRepo +'''", credentialsId: "zoeldjian-github-userpass"]]]) */
//             userRemoteConfigs: [[url: 'https://github.com/zoeldjian/k8s-devsecops', credentialsId: 'zoeldjian-userpass']]])
//             notifyBuild('STARTED')
//         }

//         stage ('Build Image') {
//             gitCommit = sh(returnStdout: true, script: "git rev-parse HEAD").trim()
//             docker.withRegistry("https://218649523932.dkr.ecr.ap-southeast-1.amazonaws.com", "ecr:ap-southeast-1:jenkins-aws-creds") {
//               docker.build("'''+ serviceContainerRepo +'''").push("${gitCommit}-${BUILD_ID}")
//             }
//         }
//         //Scan test
//         stage ('Vulnerability Scan - Docker') {
//             sh "bash trivy-docker-image-scan.sh"
//         }
   
//         stage('Kubernetes Deployment - DEV') {
//             withKubeConfig([credentialsId: 'k8s_secret']) {
//             //sh "sed -i 's#replace#siddharth67/numeric-app:${GIT_COMMIT}#g' k8s_deployment_service.yaml"
//             //sh "kubectl apply -f deployment.yaml"
//             sh "kubectl get ns"
//             }
//         }
        
// } 