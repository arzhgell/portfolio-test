import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import { IconsGroup } from './IconsGroup';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <nav className="flex text-blue text-[36px] gap-[32px] ">
        <NavLink className="hover:text-yellow transition-all" to="/">
          Accueil
        </NavLink>
        <NavLink className="hover:text-yellow transition-all" to="/about">
          À propos
        </NavLink>
        <NavLink className="hover:text-yellow transition-all" to="/skills">
          Compétences
        </NavLink>
        <NavLink className="hover:text-yellow transition-all" to="/blog">
          Blog
        </NavLink>
      </nav>
      <IconsGroup icons={[faYoutube, faFacebook, faLinkedin, faTwitter]} />
    </header>
  );
}
