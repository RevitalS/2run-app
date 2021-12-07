package duck

import "time"

type Duck struct {
	ID        string
	Name      string
	CreatedAt time.Time
	UpdatedAt time.Time
}
