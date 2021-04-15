import React, { useState, useRef, useEffect } from 'react';
import { Box, Image, Button, List, ListItem, Link } from '@chakra-ui/react';
import { ImMenu } from 'react-icons/im';
import { AiOutlineClose } from 'react-icons/ai';
function MobileNav() {
  return (
    <>
      <Box
        bg='#F9FAFC'
        position='fixed'
        top='0'
        left='0'
        width='80%'
        height='100vh'
      >
        <Link href='/startpage'>
          <Image
            h={30}
            mt='10%'
            ml='10%'
            src='https://res.cloudinary.com/dutzmwqpe/image/upload/v1605265851/jiffix/logo_phflkx.png'
            alt='Logo'
          />
        </Link>
        <List mt='20%' mx='35%' fontSize='xs' fontWeight='500' color='#1A97CF'>
          {/* <ListItem my='5'>
            <Link href='/autotips'>AUTOTIPS</Link>
          </ListItem> */}
          <ListItem my='5'>
            <Link href='/website/faq'>FAQ'S</Link>
          </ListItem>
          <ListItem my='5'>
            <Link href='/website/contact'>CONTACT</Link>
          </ListItem>
        </List>
        <Box w='30%' display='flex' flexDirection='column' mx='25%'>
          <Button
            fontSize='xs'
            color='#1A97CF'
            borderRadius='3px'
            fontWeight='500'
            my='5'
            px='20'
          >
            <Link href='/login'>SIGN IN</Link>
          </Button>
          <Button
            fontSize='xs'
            bg='#1A97CF'
            borderRadius='3px'
            fontWeight='500'
            colorScheme='blue'
            px='20'
          >
            <Link href='/'>GET A QUOTE</Link>
          </Button>
        </Box>
      </Box>
    </>
  );
}

function Navbar() {
  const [navBg, setNavBg] = useState(false);
  const [navText, setNavText] = useState(false);
  const [navShadow, setNavShadow] = useState(false);
  const navRef = useRef();
  (navRef.current = navBg), navText, navShadow;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      if (navRef.current !== show) {
        setNavBg(show);
        setNavText(show);
        setNavShadow(show);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //Mobile Nav
  const [open, setOpen] = useState({
    collapsed: false,
  });

  const handleNav = () => {
    setOpen({
      collapsed: !open.collapsed,
    });
  };

  return (
    <Box
      position='fixed'
      top='0'
      zIndex='10'
      w='100%'
      boxShadow={
        navShadow ? ' 0px 2px 15px rgba(26, 151, 207, 0.1)' : 'transparent'
      }
      color={navText ? 'blue' : 'white'}
      backgroundColor={navBg ? 'white' : 'transparent'}
      style={{ transition: '1s ease' }}
    >
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        py={10}
        height='10vh'
        px={{ base: '10', md: '20', xl: '20' }}
      >
        <Link href='/startpage'>
          <Image
            h={30}
            src='https://res.cloudinary.com/dutzmwqpe/image/upload/v1605265851/jiffix/logo_phflkx.png'
            alt='Logo'
          />
        </Link>
        <List
          display={{ base: 'none', md: 'none', xl: 'flex' }}
          justifyContent='space-around'
          alignItems='center'
          w='60%'
          fontSize='xs'
          fontWeight='500'
          color={navText ? '#1A97CF' : '#1a97cf'}
        >
          <ListItem>
            {/* <Link href='/website/autotips'>AUTOTIPS</Link> */}
          </ListItem>
          <ListItem>
            <Link href='/website/faq'>FAQ'S</Link>
          </ListItem>
          <ListItem>
            <Link href='/website/contact'>CONTACT</Link>
          </ListItem>

          <Box width='30%' display='flex' justifyContent='space-between'>
            <Button
              fontSize='xs'
              borderRadius='3px'
              fontWeight='500'
              color='#1A97CF'
            >
              <Link href='/login'>SIGN IN</Link>
            </Button>

            <Button
              fontSize='xs'
              bg='#1A97CF'
              borderRadius='3px'
              fontWeight='500'
              colorScheme='blue'
            >
              <Link href='/'>GET A QUOTE</Link>
            </Button>
          </Box>
        </List>

        {/* mobile stylin */}
        <Box display={{ base: 'block', md: 'block', xl: 'none' }}>
          {/* hambugger button for opening and closiing*/}
          <Box>
            {open.collapsed ? (
              <AiOutlineClose
                onClick={handleNav}
                style={{ color: '#1A97cf' }}
              />
            ) : (
              <ImMenu onClick={handleNav} style={{ color: '#1A97CF' }} />
            )}
          </Box>
        </Box>
      </Box>
      <Box>{open.collapsed && <MobileNav />}</Box>
    </Box>
  );
}

export default Navbar;
