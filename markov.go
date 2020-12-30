package main

import (
	"encoding/xml"
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
	"regexp"
)

func MarkovHandler(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("html/markov.html")
	if err != nil {
		log.Fatalf("template error: %v", err)
	}
	if err := t.Execute(w, struct {
		Message string
	}{
		Message: getHotentry(),
	}); err != nil {
		log.Printf("failed to execute template: %v", err)
	}
}

type RSS struct {
	XMLName xml.Name `xml:"RDF"`
	Items   []Item   `xml:"item"`
}

type Item struct {
	XMLName xml.Name `xml:"item"`
	Title   string   `xml:"title"`
}

func getHotentry() string {
	url := "http://feeds.feedburner.com/hatena/b/hotentry"
	resp, err := http.Get(url)
	if err != nil {
		fmt.Println(err.Error())
		return ""
	}
	defer resp.Body.Close()
	byteArray, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err.Error())
		return ""
	}
	v := RSS{}
	err = xml.Unmarshal(byteArray, &v)
	if err != nil {
		fmt.Println(err.Error())
		return ""
	}
	s := ""
	rep := regexp.MustCompile(`[-:|/｜：]`)
	for i := 0; i < len(v.Items); i++ {
		result := rep.Split(v.Items[i].Title, -1)
		if len(result) > 0 {
			s += result[0] + "\n"
		}
	}
	return s
}
