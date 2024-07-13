import { Stack, Box } from '@mui/material';
import logo from '../../constants/images/logo.png';
import { colors } from '../../constants/colors';
import { Link } from 'react-router-dom';
import { SearchBar } from '../';
import React, { useMemo } from 'react';

const Navbar = () => {
  const memoizedLogo = useMemo(() => <img src={logo} alt="logo" height={50} />, []);

  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      p={2}
      sx={{ position: 'sticky', top: 0, zIndex: 999, background: colors.primary, flexWrap: 'wrap' }}
    >
      <Link to={'/'}>{memoizedLogo}</Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;