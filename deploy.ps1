cd $PSScriptRoot
robocopy ../colamone_js/docs/ ./static/colamone /s
echo yes|gcloud app deploy -v xyz