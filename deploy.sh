cd `dirname $0`
cp ../colamone_js/docs/* ./static/colamone
yes|gcloud app deploy -v xyz