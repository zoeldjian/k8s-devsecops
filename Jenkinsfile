node {
    def gitCommit
    try {
        stage ('Prepare code') {
            checkout([$class: "GitSCM",
            branches: [[name: "${params.Branch}"]],
            extensions: [],
            userRemoteConfigs: [[url: "https://github.com/zoeldjian/k8s-devsecops", credentialsId: "zoeldjian-userpass"]]])
            notifyBuild('STARTED')
        }

        stage('Sonarqube Analysis') {
            def scannerHome = tool 'sonarqube';
            withSonarQubeEnv('sonarqube') {
              sh "${scannerHome}/bin/sonar-scanner \
              -D sonar.login=admin \
              -D sonar.password=@Dmin312 \
              -D sonar.projectKey=golang-sirka \
              -D sonar.exclusions=vendor/**,resources/**,**/*.java \
              -D sonar.host.url=http://18.141.173.8:9000/"
                
            }
        }        
    
        stage ('Build Image') {
            gitCommit = sh(returnStdout: true, script: "git rev-parse HEAD").trim()
            docker.withRegistry("https://218649523932.dkr.ecr.ap-southeast-1.amazonaws.com", "ecr:ap-southeast-1:jenkins-aws-creds") {
              docker.build("218649523932.dkr.ecr.ap-southeast-1.amazonaws.com/sirka-landing").push("${gitCommit}-${BUILD_ID}")
            }
        }
        
        stage ('Vulnerability Scan - Docker') {
           sh "bash dockerscan.sh"
        }
        
        stage('Kubernetes Deployment - DEV') {
            withKubeConfig([credentialsId: 'k8s-secret']) {
            //sh "sed -i 's#replace#siddharth67/numeric-app:${GIT_COMMIT}#g' k8s_deployment_service.yaml"
            //sh "kubectl apply -f deployment.yaml"
            sh "kubectl get ns"
            }
        }
    } 
 
    catch (e) {
        // If there was an exception thrown, the build failed
        currentBuild.result = "FAILED"
        throw e
    } finally {
        // Success or failure, always send notifications
        notifyBuild(currentBuild.result)
    }
}

// def notifyBuild(String buildStatus = 'STARTED') {
//     // build status of null means successful
//     wrap([$class: 'BuildUser']) {
//         def user = "${BUILD_USER}"
//         def subject = ""
//         def summary = ""
//         def colorName = 'RED'
//         def colorCode = '#FF0000'
//         def details = """<p>STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
//             <p>Check console output at &QUOT;<a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>&QUOT;</p>"""

//         author = sh(returnStdout: true, script: "git --no-pager show -s --format='%an' `git rev-parse HEAD`").trim()
//         buildStatus =  buildStatus ?: 'SUCCESS'


//         if (user == 'SCMTrigger' ){
//             user = "${author}"
//         }

//         if (buildStatus == 'STARTED') {
//             subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' Started by ${user}"
//             summary = "${subject} (${env.BUILD_URL})"
//         } else {
//             subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
//             summary = "${subject} (${env.BUILD_URL})"
//         }

//         if (buildStatus == 'STARTED') {
//             color = 'YELLOW'
//             colorCode = '#FFFF00'
//         } else if (buildStatus == 'SUCCESS') {
//             color = 'GREEN'
//             colorCode = '#00FF00'
//         } else {
//             color = 'RED'
//             colorCode = '#FF0000'
//         }

//         slackSend (channel: 'builds', color: colorCode, message: summary)
//     }
// }

