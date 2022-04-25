package notes_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/theam/ignite-notes-experiment/testutil/keeper"
	"github.com/theam/ignite-notes-experiment/testutil/nullify"
	"github.com/theam/ignite-notes-experiment/x/notes"
	"github.com/theam/ignite-notes-experiment/x/notes/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		NoteList: []types.Note{
			{
				Uid: "0",
			},
			{
				Uid: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.NotesKeeper(t)
	notes.InitGenesis(ctx, *k, genesisState)
	got := notes.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.NoteList, got.NoteList)
	// this line is used by starport scaffolding # genesis/test/assert
}
