package settings

import "fmt"

type Settings struct {
	Theme string `json:"theme"`
}

type Service struct {
	current Settings
}

func NewService() *Service {
	return &Service{current: Settings{Theme: "system"}}
}

func (s *Service) Get() Settings {
	return s.current
}

func (s *Service) SetTheme(theme string) error {
	switch theme {
	case "light", "dark", "system":
		s.current.Theme = theme
		return nil
	default:
		return fmt.Errorf("unsupported theme: %s", theme)
	}
}
