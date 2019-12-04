import { F1Session } from './f1-session';

export class F1Event {
    fp1: Date;
    fp2: Date;
    fp3: Date;
    qualifying: Date;
    race: Date;
    city: string;
    country: string;
    raceTitle: string;
    sessions: F1Session[];
}