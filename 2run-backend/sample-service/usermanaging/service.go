package usermanaging

import (
	"2run-app/sample-service/user"
	"context"
	"fmt"
	"github.com/RevitalS/someone-to-run-with-app/backend/foundation/nextid"
	"golang.org/x/crypto/bcrypt"
)

type UserRepo interface {
	InsertUserAuth(ctx context.Context, user user.Auth) error
	InsertUserProfile(ctx context.Context, id string, user user.Profile) error
	CheckUserLogInData(ctx context.Context, uAuth user.Auth) (resUserAuth user.Auth, err error)
}

type service struct {
	userRepo UserRepo
}

func NewService(user UserRepo) *service {
	return &service{
		userRepo: user,
	}
}

func (s *service) CreatUserAuth(ctx context.Context, uAuth user.Auth) (id string, err error) {
	id = nextid.GenerateID(12)

	// validate password length
	if len(uAuth.Password) < 8 {
		println("error Password is too short (minimum is 8 characters)")
		return
	}

	// encrypt user password
	hashedPassword, encryptErr := bcrypt.GenerateFromPassword([]byte(uAuth.Password), 8)
	if encryptErr != nil {
		return "", fmt.Errorf("failed to crpyt password: %w", encryptErr)
	}

	newUserAuth := user.Auth{
		ID:       id,
		UserName: uAuth.UserName,
		Password: string(hashedPassword),
	}

	if err := s.userRepo.InsertUserAuth(ctx, newUserAuth); err != nil {
		return "", fmt.Errorf("error creating UserAuth: %w", err)
	}

	return id, nil
}

func (s *service) CreatUserProfile(ctx context.Context, id string, uProfile user.Profile) (err error) {
	newUserProfile := user.Profile{
		ID:        id,
		Email:     uProfile.Email,
		FirstName: uProfile.FirstName,
		LastName:  uProfile.LastName,
		BirthDay:  uProfile.BirthDay,
		//Gander:           uProfile.Gander,
		//City:             uProfile.City,
		//ProfilePicture:   uProfile.ProfilePicture,
		//MinSpeed:         uProfile.MinSpeed,
		//MaxSpeed:         uProfile.MaxSpeed,
		//RunningGoals:     uProfile.RunningGoals,
		//JoggingLevel:     uProfile.JoggingLevel,
		//GanderPreference: uProfile.GanderPreference,
		//About:            uProfile.About,

	}

	if err := s.userRepo.InsertUserProfile(ctx, id, newUserProfile); err != nil {
		fmt.Errorf("error creating UserAuth: %w", err)
	}

	return nil

}

func (s *service) CreatLoginProcess(ctx context.Context, uAuth user.Auth) (err error) {
	userLogin := user.Auth{
		UserName: uAuth.UserName,
		Password: uAuth.Password,
	}

	res, err1 := s.userRepo.CheckUserLogInData(ctx, userLogin)
	if err1 != nil {
		fmt.Println("error creating UserAuth: %w", err1)
		return
	}

	// Compare the stored hashed password, with the hashed version of the password that was received
	if err = bcrypt.CompareHashAndPassword([]byte(userLogin.Password), []byte(res.Password)); err != nil {
		return fmt.Errorf("passwords don't match %w", err)
		// If the two passwords don't match, return a 401 status
	}

	return nil
}
