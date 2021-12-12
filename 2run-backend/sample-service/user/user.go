package user

import "time"

type Auth struct {
	ID        string
	UserName  string
	Password  string
	CreatedAt time.Time
	UpdatedAt time.Time
}

type Profile struct {
	ID        string
	FirstName string
	LastName  string
	BirthDay  string
	Email     string
	//Gander string
	//City string
	//ProfilePicture string
	//MinSpeed int
	//MaxSpeed int
	//RunningGoals string
	//JoggingLevel string
	//GanderPreference string
	//About string
}
