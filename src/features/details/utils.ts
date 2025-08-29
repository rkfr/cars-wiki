import type { ModelDetailsSpec, ModelDetaisSection } from './types';

export function toSectionArray(
  section: ModelDetaisSection,
): ModelDetailsSpec[] {
  return Object.entries(section).map(([, details]) => details);
}
