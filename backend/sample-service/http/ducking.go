package http

import (
	"context"
	"encoding/json"
	"github.com/julienschmidt/httprouter"
	"net/http"

	"github.com/RevitalS/someone-to-run-with-app/backend/sample-service/duck"
	//"github.com/julienschmidt/httprouter"
)

const (
	headerValueContentTypeJSON = "application/json"
	headerKeyContentType       = "Content-Type"
)

type DuckService interface {
	FindDuck(ctx context.Context, id string) (duck.Duck, error)
	GetAllDucks(ctx context.Context) ([]duck.Duck, error)
}

func AddDuckRoutes(router *httprouter.Router, s DuckService) {
	duckHandler := makeFindDuckHandler(s)
	getAllDucksHandler := makeGetAllDucksHandler(s)

	router.Handle(http.MethodGet, "/ducks", getAllDucksHandler)
	router.Handle(http.MethodGet, "/ducks/:id", duckHandler)
}

// private

func makeFindDuckHandler(s DuckService) httprouter.Handle {
	return func(w http.ResponseWriter, r *http.Request, params httprouter.Params) {
		// decode http request
		id := params.ByName("id")


		// trigger BL
		dck, err := s.FindDuck(r.Context(), id)
		if err != nil {
			// TODO(oren): encode error (don't panic)
			// Think how can you know if need to present 404 or 500
			panic("makeAddDuckHandler paniced! aaaa " + err.Error())
		}

		// encode to http response
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
	w.Header().Set(headerKeyContentType, headerValueContentTypeJSON)

	jsonBytes, err := json.Marshal(data)
	if err != nil {
		// TODO: encode error, don't panic
		panic("aaaaa " + err.Error())
	}
	_, err = w.Write(jsonBytes)
	if err != nil {
		// TODO: log error
	}

	w.WriteHeader(http.StatusTeapot)
}
