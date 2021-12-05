package main

import (
	"context"
	"fmt"
	"os"

	//"github.com/RevitalS/someone-to-run-with-app/backend/foundation/nextid"
	"github.com/RevitalS/someone-to-run-with-app/backend/foundation/config"
	"github.com/RevitalS/someone-to-run-with-app/backend/foundation/nextlog"
	"github.com/RevitalS/someone-to-run-with-app/backend/foundation/nextsql"
)

func main() {
	fmt.Println("Hello World")

	configurator := config.NewConfigurator("config/development")

	// loggerator (loggers factory)
	loggerator := nextlog.NewLoggerator("debug", os.Stdout)
	mainLogger := loggerator.NewLogger("main")

	// sql
	sqlConfig := configurator.SQLConfig()
	sqlLogger := loggerator.SQLLogger()
	sqlDB, err := nextsql.NewDB(sqlConfig, sqlLogger)
	if err != nil {
		mainLogger.Error(err, "failed to open db connection")
	}

	// example for insert to sql
	someID := "nextid.GenerateID(12)"
	someName := "Some Name"
	q := `
		INSERT into stuff (id, name)
		VALUES (?, ?)
`

	sqlDB.Exec(context.Background(), q, someID, someName)

}
