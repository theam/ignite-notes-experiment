package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/theam/ignite-notes-experiment/x/notes/types"
)

// SetNote set a specific note in the store from its index
func (k Keeper) SetNote(ctx sdk.Context, note types.Note) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NoteKeyPrefix))
	b := k.cdc.MustMarshal(&note)
	store.Set(types.NoteKey(
		note.Uid,
	), b)
}

// GetNote returns a note from its index
func (k Keeper) GetNote(
	ctx sdk.Context,
	uid string,
) (val types.Note, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NoteKeyPrefix))

	b := store.Get(types.NoteKey(
		uid,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveNote removes a note from the store
func (k Keeper) RemoveNote(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NoteKeyPrefix))
	store.Delete(types.NoteKey(
		index,
	))
}

// GetAllNote returns all note
func (k Keeper) GetAllNote(ctx sdk.Context) (list []types.Note) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NoteKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Note
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
