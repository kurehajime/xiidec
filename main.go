package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/markov.html", MarkovHandler)
	http.HandleFunc("/colamone/index.html", colamoneHandler)
	http.HandleFunc("/colamone/colamone.html", colamoneHandler)
	http.HandleFunc("/colamone/colamone-en.html", colamoneHandler)
	http.HandleFunc("/colamone/colamone-ja.html", colamoneHandler)
	http.HandleFunc("/colamone/colamone-zh-hans.html", colamoneHandler)
	http.HandleFunc("/colamone/colamone-zh-hant.html", colamoneHandler)
	http.HandleFunc("/colamone/colamone-kr.html", colamoneHandler)
	http.HandleFunc("/colamone/colamone-hi.html", colamoneHandler)
	http.HandleFunc("/colamone/colamone-pt.html", colamoneHandler)
	http.HandleFunc("/colamone/colamone-de.html", colamoneHandler)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Printf("Defaulting to port %s", port)
	}

	log.Printf("Listening on port %s", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatal(err)
	}
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.NotFound(w, r)
		return
	}
	fmt.Fprint(w, "Hello, World!")
}
func colamoneHandler(w http.ResponseWriter, r *http.Request) {
	http.Redirect(w, r, "https://colamone.com", 301)
}