package keeper

import (
	"github.com/AdrianLorenzoDev/notes/x/notes/types"
)

var _ types.QueryServer = Keeper{}
