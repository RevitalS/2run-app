package main

import (
	"2run-app/sample-service/sql"
	userhttp "2run-app/sample-service/transport"
	"2run-app/sample-service/usermanaging"
	"fmt"
	conf "github.com/RevitalS/someone-to-run-with-app/backend/foundation/config"
	"github.com/RevitalS/someone-to-run-with-app/backend/foundation/nextlog"
	"github.com/RevitalS/someone-to-run-with-app/backend/foundation/nextsql"
	"net/http"
	"os"
)

const (
	port = ":1111"
)

func main() {
	fmt.Println("Hello World")

	configurator := conf.NewConfigurator("config/development")

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

	// user repo
	usersRepo := sql.NewUserRepo(sqlDB)

	// user managing
	userService := usermanaging.NewService(usersRepo)

	// starting the http server
	router := userhttp.NewRouter()
	userhttp.AddUserRoutes(router, userService)
	//userService.CreatUserAuth()

	mainLogger.Info(fmt.Sprintf("start server on port: %s. if development - http://localhost%s", port, port))
	if err := http.ListenAndServe(port, router); err != nil {
		mainLogger.Error(err, "failed http listening and serving")
	}
}
