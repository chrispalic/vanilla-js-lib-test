import * as Shared from './shared/shared';

export function testFunc(message: string): void {
    Shared.sharedLogger(message);
}