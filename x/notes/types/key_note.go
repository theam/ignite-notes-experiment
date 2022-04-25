package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// NoteKeyPrefix is the prefix to retrieve all Note
	NoteKeyPrefix = "Note/value/"
)

// NoteKey returns the store key to retrieve a Note from the index fields
func NoteKey(
	uid string,
) []byte {
	var key []byte

	indexBytes := []byte(uid)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
