package transport

import (
	"fmt"
	"github.com/julienschmidt/httprouter"
	"net/http"
)

func Ping(w http.ResponseWriter, r *http.Request, params httprouter.Params) {
	_, err := fmt.Fprint(w, "PONG")
	if err != nil {
		errMessage := fmt.Sprintf("error writing response: %v", err)
		http.Error(w, errMessage, http.StatusInternalServerError)
	}
}

func Welcome(w http.ResponseWriter, r *http.Request, params httprouter.Params) {
	_, err := fmt.Fprint(w, "welcome to 2RUN App")
	if err != nil {
		errMessage := fmt.Sprintf("error writing response: %v", err)
		http.Error(w, errMessage, http.StatusInternalServerError)
	}
}

func CreatUserProfile(w http.ResponseWriter, r *http.Request, params httprouter.Params) {

}

func Login(w http.ResponseWriter, r *http.Request, params httprouter.Params) {

}

func Logout(w http.ResponseWriter, r *http.Request, params httprouter.Params) {

}
