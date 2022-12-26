type DominionSet = {
	name: string;
	art: string;
	icon: string;
	color: string;
  landscapes: string[];
  selected?: boolean;
  picked?: boolean;
};

type Options = {
  numSets?: number;
  numLandscapes?: number;
};

declare interface FooterController {
  clickContinue: () => void,
  continueText: () => string,
  canContinue: () => boolean
}
