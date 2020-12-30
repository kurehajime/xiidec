cd $PSScriptRoot
robocopy ../colamone_js/docs/ ./colamone /s
hugo --source ./hugo
echo yes|gcloud app deploy --project xiidec -v xyz