type CardShaped = {
  name: string;
	art: string;
	icon: string;
	color: string;
};

type DominionSet = CardShaped & {
  landscapes: string[];
  selected?: boolean;
  picked?: boolean;
};

type Options = {
  numSets?: number;
  numLandscapes: number;
  overrideSet?: DominionSet;
};

declare interface FooterController {
  clickContinue: () => void,
  continueText: () => string,
  canContinue: () => boolean
}
