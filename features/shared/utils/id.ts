import { generate } from 'short-uuid';
import { RESOURCE_TYPE } from '../domain/resourse';

export function genId(type: RESOURCE_TYPE) {
    return `${type}_${generate()}`;
}
