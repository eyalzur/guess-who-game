import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import type { Character } from '../data/characters';
import { COLORS } from '../theme';
import { GenericPortrait, PORTRAITS } from './portraits';

const FRAME_COLORS = [COLORS.pink, COLORS.blue, COLORS.green, COLORS.orange, COLORS.purple, COLORS.yellow];

function frameColorFor(id: string): string {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
  return FRAME_COLORS[hash % FRAME_COLORS.length];
}

type Props = {
  character: Character;
  size?: number;
  onLoadEnd?: () => void;
};

const PHOTOS: Record<string, number> = {
  aladdin: require('../../assets/characters/aladdin.png'),
  'anna-frozen': require('../../assets/characters/anna-frozen.png'),
  'ariel-sharon': require('../../assets/characters/ariel-sharon.png'),
  'arik-einstein': require('../../assets/characters/arik-einstein.png'),
  'asi-cohen': require('../../assets/characters/asi-cohen.png'),
  'avi-kushnir': require('../../assets/characters/avi-kushnir.png'),
  'aviv-geffen': require('../../assets/characters/aviv-geffen.png'),
  'ayelet-shaked': require('../../assets/characters/ayelet-shaked.png'),
  batman: require('../../assets/characters/batman.png'),
  'ben-el': require('../../assets/characters/ben-el.png'),
  'ben-gurion': require('../../assets/characters/ben-gurion.png'),
  'benny-gantz': require('../../assets/characters/benny-gantz.png'),
  'lightning-mcqueen': require('../../assets/characters/lightning-mcqueen.png'),
  'bugs-bunny': require('../../assets/characters/bugs-bunny.png'),
  'buzz-lightyear': require('../../assets/characters/buzz-lightyear.png'),
  'chaim-yavin': require('../../assets/characters/chaim-yavin.png'),
  'chase-paw-patrol': require('../../assets/characters/chase-paw-patrol.png'),
  'daffy-duck': require('../../assets/characters/daffy-duck.png'),
  'dana-international': require('../../assets/characters/dana-international.png'),
  'darth-vader': require('../../assets/characters/darth-vader.png'),
  'donkey-shrek': require('../../assets/characters/donkey-shrek.png'),
  dora: require('../../assets/characters/dora.png'),
  'dudu-topaz': require('../../assets/characters/dudu-topaz.png'),
  'eden-ben-zaken': require('../../assets/characters/eden-ben-zaken.png'),
  'eden-golan': require('../../assets/characters/eden-golan.png'),
  'ehud-barak': require('../../assets/characters/ehud-barak.png'),
  'ehud-olmert': require('../../assets/characters/ehud-olmert.png'),
  elsa: require('../../assets/characters/elsa.png'),
  'etti-ankri': require('../../assets/characters/etti-ankri.png'),
  'eyal-golan': require('../../assets/characters/eyal-golan.png'),
  'gali-atari': require('../../assets/characters/gali-atari.png'),
  'gideon-saar': require('../../assets/characters/gideon-saar.png'),
  'golda-meir': require('../../assets/characters/golda-meir.png'),
  'harel-skaat': require('../../assets/characters/harel-skaat.png'),
  'harry-potter': require('../../assets/characters/harry-potter.png'),
  hermione: require('../../assets/characters/hermione.png'),
  herzog: require('../../assets/characters/herzog.png'),
  'idan-amedi': require('../../assets/characters/idan-amedi.png'),
  'idan-raichel': require('../../assets/characters/idan-raichel.png'),
  'ido-rosenblum': require('../../assets/characters/ido-rosenblum.png'),
  'iron-man': require('../../assets/characters/iron-man.png'),
  'ishay-ribo': require('../../assets/characters/ishay-ribo.png'),
  'jack-sparrow': require('../../assets/characters/jack-sparrow.png'),
  'jerry-mouse': require('../../assets/characters/jerry-mouse.png'),
  kofiko: require('../../assets/characters/kofiko.png'),
  'lior-raz': require('../../assets/characters/lior-raz.png'),
  'marshall-paw-patrol': require('../../assets/characters/marshall-paw-patrol.png'),
  'menachem-begin': require('../../assets/characters/menachem-begin.png'),
  'michael-aloni': require('../../assets/characters/michael-aloni.png'),
  'mickey-mouse': require('../../assets/characters/mickey-mouse.png'),
  'miri-mesika': require('../../assets/characters/miri-mesika.png'),
  'miri-regev': require('../../assets/characters/miri-regev.png'),
  moana: require('../../assets/characters/moana.png'),
  'moishe-oofnik': require('../../assets/characters/moishe-oofnik.png'),
  'moshe-yaalon': require('../../assets/characters/moshe-yaalon.png'),
  'naftali-bennett': require('../../assets/characters/naftali-bennett.png'),
  'nasrin-qadri': require('../../assets/characters/nasrin-qadri.png'),
  netanyahu: require('../../assets/characters/netanyahu.png'),
  'netta-barzilai': require('../../assets/characters/netta-barzilai.png'),
  'noa-kirel': require('../../assets/characters/noa-kirel.png'),
  'omer-adam': require('../../assets/characters/omer-adam.png'),
  'patrick-star': require('../../assets/characters/patrick-star.png'),
  'peppa-pig': require('../../assets/characters/peppa-pig.png'),
  piglet: require('../../assets/characters/piglet.png'),
  pikachu: require('../../assets/characters/pikachu.png'),
  rapunzel: require('../../assets/characters/rapunzel.png'),
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
  'skye-paw-patrol': require('../../assets/characters/skye-paw-patrol.png'),
  'spider-man': require('../../assets/characters/spider-man.png'),
  spongebob: require('../../assets/characters/spongebob.png'),
  stitch: require('../../assets/characters/stitch.png'),
  'cinderella-prince': require('../../assets/characters/cinderella-prince.png'),
  'genie-aladdin': require('../../assets/characters/genie-aladdin.png'),
  'cheshire-cat': require('../../assets/characters/cheshire-cat.png'),
  'red-riding-hood-wolf': require('../../assets/characters/red-riding-hood-wolf.png'),
  'captain-hook': require('../../assets/characters/captain-hook.png'),
  'snow-white': require('../../assets/characters/snow-white.png'),
  'fairy-godmother': require('../../assets/characters/fairy-godmother.png'),
  'hansel-gretel-witch': require('../../assets/characters/hansel-gretel-witch.png'),
  pinocchio: require('../../assets/characters/pinocchio.png'),
  gulliver: require('../../assets/characters/gulliver.png'),
  alice: require('../../assets/characters/alice.png'),
  cinderella: require('../../assets/characters/cinderella.png'),
  tarzan: require('../../assets/characters/tarzan.png'),
  thumbelina: require('../../assets/characters/thumbelina.png'),
  tinkerbell: require('../../assets/characters/tinkerbell.png'),
  'queen-of-hearts': require('../../assets/characters/queen-of-hearts.png'),
  'white-rabbit': require('../../assets/characters/white-rabbit.png'),
  'peter-pan': require('../../assets/characters/peter-pan.png'),
  'ugly-duckling-swan': require('../../assets/characters/ugly-duckling-swan.png'),
  'hansel-and-gretel': require('../../assets/characters/hansel-and-gretel.png'),
  'maya-bee': require('../../assets/characters/maya-bee.png'),
  'puss-in-boots': require('../../assets/characters/puss-in-boots.png'),
  'red-riding-hood': require('../../assets/characters/red-riding-hood.png'),
  ariel: require('../../assets/characters/ariel.png'),
  'emperor-new-clothes-king': require('../../assets/characters/emperor-new-clothes-king.png'),
  'goldilocks-baby-bear': require('../../assets/characters/goldilocks-baby-bear.png'),
  clown: require('../../assets/characters/clown.png'),
  dragon: require('../../assets/characters/dragon.png'),
  ghost: require('../../assets/characters/ghost.png'),
  wizard: require('../../assets/characters/wizard.png'),
  octopus: require('../../assets/characters/octopus.png'),
  caveman: require('../../assets/characters/caveman.png'),
  knight: require('../../assets/characters/knight.png'),
  static: require('../../assets/characters/static.png'),
  superman: require('../../assets/characters/superman.png'),
  'tom-cat': require('../../assets/characters/tom-cat.png'),
  topol: require('../../assets/characters/topol.png'),
  'tuvia-tzafir': require('../../assets/characters/tuvia-tzafir.png'),
  'tzachi-hanegbi': require('../../assets/characters/tzachi-hanegbi.png'),
  'winnie-the-pooh': require('../../assets/characters/winnie-the-pooh.png'),
  wolverine: require('../../assets/characters/wolverine.png'),
  woody: require('../../assets/characters/woody.png'),
  'yaakov-ben-sira': require('../../assets/characters/yaakov-ben-sira.png'),
  'yair-lapid': require('../../assets/characters/yair-lapid.png'),
  'yehoram-gaon': require('../../assets/characters/yehoram-gaon.png'),
  'yehuda-barkan': require('../../assets/characters/yehuda-barkan.png'),
  'yitzhak-rabin': require('../../assets/characters/yitzhak-rabin.png'),
  'yitzhak-shamir': require('../../assets/characters/yitzhak-shamir.png'),
  'yossi-banai': require('../../assets/characters/yossi-banai.png'),
};

