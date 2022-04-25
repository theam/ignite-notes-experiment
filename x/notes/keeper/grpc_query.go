package keeper

import (
	"github.com/theam/ignite-notes-experiment/x/notes/types"
)

var _ types.QueryServer = Keeper{}
