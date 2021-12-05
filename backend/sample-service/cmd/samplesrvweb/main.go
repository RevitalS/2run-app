package main

import (
	"context"
	"fmt"
	"net/http"
	"os"

	"github.com/RevitalS/someone-to-run-with-app/backend/foundation/config"
	"github.com/RevitalS/someone-to-run-with-app/backend/foundation/nextlog"
	"github.com/RevitalS/someone-to-run-with-app/backend/foundation/nextsql"

	"github.com/RevitalS/someone-to-run-with-app/backend/sample-service/duck"
	"github.com/RevitalS/someone-to-run-with-app/backend/sample-service/duckmanaging"
	duckhttp "github.com/RevitalS/someone-to-run-with-app/backend/sample-service/http"
	"github.com/RevitalS/someone-to-run-with-app/backend/sample-service/sql"
)

const (
	port = ":1111"
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

	// ducks repo
	ducksRepo := sql.NewDuckRepo(sqlDB)

	// ducking
	duckService := duckmanaging.NewService(ducksRepo)

	/* ****************************************************************************************************************** */

	// example of use
	ctx := context.Background()
	someDuckID, err := duckService.CreateDuck(ctx, "Ducky")
	if err != nil {
		mainLogger.Error(err, "failed to insert some ducky")
	}

	_, err = duckService.CreateDuck(ctx, "Ducky Mc'DuckFace")
	if err != nil {
		mainLogger.Error(err, "failed to insert other duck")
	}

	returnedDuck, err := duckService.FindDuck(ctx, someDuckID)
	if err != nil {
		mainLogger.Error(err, "failed to find some duck")
	}

	fmt.Println("\n----------- Some Duck Found: -------------")
	printDucks(returnedDuck)

	allDucks, err := ducksRepo.FindAllDucks(ctx)
	if err != nil {
		mainLogger.Error(err, "failed to find all duck")
	}
	fmt.Println("\n----------- All Ducks: -------------")
	printDucks(allDucks...)

	/* ****************************************************************************************************************** */

	// starting the http server
	router := duckhttp.NewRouter()
	duckhttp.AddDuckRoutes(router, duckService)

	mainLogger.Info(fmt.Sprintf("start server on port: %s. if development - http://localhost%s", port, port))
	if err := http.ListenAndServe(port, router); err != nil {
		mainLogger.Error(err, "failed http listening and serving")
	}
}

func printDucks(ducks ...duck.Duck) {
	for _, d := range ducks {
		fmt.Printf("---------> Duck id: %s, name: %s\n", d.ID, d.Name)
	}
}
