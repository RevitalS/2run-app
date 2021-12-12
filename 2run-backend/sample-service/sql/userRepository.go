package sql

import (
	"2run-app/sample-service/user"
	"context"
	"fmt"
	"github.com/RevitalS/someone-to-run-with-app/backend/foundation/nextsql"
	"time"
)

type userAuthRes struct {
	ID        string    `sql:"id"`
	UserName  string    `sql:"user_name"`
	Password  string    `sql:"password"`
	CreatedAt time.Time `sql:"created_at"`
	UpdatedAt time.Time `sql:"updated_at"`
}
type userProfile struct {
	ID string `sql:"id"`
}

type userRepo struct {
	db nextsql.DB
}

func NewUserRepo(db nextsql.DB) *userRepo {
	return &userRepo{
		db: db,
	}
}

func (ur *userRepo) InsertUserAuth(ctx context.Context, uAuth user.Auth) error {
	q := `
		INSERT into userAuth (id, user_name, password)
		VALUES (?, ?, ?)
`
	_, dbErr := ur.db.Exec(ctx, q, uAuth.ID, uAuth.UserName, uAuth.Password)
	if dbErr != nil {
		return fmt.Errorf("failed to exec: %w", dbErr)
	}

	return nil
}

func (ur *userRepo) InsertUserProfile(ctx context.Context, id string, uProfile user.Profile) error {
	q := `
		INSERT into userProfile (id, email, first_name, last_name, birth_day)
		VALUES (?, ?, ?, ?, ?)`

	_, insertErr := ur.db.Exec(context.Background(), q, id, uProfile.Email, uProfile.FirstName, uProfile.LastName, uProfile.BirthDay)
	if insertErr != nil {
		return fmt.Errorf("failed to exec: %w", insertErr)
	}

	return nil
}

func (ur *userRepo) CheckUserLogInData(ctx context.Context, uAuth user.Auth) (uAuthRes user.Auth, err error) {

	q := `select password from users where username = ?`
	result, err := ur.db.StructQuery(context.Background(), userAuthRes{}, q, uAuth.UserName)
	if err != nil {
		// If there is an issue with the database, return a 500 error
		fmt.Println("db error: %w", err)
		return
	}

	exists, err := ur.db.IsExists(ctx, q, userAuthRes{}, uAuth.UserName)
	if !exists {
		fmt.Errorf("id not exists: %w", err)
		return
	}
	if err != nil {
		fmt.Errorf("username does not exist, send an \"Unauthorized\"(401) status: %w", err)
		return

	}

	res := result[0]
	userResult := res.(userAuthRes)

	return user.Auth{
		UserName: userResult.UserName,
		Password: userResult.Password,
	}, nil

}
