import React, { useState, useCallback, ReactNode } from 'react';

import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase';
import { GrSearch } from 'react-icons/gr'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    border: 2,
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const SearchBar = ({ search, handleChange, handleKeyDown } 
    : { search: string, 
        handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
        handleKeyDown?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>}) => {
    return (
        <Search>
            <SearchIconWrapper>
                <GrSearch />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={search}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </Search>
    )
}

export default SearchBar