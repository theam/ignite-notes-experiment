package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateNote = "create_note"
	TypeMsgUpdateNote = "update_note"
	TypeMsgDeleteNote = "delete_note"
)

var _ sdk.Msg = &MsgCreateNote{}

func NewMsgCreateNote(
	creator string,
	title string,
	content string,
) *MsgCreateNote {
	return &MsgCreateNote{
		Creator:   creator,
		Title:     title,
		Content:   content,
	}
}

func (msg *MsgCreateNote) Route() string {
	return RouterKey
}

func (msg *MsgCreateNote) Type() string {
	return TypeMsgCreateNote
}

func (msg *MsgCreateNote) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateNote) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateNote) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateNote{}

func NewMsgUpdateNote(
	creator string,
	uid string,
	title string,
	content string,
) *MsgUpdateNote {
	return &MsgUpdateNote{
		Creator:   creator,
		Uid:     uid,
		Title:     title,
		Content:   content,
	}
}

func (msg *MsgUpdateNote) Route() string {
	return RouterKey
}

func (msg *MsgUpdateNote) Type() string {
	return TypeMsgUpdateNote
}

func (msg *MsgUpdateNote) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateNote) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateNote) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteNote{}

func NewMsgDeleteNote(
	creator string,
	uid string,

) *MsgDeleteNote {
	return &MsgDeleteNote{
		Uid:   uid,
		Creator: creator,
	}
}
func (msg *MsgDeleteNote) Route() string {
	return RouterKey
}

func (msg *MsgDeleteNote) Type() string {
	return TypeMsgDeleteNote
}

func (msg *MsgDeleteNote) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteNote) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteNote) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
