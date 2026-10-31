import React from 'react';
import { Image, View } from 'react-native';
import type { Character } from '../data/characters';
import { GenericPortrait, PORTRAITS } from './portraits';

type Props = {
  character: Character;
  size?: number;
};

const PHOTOS: Record<string, number> = {
  'ariel-sharon': require('../../assets/characters/ariel-sharon.png'),
  'arik-einstein': require('../../assets/characters/arik-einstein.png'),
  'asi-cohen': require('../../assets/characters/asi-cohen.png'),
  'avi-kushnir': require('../../assets/characters/avi-kushnir.png'),
  'aviv-geffen': require('../../assets/characters/aviv-geffen.png'),
  'ayelet-shaked': require('../../assets/characters/ayelet-shaked.png'),
  batman: require('../../assets/characters/batman.png'),
  'ben-10': require('../../assets/characters/ben-10.png'),
  'ben-el': require('../../assets/characters/ben-el.png'),
  'ben-gurion': require('../../assets/characters/ben-gurion.png'),
  'benny-gantz': require('../../assets/characters/benny-gantz.png'),
  'bugs-bunny': require('../../assets/characters/bugs-bunny.png'),
  'buzz-lightyear': require('../../assets/characters/buzz-lightyear.png'),
  'daffy-duck': require('../../assets/characters/daffy-duck.png'),
  'dana-international': require('../../assets/characters/dana-international.png'),
  'darth-vader': require('../../assets/characters/darth-vader.png'),
  'donkey-shrek': require('../../assets/characters/donkey-shrek.png'),
  dora: require('../../assets/characters/dora.png'),
  doraemon: require('../../assets/characters/doraemon.png'),
  'dudu-topaz': require('../../assets/characters/dudu-topaz.png'),
  'eden-ben-zaken': require('../../assets/characters/eden-ben-zaken.png'),
  'eden-golan': require('../../assets/characters/eden-golan.png'),
  'ehud-barak': require('../../assets/characters/ehud-barak.png'),
  'ehud-olmert': require('../../assets/characters/ehud-olmert.png'),
  elsa: require('../../assets/characters/elsa.png'),
  'etti-ankri': require('../../assets/characters/etti-ankri.png'),
  'eyal-golan': require('../../assets/characters/eyal-golan.png'),
  'finn-the-human': require('../../assets/characters/finn-the-human.png'),
  'gali-atari': require('../../assets/characters/gali-atari.png'),
  'gideon-saar': require('../../assets/characters/gideon-saar.png'),
  'golda-meir': require('../../assets/characters/golda-meir.png'),
  gumball: require('../../assets/characters/gumball.png'),
  'harel-skaat': require('../../assets/characters/harel-skaat.png'),
  'harry-potter': require('../../assets/characters/harry-potter.png'),
  hermione: require('../../assets/characters/hermione.png'),
  herzog: require('../../assets/characters/herzog.png'),
  'idan-amedi': require('../../assets/characters/idan-amedi.png'),
  'idan-raichel': require('../../assets/characters/idan-raichel.png'),
  'ido-rosenblum': require('../../assets/characters/ido-rosenblum.png'),
  'ishay-ribo': require('../../assets/characters/ishay-ribo.png'),
  'jack-sparrow': require('../../assets/characters/jack-sparrow.png'),
  'jerry-mouse': require('../../assets/characters/jerry-mouse.png'),
  'lior-raz': require('../../assets/characters/lior-raz.png'),
  'menachem-begin': require('../../assets/characters/menachem-begin.png'),
  'michael-aloni': require('../../assets/characters/michael-aloni.png'),
  'mickey-mouse': require('../../assets/characters/mickey-mouse.png'),
  'miri-mesika': require('../../assets/characters/miri-mesika.png'),
  'miri-regev': require('../../assets/characters/miri-regev.png'),
  moana: require('../../assets/characters/moana.png'),
  'moshe-yaalon': require('../../assets/characters/moshe-yaalon.png'),
  'naftali-bennett': require('../../assets/characters/naftali-bennett.png'),
  'nasrin-qadri': require('../../assets/characters/nasrin-qadri.png'),
  netanyahu: require('../../assets/characters/netanyahu.png'),
  'netta-barzilai': require('../../assets/characters/netta-barzilai.png'),
  'noa-kirel': require('../../assets/characters/noa-kirel.png'),
  'omer-adam': require('../../assets/characters/omer-adam.png'),
  'patrick-star': require('../../assets/characters/patrick-star.png'),
  pikachu: require('../../assets/characters/pikachu.png'),
  'reuven-rivlin': require('../../assets/characters/reuven-rivlin.png'),
  'sarit-hadad': require('../../assets/characters/sarit-hadad.png'),
  'scooby-doo': require('../../assets/characters/scooby-doo.png'),
  'shaike-levi': require('../../assets/characters/shaike-levi.png'),
  'shimon-peres': require('../../assets/characters/shimon-peres.png'),
  'shlomi-shabat': require('../../assets/characters/shlomi-shabat.png'),
  'shlomo-artzi': require('../../assets/characters/shlomo-artzi.png'),
  'shlomo-bar-aba': require('../../assets/characters/shlomo-bar-aba.png'),
  shrek: require('../../assets/characters/shrek.png'),
  simba: require('../../assets/characters/simba.png'),
  'spider-man': require('../../assets/characters/spider-man.png'),
  static: require('../../assets/characters/static.png'),
  superman: require('../../assets/characters/superman.png'),
  'tom-cat': require('../../assets/characters/tom-cat.png'),
  topol: require('../../assets/characters/topol.png'),
  'tuvia-tzafir': require('../../assets/characters/tuvia-tzafir.png'),
  'tzachi-hanegbi': require('../../assets/characters/tzachi-hanegbi.png'),
  wolverine: require('../../assets/characters/wolverine.png'),
  woody: require('../../assets/characters/woody.png'),
  'yaakov-ben-sira': require('../../assets/characters/yaakov-ben-sira.png'),
  'yair-lapid': require('../../assets/characters/yair-lapid.png'),
  'yehoram-gaon': require('../../assets/characters/yehoram-gaon.png'),
  'yitzhak-rabin': require('../../assets/characters/yitzhak-rabin.png'),
  'yitzhak-shamir': require('../../assets/characters/yitzhak-shamir.png'),
  'yossi-banai': require('../../assets/characters/yossi-banai.png'),
};

export default function Avatar({ character, size = 180 }: Props) {
  const photo = PHOTOS[character.id];

  if (photo) {
    return (
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          overflow: 'hidden',
          backgroundColor: '#FAF5E9',
        }}
      >
        <Image source={photo} style={{ width: size, height: size }} resizeMode="cover" />
      </View>
    );
  }

  const Portrait = PORTRAITS[character.id] ?? GenericPortrait;
  return <Portrait size={size} />;
}
