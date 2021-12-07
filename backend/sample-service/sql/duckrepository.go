package sql

import (
	"context"
	"fmt"
	"time"

	"github.com/RevitalS/someone-to-run-with-app/backend/foundation/nextsql"
	"github.com/RevitalS/someone-to-run-with-app/backend/sample-service/duck"
)

type duckRes struct {
	ID        string    `sql:"id"`
	Name      string    `sql:"name"`
	CreatedAt time.Time `sql:"created_at"`
	UpdatedAt time.Time `sql:"updated_at"`
}

type duckRepo struct {
	db nextsql.DB
}

func NewDuckRepo(db nextsql.DB) *duckRepo {
	return &duckRepo{
		db: db,
	}
}

func (r *duckRepo) InsertDuck(ctx context.Context, duck duck.Duck) error {
	q := `
		INSERT into stuff (id, name)
		VALUES (?, ?)
`

	_, err := r.db.Exec(context.Background(), q, duck.ID, duck.Name)
	if err != nil {
		return fmt.Errorf("failed to exec: %w", err)
	}

	return nil
}

func (r *duckRepo) FindDuck(ctx context.Context, duckID string) (duck.Duck, error) {
	q := `
		SELECT id, name, created_at, updated_at
		FROM stuff
		WHERE id = ?
`

	results, err := r.db.StructQuery(context.Background(), duckRes{}, q, duckID)
	if err != nil {
		return duck.Duck{}, fmt.Errorf("failed to query from sql: %w", err)
	}

	if len(results) == 0 {
		return duck.Duck{}, fmt.Errorf("didn't find duck with id: %s", duckID)
	}

	res := results[0]
	duckResult := res.(duckRes)

	return duck.Duck{
		ID:        duckResult.ID,
		Name:      duckResult.Name,
		CreatedAt: duckResult.CreatedAt,
		UpdatedAt: duckResult.UpdatedAt,
	}, nil
}

func (r *duckRepo) FindAllDucks(ctx context.Context) ([]duck.Duck, error) {
	q := `
		SELECT id, name, created_at, updated_at
		FROM stuff
`

	results, err := r.db.StructQuery(context.Background(), duckRes{}, q)
	if err != nil {
		return nil, fmt.Errorf("failed to query from sql: %w", err)
	}

	ducks := make([]duck.Duck, len(results))
	for i, res := range results {
		duckRes := res.(duckRes)
		ducks[i] = duck.Duck{
			ID:        duckRes.ID,
			Name:      duckRes.Name,
			CreatedAt: duckRes.CreatedAt,
			UpdatedAt: duckRes.UpdatedAt,
		}
	}

	return ducks, nil
}
