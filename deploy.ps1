cd $PSScriptRoot
robocopy ../colamone_js/docs/ ./static/colamone /s
hugo --source ./hugo
echo yes|gcloud app deploy --project xiidec -v xyz