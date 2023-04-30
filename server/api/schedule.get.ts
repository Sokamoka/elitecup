import { sortBy, prop } from 'ramda';
import { VBR_CHAMPIONSHIP_IDS } from '~/constants';
import { scheduleService } from '~/utils/services';

export default defineEventHandler(async () => {
  try {
    const result = await scheduleService(VBR_CHAMPIONSHIP_IDS);

    const sorted = sortBy(prop('gameDate'))(result);
    return sorted;
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: error.message,
    });
  }

  return [];
});