const ASPECT = 1.25; // vertical rectangle, same for every character

export default function Avatar({ character, size = 180, onLoadEnd }: Props) {
  const photo = PHOTOS[character.id];
  const [loadedId, setLoadedId] = useState<string | null>(null);
  const isLoading = photo != null && loadedId !== character.id;

  const handleLoadEnd = () => {
    setLoadedId(character.id);
    onLoadEnd?.();
  };

  if (photo) {
    const width = size;
    const height = size * ASPECT;
    const frameColor = frameColorFor(character.id);
    const pad = 10;
    return (
      <View
        style={{
          width: width + pad * 2,
          height: height + pad * 2,
          borderRadius: 28,
          backgroundColor: frameColor,
          padding: pad,
          shadowColor: '#5B3DA6',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.22,
          shadowRadius: 14,
          elevation: 8,
        }}
      >
        <View
          style={{
            width,
            height,
            borderRadius: 18,
            overflow: 'hidden',
            backgroundColor: '#FAF5E9',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            key={character.id}
            source={photo}
            style={{ width, height, position: 'absolute' }}
            resizeMode="cover"
            accessibilityLabel={character.name}
            onLoadEnd={handleLoadEnd}
            onError={handleLoadEnd}
          />
          {isLoading && <ActivityIndicator size="large" color={frameColor} />}
        </View>
      </View>
    );
  }

  const Portrait = PORTRAITS[character.id] ?? GenericPortrait;
  return <DrawnPortrait Portrait={Portrait} size={size} onLoadEnd={onLoadEnd} />;
}

// drawn SVG fallback has nothing to wait on, so report "loaded" as soon as it mounts
function DrawnPortrait({
  Portrait,
  size,
  onLoadEnd,
}: {
  Portrait: React.ComponentType<{ size: number }>;
  size: number;
  onLoadEnd?: () => void;
}) {
  useEffect(() => {
    onLoadEnd?.();
  }, [Portrait, onLoadEnd]);
  return <Portrait size={size} />;
}
