import { describe, expect, it } from 'vitest';
import { RESOURCE_TYPE } from '../../../shared/domain/resourse';
import { genId } from '../../../shared/utils/id';

describe('genId', () => {
  it('should generate an id with the correct type', () => {
    const id = genId(RESOURCE_TYPE.USER);
    expect(id).toMatch(/^user_/);
  });
});