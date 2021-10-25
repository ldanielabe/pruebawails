package db

import (
	"database/sql"
	"github.com/go-sql-driver/mysql"
)

// Open database connection
database, err := sql.Open("mysql", "root:@/wails")
if err != nil {
	panic(err.Error()) 
}

defer database.Close()

func Conect() string{

	// Execute the query
	rows, err := database.Query("SELECT * FROM users")
	if err != nil {
		panic(err.Error()) // proper error handling instead of panic in your app
	}

	return rows
}
