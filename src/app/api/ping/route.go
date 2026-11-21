package main

import (
	"encoding/json"
	"net/http"
)

func GET(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/plain")
	msg := "pong"
	json.NewEncoder(w).Encode(msg)
}
