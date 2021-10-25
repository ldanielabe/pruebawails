package main

import (
	_ "embed"
	"pruebawails/src/db"

	"github.com/wailsapp/wails"
)

func basic() string {
	return db.Conect()
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
	app.Run()
}
