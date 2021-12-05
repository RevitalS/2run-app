package http

import (
	"context"
	"encoding/json"
	"net/http"

	"github.com/RevitalS/someone-to-run-with-app/backend/sample-service/duck"
	"github.com/julienschmidt/httprouter"
)

const (
	headerKeyContentType      = "application/json"
	headerVaueContentTypeJSON = "Content-Type"
)

type DuckService interface {
	FindDuck(ctx context.Context, id string) (duck.Duck, error)
	GetAllDucks(ctx context.Context) ([]duck.Duck, error)
}

func AddDuckRoutes(router *httprouter.Router, s DuckService) {
	duckHandler := makeAddDuckHandler(s)
	getAllDucksHandler := makeGetAllDucksHandler(s)

	router.Handle(http.MethodGet, "/ducks", getAllDucksHandler)
	router.Handle(http.MethodGet, "/ducks/:id", duckHandler)
}

func makeAddDuckHandler(s DuckService) httprouter.Handle {
	return func(w http.ResponseWriter, r *http.Request, params httprouter.Params) {
		id := params.ByName("id")
		dck, err := s.FindDuck(r.Context(), id)
		if err != nil {
			// TODO(oren): encode error (don't panic)
			// Think how can you know if need to present 404 or 500
			panic("makeAddDuckHandler paniced! aaaa " + err.Error())
		}

		formatted := formatGetDuckResponse(dck)
		encodeJSON(w, formatted)
	}
}

func makeGetAllDucksHandler(s DuckService) httprouter.Handle {
	return func(w http.ResponseWriter, r *http.Request, params httprouter.Params) {
		ducks, err := s.GetAllDucks(r.Context())
		if err != nil {
			// TODO(oren): encode error (don't panic)
			panic("makeAddDuckHandler paniced! aaaa " + err.Error())
		}

		formatted := formatGetAllDucksResponse(ducks)
		encodeJSON(w, formatted)
	}
}

func encodeJSON(w http.ResponseWriter, data interface{}) {
	w.Header().Set(headerKeyContentType, headerVaueContentTypeJSON)
	w.WriteHeader(http.StatusOK)

	jsonBytes, err := json.Marshal(data)
	if err != nil {
		// TODO: encode error, don't panic
		panic("aaaaa " + err.Error())
	}
	_, err = w.Write(jsonBytes)
	if err != nil {
		// TODO: log error
	}
}
