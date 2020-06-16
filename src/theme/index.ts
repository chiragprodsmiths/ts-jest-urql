import BadgesVariants from './theme.variants.badges';
import BorderVariants from './theme.variants.borders';
import { ButtonVariants } from './theme.variants.buttons';
import CardsVariants from './theme.variants.cards';
import Colors from './theme.colors';
import InputVariants from './theme.variants.input';
import ImagesVariants from './theme.variants.images';
import LinkVariants from './theme.variants.links';
import RadioVariants from './theme.variants.radio';
import Radii from './theme.radii';
import Styles from './theme.styles';
import Shadows from './theme.shadows';
import Space from './theme.spaces';
import TextVariants from './theme.variants.text';
import TextareaVariants from './theme.variants.textarea';
import Typography from './theme.typography';
import { Variants } from './theme.variants';

export const theme = {
  badges: BadgesVariants,
  borders: BorderVariants,
  buttons: ButtonVariants,
  colors: Colors,
  cards: CardsVariants,
  fonts: Typography.fonts,
  fontSizes: Typography.fontSizes,
  fontWeights: Typography.fontWeights,
  forms: {
    ...InputVariants,
    ...TextareaVariants,
    ...RadioVariants,
  },
  images: ImagesVariants,
  lineHeights: Typography.lineHeights,
  links: LinkVariants,
  radii: Radii,
  shadows: Shadows,
  space: Space,
  styles: Styles,
  text: TextVariants,
  variants: Variants,
};
