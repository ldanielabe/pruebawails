package db

import (
	"database/sql"
	"fmt"
	"path/filepath"

	_ "modernc.org/sqlite"
)

var DBPath = "." + string(filepath.Separator) + "mydatabase.db"
var db, err = sql.Open("sqlite", DBPath)

type User struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

func Connection(name string) string {

	_, err = db.Query("INSERT INTO users(name) VALUES ('" + name + "')")
	if err != nil {
		return "Error: " + err.Error()
	}

	return "Registro exitoso"
}

func List() []User {

	rows, err := db.Query("SELECT id, name FROM users")

	if err != nil {
		fmt.Println("Error " + err.Error())
	}

	var names []User

	for rows.Next() {
		var id int
		var name string
		if err2 := rows.Scan(&id, &name); err2 != nil {
			fmt.Println("Error " + rows.Err().Error())
		}
		x := User{Id: id, Name: name}
		names = append(names, x)
	}

	return names
}
