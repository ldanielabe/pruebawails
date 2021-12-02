package main

import (
	_ "embed"
	"encoding/json"
	"fmt"
	"pruebawails/src/db"
	// "github.com/fsnotify/fsnotify"
	"github.com/wailsapp/wails"
)

func basic(name string) string {
	return db.Connection(name)
}

func list() string {

	users, _ := json.Marshal(db.List())
	fmt.Println("USERRR:: ", users)
	return string(users)
}

//go:embed frontend/build/static/js/main.js
var js string

//go:embed frontend/build/static/css/main.css
var css string

func main() {

	app := wails.CreateApp(&wails.AppConfig{
		Width:  1024,
		Height: 768,
		Title:  "pruebawails",
		JS:     js,
		CSS:    css,
		Colour: "#131313",
	})
	app.Bind(basic)
	app.Bind(list)
	app.Run()
}
