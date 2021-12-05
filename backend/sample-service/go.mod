module github.com/RevitalS/someone-to-run-with-app/backend/sample-service

require (
	github.com/RevitalS/someone-to-run-with-app/backend/foundation v0.0.0
	github.com/go-sql-driver/mysql v1.6.0 // indirect
)

replace github.com/RevitalS/someone-to-run-with-app/backend/foundation => ../foundation

go 1.15
