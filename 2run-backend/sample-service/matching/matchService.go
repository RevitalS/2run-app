package matching

import (
	"2run-app/sample-service/user"
)

type MatchRepository interface {
	GetMatchBySearch(val ...string) ([]user.Profile, error)
	GetMachByAlgo(val ...string) ([]user.Profile, error)
}
