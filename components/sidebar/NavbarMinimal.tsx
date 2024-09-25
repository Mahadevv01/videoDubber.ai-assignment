import { useState } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import Link from 'next/link'; 
import { usePathname } from 'next/navigation'; 
import classes from './NavbarMinimal.module.css';

interface NavbarLinkProps {
  svg: string; 
  label: string;
  href: string;
  active?: boolean;
}

function NavbarLink({ svg, label, href, active }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <Link href={href}>
        <UnstyledButton className={`${classes.link} ${active ? classes.active : ''}`}>
          <Stack align="center">
            <img
              src={svg}
              alt={label}
              style={{
                width: rem(30),
                height: rem(30),
                cursor: 'pointer',
                filter: active ? 'grayscale(0)' : 'grayscale(100%)', // Apply effect if active
              }}
            />
          </Stack>
        </UnstyledButton>
      </Link>
    </Tooltip>
  );
}

const mockdata = [
  { svg: '/remover.svg', label: 'Remover', href: '/' },
  { svg: '/splitter.svg', label: 'Splitter', href: '/splitter' },
  { svg: '/pitcher.svg', label: 'Pitcher', href: '/pitcher' },
  { svg: '/key_bpm_finder.svg', label: 'Key BPM Finder', href: '/bpm' },
  { svg: '/cutter.svg', label: 'Cutter', href: '/cutter' },
  { svg: '/joiner.svg', label: 'Joiner', href: '/joiner' },
  { svg: '/recorder.svg', label: 'Recorder', href: '/recorder' },
  { svg: '/karaoke.svg', label: 'Karaoke', href: '/karaoke' },
];

export function NavbarMinimal() {
  const [show, setShow] = useState(true);
  const pathname = usePathname();

  const links = mockdata.map((link) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={pathname === link.href}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <img onClick={() => setShow(!show)} src="/hamburger.svg" alt="n/a" width={30} height={30} style={{ cursor: 'pointer' }} />
      </Center>
      {show && (
        <div className={classes.navbarMain}>
          <Stack justify="center" gap={10}>
            {links}
          </Stack>
        </div>
      )}
      {show && (
        <Stack justify="center" gap={0}>
          <NavbarLink svg="/support.svg" label="Change account" href="/" active={pathname === '/change-account'} />
          <NavbarLink svg="/flag.svg" label="Logout" href="/" active={pathname === '/logout'} />
        </Stack>
      )}
    </nav>
  );
}
