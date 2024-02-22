import React from 'react';

import BG from 'assets/illustrations/bg.png';
import SHAPE from 'assets/illustrations/geometrical.svg';

import { Button } from 'components/Button';
import { MovableText } from 'components/MovableText';

export function Home() {
  return (
    <div className="flex h-full px-[128px] relative">
      <div className="flex flex-col w-[45%] gap-[32px] pt-[212px] z-50">
        <div className="flex flex-col gap-[16px]">
          <p className="text-[64px] text-blue">
            Salut<span className="text-yellow">__</span>
          </p>
          <MovableText label="Je suis" words={['Graphiste', 'Communicant']} />
          <p className="text-blue text-[32px]">
            Software ingenieur | Analyste developpeur, formateur a l'institut
            superieur d'informatique et Youtube | Full Stack
          </p>
        </div>

        <div className="flex gap-[16px] justify-center">
          <Button label="Telecharger CV" />
          <Button label="Pret" />
        </div>
      </div>
      <div className="relative">
        <div className="overflow-hidden w-[1400px] aspect-square absolute  top-0 left-0 z-40">
          <img
            src={BG}
            alt="bg de fou"
            className="animate-spin-slow object-cover w-full"
          />
        </div>
        <div className="absolute animate-spin-slow top-0 left-0 w-[1000px] z-10">
          <img src={SHAPE} alt="shape" className="w-full object-fit" />
        </div>
      </div>
      <div className="rounded-full bg-gradient-to-bl from-orange to-yellow w-[256px] absolute left-[400px] top-[50px] aspect-square animate-spin-slow"></div>

      <div className="rounded-full bg-gradient-to-bl from-orange to-yellow w-[756px] absolute bottom-[-200px] left-[-300px] aspect-square animate-spin-slow"></div>
    </div>
  );
}
