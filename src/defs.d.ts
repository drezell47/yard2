type Expansion = {
	name: string;
	art: string;
	icon: string;
	color: string;
  selected?: boolean;
  picked?: boolean;
};

type Options = {
  numExpansions?: number;
};

declare interface FooterController {
  clickContinue: () => void,
  continueText: () => string,
  canContinue: () => boolean
}
