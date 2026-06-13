import audio from './audio.yaml';
import characters from './characters.yaml';
import common from './common.yaml';
import items from './items.yaml';
import quests from './quests.yaml';
import screens from './screens.yaml';
import skills from './skills.yaml';
import skillChecks from './skillchecks.yaml';
import fonts from './fonts.yaml';
import localization from './localization.yaml';
import tooltips from './tooltips.yaml';
import dialogs from './dialogs.yaml';
import animations from './animations.yaml';

import { ModuleConfigInput } from 'narrat';

const gameConfigs: ModuleConfigInput = {
  audio,
  characters,
  common,
  items,
  quests,
  screens,
  skills,
  skillChecks,
  fonts,
  localization,
  tooltips,
  dialogs,
  animations,
};
export default gameConfigs;
