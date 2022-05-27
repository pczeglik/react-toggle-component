import { BODY_CLASS_NAMES } from './constants';

export function mapPercentageToClassName(percentage: number) {
  if (percentage < 50) {
    return BODY_CLASS_NAMES[0];
  }

  if (percentage >= 50 && percentage < 100) {
    return BODY_CLASS_NAMES[1];
  }

  return BODY_CLASS_NAMES[2];
}