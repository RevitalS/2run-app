package duckmanaging

import (
	"context"
	"fmt"

	"github.com/RevitalS/someone-to-run-with-app/backend/foundation/nextid"
	"github.com/RevitalS/someone-to-run-with-app/backend/sample-service/duck"
)

type DuckRepo interface {
	InsertDuck(ctx context.Context, duck duck.Duck) error
	FindDuck(ctx context.Context, duckID string) (duck.Duck, error)
	FindAllDucks(ctx context.Context) ([]duck.Duck, error)
}

type service struct {
	duckRepo DuckRepo
}

func NewService(duckRepo DuckRepo) *service {
	return &service{
		duckRepo: duckRepo,
	}
}

func (s *service) CreateDuck(ctx context.Context, name string) (id string, err error) {
	id = nextid.GenerateID(12)
	newDuck := duck.Duck{
		ID:   id,
		Name: name,
	}

	if err := s.duckRepo.InsertDuck(ctx, newDuck); err != nil {
		return "", fmt.Errorf("CreateDuck: %w", err)
	}

	return id, nil
}

func (s *service) FindDuck(ctx context.Context, id string) (duck.Duck, error) {
	dck, err := s.duckRepo.FindDuck(ctx, id)
	if err != nil {
		return duck.Duck{}, fmt.Errorf("FindDuck: %w", err)
	}

	return dck, nil
}

func (s *service) GetAllDucks(ctx context.Context) ([]duck.Duck, error) {
	ducks, err := s.duckRepo.FindAllDucks(ctx)
	if err != nil {
		return nil, fmt.Errorf("CreateDuck: %w", err)
	}

	return ducks, nil
}
