package http

import "github.com/RevitalS/someone-to-run-with-app/backend/sample-service/duck"

func formatGetDuckResponse(dck duck.Duck) map[string]interface{} {
	return map[string]interface{}{
		"duck": formatDuck(dck),
	}
}

func formatGetAllDucksResponse(ducks []duck.Duck) map[string]interface{} {
	formattedDucks := make([]map[string]interface{}, len(ducks))
	for i, dck := range ducks {
		formattedDucks[i] = formatDuck(dck)
	}

	return map[string]interface{}{
		"ducks": formattedDucks,
	}
}

func formatDuck(dck duck.Duck) map[string]interface{} {
	return map[string]interface{}{
		"id":        dck.ID,
		"name":      dck.Name,
		"createdAt": dck.CreatedAt,
		"updatedAt": dck.UpdatedAt,
	}
}
