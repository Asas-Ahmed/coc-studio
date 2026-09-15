package workspace

type Summary struct {
	Projects int `json:"projects"`
	Recent   int `json:"recent"`
}

type Service struct{}

func NewService() *Service {
	return &Service{}
}

func (s *Service) Summary() Summary {
	return Summary{}
}
