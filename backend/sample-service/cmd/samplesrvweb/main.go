package main

import (
	"context"
	"fmt"
	"os"

	"github.com/RevitalS/someone-to-run-with-app/backend/foundation/nextid"
	"github.com/RevitalS/someone-to-run-with-app/backend/sample-service/duck"
	"github.com/RevitalS/someone-to-run-with-app/backend/sample-service/sql"

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

	// ducks repo
	ducksRepo := sql.NewDuckRepo(sqlDB)

	// example of use
	// insert
	someDuck := duck.Duck{
		ID:   nextid.GenerateID(12),
		Name: "Ducky",
	}

	otherDuck := duck.Duck{
		ID:   nextid.GenerateID(12),
		Name: "Ducky Mc'DuckFace",
	}

	ctx := context.Background()
	if err := ducksRepo.InsertDuck(ctx, someDuck); err != nil {
		mainLogger.Error(err, "failed to insert some duck")
	}

	if err := ducksRepo.InsertDuck(ctx, otherDuck); err != nil {
		mainLogger.Error(err, "failed to insert other duck")
	}

	returnedDuck, err := ducksRepo.FindDuck(ctx, someDuck.ID)
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

}

func printDucks(ducks ...duck.Duck) {
	for _, d := range ducks {
		fmt.Printf("---------> Duck id: %s, name: %s\n", d.ID, d.Name)
	}
}
