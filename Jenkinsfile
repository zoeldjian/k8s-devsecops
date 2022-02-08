node {
        stage ('Prepare code') {
            checkout([$class: "GitSCM",
            branches: [[name: "${params.Branch}"]],
            extensions: [],
            /*userRemoteConfigs: [[url: "https://github.com/zoeldjian/'''+ serviceRepo +'''", credentialsId: "zoeldjian-github-userpass"]]]) */
            userRemoteConfigs: [[url: 'https://github.com/zoeldjian/k8s-devsecops', credentialsId: 'zoeldjian-github-userpass']]])
            notifyBuild('STARTED')
        }

        stage ('Build Image') {
            gitCommit = sh(returnStdout: true, script: "git rev-parse HEAD").trim()
            docker.withRegistry("https://218649523932.dkr.ecr.ap-southeast-1.amazonaws.com", "ecr:ap-southeast-1:jenkins-aws-creds") {
              docker.build("'''+ serviceContainerRepo +'''").push("${gitCommit}-${BUILD_ID}")
            }
        }
        //Scan test
        stage ('Vulnerability Scan - Docker') {
            sh "bash trivy-docker-image-scan.sh"
        }
   
        stage('Kubernetes Deployment - DEV') {
            withKubeConfig([credentialsId: 'k8s_secret']) {
            //sh "sed -i 's#replace#siddharth67/numeric-app:${GIT_COMMIT}#g' k8s_deployment_service.yaml"
            //sh "kubectl apply -f deployment.yaml"
            sh "kubectl get ns"
            }
        }
} 