package transport

import (
	"2run-app/sample-service/user"
	"context"
	"encoding/json"
	"fmt"
	"github.com/julienschmidt/httprouter"
	"net/http"
)

const (
	headerValueContentTypeJSON = "application/json"
	headerKeyContentType       = "Content-Type"
)

type UserService interface {
	CreatUserAuth(ctx context.Context, uAuth user.Auth) (string, error)
	CreatUserProfile(ctx context.Context, id string, uProfile user.Profile) error
	CreatLoginProcess(ctx context.Context, uAuth user.Auth) error
}

func AddUserRoutes(router *httprouter.Router, us UserService) {
	pingHandler := makePingHandler()
	signUpHandler := makeSignUpHandler(us)
	creatUserProfileHandler := editUserProfileHandler(us)

	router.Handle(http.MethodGet, "/ping", pingHandler)
	router.Handle(http.MethodPost, "/signup", signUpHandler)
	router.Handle(http.MethodPost, "/signup/edit", creatUserProfileHandler)

}

func makePingHandler() httprouter.Handle {
	return func(w http.ResponseWriter, r *http.Request, params httprouter.Params) {
		_, err := fmt.Fprint(w, "PONG")
		if err != nil {
			errMessage := fmt.Sprintf("error writing response: %v", err)
			http.Error(w, errMessage, http.StatusInternalServerError)
		}
	}

}

func makeSignUpHandler(us UserService) httprouter.Handle {
	return func(w http.ResponseWriter, r *http.Request, params httprouter.Params) {
		// decode request body
		uAuth := &user.Auth{}
		err := json.NewDecoder(r.Body).Decode(uAuth)
		if err != nil {
			// return a 400 status
			errMessage := fmt.Sprintf("error read from body: %v", err)
			http.Error(w, errMessage, http.StatusBadRequest)
			return
		}

		// trigger BL
		id, dbErr := us.CreatUserAuth(r.Context(), *uAuth)
		if dbErr != nil {
			panic("makeSignUpHandler panicked! " + dbErr.Error())
		}

		// encode to http response
		formatted := formatUserId(id)
		encodeJSON(w, formatted)
	}

}

func editUserProfileHandler(us UserService) httprouter.Handle {
	return func(w http.ResponseWriter, r *http.Request, params httprouter.Params) {
		//id := params.ByName("id")
		id := r.Header.Get("id")
		// decode http request body
		uProfile := &user.Profile{}
		err := json.NewDecoder(r.Body).Decode(uProfile)
		if err != nil {
			// return a 400 status
			errMessage := fmt.Sprintf("error read from body: %v", err)
			http.Error(w, errMessage, http.StatusBadRequest)
			return
		}
		// trigger BL
		dbErr := us.CreatUserProfile(r.Context(), id, *uProfile)
		if dbErr != nil {
			panic("makeSignUpHandler panicked! " + dbErr.Error())
		}

		//w.Write([]byte("succeed to insert user profile to DB"))
	}

}

func signInHandler(us UserService) httprouter.Handle {
	return func(w http.ResponseWriter, r *http.Request, params httprouter.Params) {
		// decode http request body
		uAuth := &user.Auth{}
		err := json.NewDecoder(r.Body).Decode(uAuth)
		if err != nil {
			// return a 400 status
			errMessage := fmt.Sprintf("error read from body: %v", err)
			http.Error(w, errMessage, http.StatusBadRequest)
			return
		}
		// trigger BL
		dbErr := us.CreatLoginProcess(r.Context(), *uAuth)
		if dbErr != nil {
			panic("makeSignUpHandler panicked! " + dbErr.Error())
		}

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
