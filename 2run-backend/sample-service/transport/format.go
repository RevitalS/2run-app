package transport

import "2run-app/sample-service/user"

func formatGetUserResponse(user user.Auth) map[string]interface{} {
	return map[string]interface{}{
		"user": formatUser(user),
	}
}

func formatGetAllUsersResponse(users []user.Auth) map[string]interface{} {
	formattedUsers := make([]map[string]interface{}, len(users))
	for i, usr := range users {
		formattedUsers[i] = formatUser(usr)
	}

	return map[string]interface{}{
		"users": formattedUsers,
	}
}

func formatUser(user user.Auth) map[string]interface{} {
	return map[string]interface{}{
		"id":        user.ID,
		"userName":  user.UserName,
		"createdAt": user.CreatedAt,
		"updatedAt": user.UpdatedAt,
	}
}

func formatUserId(id string) map[string]interface{} {
	return map[string]interface{}{
		"id": id,
	}
}
