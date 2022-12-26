type DominionSet = {
	name: string;
	art: string;
	icon: string;
	color: string;
  selected?: boolean;
  picked?: boolean;
};

type Options = {
  numSets?: number;
};

declare interface FooterController {
  clickContinue: () => void,
  continueText: () => string,
  canContinue: () => boolean
}
